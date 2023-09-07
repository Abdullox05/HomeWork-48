const {Router} = require('express');
const { register, login } = require('../controllers/worker.controller');

const { isAllowed } = require('../middlewares/isAllowed.middleware');
const { isAuth } = require('../middlewares/isAuth.middleware');
const {workerValidator} = require('../validations/worker.validation')

const router = Router()


router.post('/worker/register', workerValidator, isAuth, isAllowed, register)
router.post('/worker/login', login)

module.exports = router;