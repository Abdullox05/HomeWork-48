const express = require('express');

const config = require('../config')

const routes = require('./routes')

const app = express();

app.use(express.json())

app.use('/api', routes)

app.listen(config.port, () => {
    console.log('listening on port ' + config.port);
});