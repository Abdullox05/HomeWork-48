const jwt = require('jsonwebtoken');

const config = require('../../config')

const sign = (payload) => { return jwt.sign(payload, config.jwt_secret_key) };

const verify = (payload, callback) => { return jwt.verify(payload, config.jwt_secret_key, callback); };


module.exports = {
    sign,
    verify
}