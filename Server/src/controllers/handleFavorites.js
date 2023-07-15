let myFavorties = [];


function postFav (req, res) {
    myFavorties.push(req.body);

    return res.status(200).json(myFavorties);

}

function deleteFav (req, res) {
    const { id } = req.params;

    myFavorties = myFavorties.filter((char) => char.id != id);

    return res.status(200).json(myFavorties);

}

module.exports = { postFav, deleteFav }