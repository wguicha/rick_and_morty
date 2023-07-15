const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(email && password){
            const newUser = await User.findOrCreate({
                where: { email, password }
            });

            return res.status(201).json(newUser[0]);

        } else {
            return res.status(400).json({message: 'Faltan datos'})
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }

}

module.exports = postUser;