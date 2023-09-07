const {Router} = require('express');
const { create, getAll, getOne, remove, update } = require('../controllers/product.controller');
const { isAuth } = require('../middlewares/isAuth.middleware');

const router = Router()

router.post('/products/create', isAuth, create)
router.get('/products', getAll)
router.get('/products/:id', getOne)
router.put('/products/update/:id', isAuth, update)
router.delete('/products/delete/:id', isAuth, remove)

module.exports = router;