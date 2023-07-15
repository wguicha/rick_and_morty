const { Favorites } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        if(id){
            await Favorites.destroy({
                where: { id }
            })

            const favs = await Favorites.findAll();

            return res.status(201).json(favs);

        } else {
            return res.status(401).json({message: 'Faltan datos'})
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }

}

module.exports = deleteFav;