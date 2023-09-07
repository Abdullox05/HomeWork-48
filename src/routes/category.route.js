const {Router} = require('express');
const { create, getAll, getOne, remove } = require('../controllers/category.controller');
const { isAuth } = require('../middlewares/isAuth.middleware');

const router = Router()

router.post('/categories/create', isAuth, create)
router.get('/categories', getAll)
router.get('/categories/:id', getOne)
router.delete('/categories/delete/:id', isAuth, remove)

module.exports = router;