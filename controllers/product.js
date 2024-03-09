const getAllProducts = async (req, res) => {
    res.status(200).json({msg: "This is getAllProducts"});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "This is getAllProductsTesting"})
};

module.exports = {getAllProducts, getAllProductsTesting}