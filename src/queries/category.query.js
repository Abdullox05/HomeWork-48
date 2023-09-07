const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into categories (name) values ($1) returning*"
const getAllQuery = "select * from categories"
const getOneQuery = "select * from categories where id = $1"
const deleteQuery = "delete from categories where id = $1"
const getOneQueryByName = "select * from categories where name = $1"

module.exports = {
    create: async (name) => await fetchOne(createQuery, name),
    getAll: async () => await fetch(getAllQuery),
    getOne: async (id) => await fetchOne(getOneQuery, id),
    delete: async (id) => await fetchOne(deleteQuery, id),
    getOneName: async (name) => await fetchOne(getOneQueryByName, name),

}