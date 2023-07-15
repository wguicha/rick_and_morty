const { User } = require('../DB_connection');

const login = async (req, res) => {
    const { email, password } = req.query

    try {
        console.log("data:", email, password)
        if(email && password){
            const found = await User.findOne({
                where: { email }
            })
            if(!found){
                return res.status(404).json({message : 'Usuario no encontrado'})
            }
            if(found.password !== password){
                return res.status(403).json({message : 'Contraseña incorrecta'})
            }

            return res.status(200).json({ access: true})

        } else {
            return res.status(400).json({message: 'Faltan datos'})
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

module.exports = login;