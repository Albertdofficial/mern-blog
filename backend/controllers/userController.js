const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET)
}

// desc    logins in a user
// @route  /api/user/login
// method POST
const getUsers =  asyncHandler(async(req, res)=>{
    
    const users = await User.find({})

    res.status(200).json(users)
})

const loginUser =  asyncHandler(async(req, res)=>{
    const{email, password} = req.body

    const user = await User.login(email, password)

    const token = createToken(user._id)

    res.status(200).json({email, token})
})

// @desc    signs up a new user
// route  /api/user/signup
// method POST
const signupUser =  asyncHandler(async(req, res, next)=>{
       const{username, email, password} = req.body

       const user = await User.signup(username, email, password)

       const token = createToken(user._id)

       res.status(200).json({username, email, token})
})

const updateUser =  asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Update a user'})
})

const deleteUser =  asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Delete a user'})
})

module.exports = {loginUser, signupUser, updateUser, deleteUser, getUsers}