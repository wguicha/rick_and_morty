const server = require('../src/app');
const session = require('supertest');

const agent = session(server);

describe("Verificar la respuesta positiva del servidor", () => {
    it("Debe responder con el status 200 al hacer GET /rickandmorty/character/:id", async () =>{
        await agent.get('/rickandmorty/character/1').expect(200);
    });

    it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async () =>{
        const response = (await agent.get('/rickandmorty/character/1')).body;
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('species');
        expect(response).toHaveProperty('gender');
        expect(response).toHaveProperty('status');
        expect(response).toHaveProperty('origin');
        expect(response).toHaveProperty('image');

    });
    it("Si hay un error responde con status: 500", async () => {
        await agent.get('/rickandmorty/character/x').expect(500);
    });
})

describe("Verficar la validacion del GET /rickandmorty/login", () => {
    it("La validacion del email y password debe devolver un objeto con propiedad access = true", async () => {
        const response = (await agent.get('/rickandmorty/login/?email=admin@mail.com&password=abcd123')).body;
        expect(response).toEqual({ access : true });
    });

    it("La no validacion del email y password debe devolver un objeto con propiedad access = false", async () => {
        const response = (await agent.get('/rickandmorty/login/?email=adn@mail.com&password=acd123')).body;
        expect(response.access).toBe(false);
    });
})

const char = { id: 1, name: 'William' }
const char2 = { id: 2, name: 'Alberto' }

describe("Validar el funcionanmiento del POST", () =>{
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
        const response = await agent.post('/rickandmorty/fav').send(char)
        //Verificar si devuelve un array con el objeto creado:
        //expect(response.body).toEqual([char])
        //Verficar si la respuesta es un array:
        expect(response.body).toBeInstanceOf(Array);
    })

    it("Devuelve un array con todos los favoritos ya agregados", async () => {
        const response = await agent.post('/rickandmorty/fav').send(char2)
        //expect(response.body).toEqual([char, char2])
        //Otra opcion:
        expect(response.body).toContainEqual(char, char2)
    })
})

describe("Verifica el borrado de favoritos", () => {
    it("Si el id no existe en el fav, devolver todos los fav", async () => {
        const response = await agent.delete('/rickandmorty/fav/6655')

        expect(response.body).toContainEqual(char, char2);
    })

    it("Si el id existe, devuelve los favoritos menos el eliminado", async () => {
        const response = await agent.delete('/rickandmorty/fav/1')

        expect(response.body).toContainEqual(char2);
    })

})