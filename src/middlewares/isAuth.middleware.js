const jwt = require('../utils/jwt')

const workerQuery = require('../queries/worker.query')

const isAuth = async (req, res, next) => {
    const token = req.headers?.token
    
    jwt.verify(token, async (err, decoded) => {
        if (err) {
            res.status(401).json({message: "Unauthorized"})
        }
        req.userId = decoded
        const data = await workerQuery.findOne(req.userId)
        if (!data) {
            return res.status(401).json({message: "Unauthorized"})
        }
        req.user = data
        next()
    })
    
}

module.exports = {
    isAuth
}