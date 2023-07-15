const axios = require('axios');
//const errorHandler  = require('../utils/errors')

const URL = 'https://rickandmortyapi.com/api/character/'

async function getCharById (req, res) {
    try{
        const { id } = req.params;
        const response = await axios(`${URL}/${id}`)

        const { status, name, species, origin, image, gender } = response.data;

        const character = { id, status, name, species, origin, image, gender };

        res.status(200).json(character);

    } catch (err) {
        return res.status(500).json({message: error})
        //errorHandler(res, err)
    }
}
/*
const getCharById =  (req, res) => {
    const { id } = req.params;

    axios(`${URL}/${id}`)
    .then(({data})=> {
        const { status, name, species, origin, image, gender } = data;

        const character = { id, status, name, species, origin, image, gender };

        return character.name
                ? res.status(200).json(character)
                : res.status(404).send('Not Found')
    })
    .catch(err => res.status(500).send(err.message))
}
*/
//getCharById(1, 555);

module.exports = getCharById;