const {fetch, fetchOne} = require('../utils/pg')

const findOneQuery = "SELECT * FROM workers where id = $1"
const loginQuery = "SELECT id FROM workers where username = $1 and password = $2"
const registerQuery = "insert into workers (name, username, password) values ($1, $2, $3) returning*"

module.exports = {
    findOne: async (id) => await fetchOne(findOneQuery, id),
    login: async (username, password) => await fetchOne(loginQuery, username, password),
    register: async ( name, username, password) => await fetchOne(registerQuery, name, username, password)
}