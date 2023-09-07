const {fetch, fetchOne} = require('../utils/pg')

const beginQuery = "begin transaction"
const rollbackQuery = "rollback"
const commitQuery = "commit"
const updateProductDecreaseQuery = "update products set amount = amount - $1 where id = $2"
const updateProductIncreaseQuery = "update products set amount = amount + $1 where id = $2"
const createQuery = "insert into history (product_id, workers_id, is_sell, product_amount, product_price) values ($1, $2, $3, $4, $5) returning*"
const getAllQuery = "select * from history"
const getOneQuery = "select * from history where id = $1"
const deleteQuery = "delete from history where id = $1"

module.exports = {
    create: async (product_id, workers_id, is_sell, product_amount, product_price) => await fetchOne( createQuery, product_id, workers_id, is_sell, product_amount, product_price),
    updateProductDecrease: async (amount, id) => await fetchOne( updateProductDecreaseQuery, amount,id),
    updateProductIncrease: async (amount, id) => await fetchOne( updateProductIncreaseQuery, amount,id),
    begin: async () => await fetchOne( beginQuery),
    rollback: async () => await fetchOne( rollbackQuery),
    commit: async () => await fetchOne( commitQuery),
    getAll: async () => await fetch(getAllQuery),
    getOne: async (id) => await fetchOne( getOneQuery, id),
    delete: async (id) => await fetchOne( deleteQuery, id),
}