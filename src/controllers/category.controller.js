const categoryQuery = require('../queries/category.query')

const create = async (req, res) => {
    const {name} = req.body;
    const findCategory = await categoryQuery.getOneName(name);
    if (findCategory) return res.status(200).json({message: "Category already exists", category: findCategory}) 
    const data = await categoryQuery.create(name)
    res.status(201).json({message: "Category created successfully", data: data})
}

const getAll = async (req, res) => {
    const data = await categoryQuery.getAll()
    res.status(200).json({message: "Categories found", data: data})
}

const getOne = async (req, res) => {
    const {id} = req.params
    const data = await categoryQuery.getOne(id)
    if (!data) return res.status(404).json({message: "No category found"})
    res.status(200).json({message: "Category found", data: data})
}

const remove = async (req, res) => {
    const {id} = req.params
    const data = await categoryQuery.delete(id)
    res.status(200).json({message: "Category deleted", data})
}

module.exports = {
    create,
    getAll,
    getOne,
    remove
}