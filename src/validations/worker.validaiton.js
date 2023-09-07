const Joi = require('joi');

const workerValidator = async (req, res, next) => {
    const {name, username, balance, password} = req.body;

    const {error} = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required()
    }).validate({name, username, password});
    if (error) { 
        res.status(401).json({message: error.message});
    }
    next();
}

module.exports = {workerValidator};