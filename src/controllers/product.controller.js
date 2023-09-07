const productQuery = require('../queries/product.query')

const create = async (req, res) => {
    const {name, amount, price, category_id} = req.body;

    const findProduct = await productQuery.findByName(name);
    if (findProduct) return res.status(403).json({message: "Product Already Exists", data: findProduct});
    const data = await productQuery.create(name, amount, price, category_id)
    res.status(201).json({message: 'Product created successfully', data: data})
}

const getAll = async (req, res) => {
    const data = await productQuery.getAll()
    res.status(200).json({message: "Products successfully found", data: data})
}

const getOne = async (req, res) => {
    const {id} = req.params
    const data = await productQuery.getOne(id)
    if (!data) return res.status(404).json({message: "Product not found"});
    res.status(200).json({message: "Product found", data: data})
}

const update = async (req, res) => {
    const {name, amount, price, category_id} = req.body
    await productQuery.update(name, amount, price, category_id)
    res.status(200).json({message: "Successfully updated"})
}


const remove = async (req, res) => {
    const {id} = req.params
    const data = await productQuery.delete(id)
    if (!data) return res.status(404).json({message: "Not Found"})
    res.status(200).json({message: "Successfully deleted"})
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove,
}