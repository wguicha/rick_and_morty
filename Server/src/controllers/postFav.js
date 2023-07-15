const { Favorites } = require('../DB_connection');

const postFav = async (req, res) => {
    console.log("body:", req.body)
    const { id, name, origin, status, image, species, gender } = req.body;
    try {
        if(id && name && origin && status && image && species && gender){
            await Favorites.findOrCreate({
                where: { id, name, origin, status, image, species, gender}
            });

            const favs = await Favorites.findAll();

            return res.status(201).json(favs);

        } else {
            return res.status(401).json({message: 'Faltan datos'})
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }

}

module.exports = postFav;