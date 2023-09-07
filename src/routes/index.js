const workerRouter = require('./worker.route')
const categoryRouter = require('./category.route')
const productRouter = require('./product.route')
const historyRouter = require('./history.route')
const statisticRouter = require('./statistic.route')

module.exports = [
    workerRouter,
    categoryRouter,
    productRouter,
    historyRouter,
    statisticRouter
]