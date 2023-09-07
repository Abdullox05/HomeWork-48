const workerQuery = require('../queries/worker.query')
const jwt = require('../utils/jwt')


const register = async (req, res) => {
    const {name, username, password} = req.body

    const data = await workerQuery.register(name, username, password)
    res.status(201).json({message: "Worker successfully registered", data: data})
}

const login = async (req, res) => {
    const { username, password } = req.body

    const data = await workerQuery.login(username, password)
    
    if (!data) { return res.status(404).json({message: "Not found"}) }

    const token = jwt.sign(data.id)

    res.status(200).json({message: "Authentication successful", token: token})
}

module.exports = {
    register,
    login
}