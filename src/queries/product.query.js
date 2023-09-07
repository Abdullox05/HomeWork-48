const {fetch, fetchOne} = require('../utils/pg')

const findByNameQuery = "select * from products where name = $1"
const getAllQuery = "select * from products"
const getByIdQuery = "select * from products where id = $1"
const createQuery = "insert into products (name, amount, price, category_id) values($1, $2, $3, $4) returning*"
const updateQuery = "update products set name = $1, amount = $2, price = $3, category_id = $4 where id = $4"
const deleteQuery = "delete from products where id = $1"


module.exports = {
    findByName: async (name) => await fetchOne(findByNameQuery, name),
    getAll: async () => await fetch(getAllQuery),
    getOne: async (id) => await fetchOne(getByIdQuery, id),
    create: async (name, amount, price, category_id) => await fetchOne(createQuery, name, amount, price, category_id),
    update: async (name, amount, price, category_id) => await fetchOne(updateQuery, name, amount, price, category_id),
    delete: async (id) => await fetchOne(deleteQuery, id),
}