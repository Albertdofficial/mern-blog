const express = require('express')
const {loginUser, signupUser, updateUser, deleteUser} = require('../controllers/userController')

const router = express.Router()


router.post('/login', loginUser)

router.post('/signup', signupUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router