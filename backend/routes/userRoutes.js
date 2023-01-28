const express = require('express')
const {loginUser, signupUser, updateUser, deleteUser, getUsers} = require('../controllers/userController')

const router = express.Router()


router.get('/', getUsers)

router.post('/login', loginUser)

router.post('/signup', signupUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router