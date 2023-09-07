const historyQuery = require('../queries/history.query')

const create = async (req, res) => {
    try {
        const {product_id, is_sell, product_amount: amount, product_price: price} = req.body;
        const workers_id = req.userId
        await historyQuery.begin()
        const data = await historyQuery.create(product_id, workers_id, is_sell, amount, price)
        if (is_sell) await historyQuery.updateProductDecrease(+amount, product_id)    
        else await historyQuery.updateProductIncrease(+amount, product_id);
        await historyQuery.commit();
        res.status(201).json({message: "Successfully created", data: data})
    } catch (error) {
        await historyQuery.rollback();
        res.status(401).json({message: "Internal Server Error"})
    }
}

const getAll = async (req, res) => {
    const data = await historyQuery.getAll()
    res.status(200).json({message: "Success", data: data})
}

const getOne = async (req, res) => {
    const {id} = req.params
    const data = await historyQuery.getOne(id)
    res.status(200).json({message: "Success", data: data})
}

const remove = async (req, res) => {
    const {id} = req.params
    await historyQuery.delete(id)
    res.status(200).json({message: "Successfully deleted"})
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
}