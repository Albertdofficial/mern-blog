const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const getUsers =  asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Get all users'})
})

const loginUser =  asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Login a user'})
})

const signupUser =  asyncHandler(async(req, res, next)=>{
        if(!req.body.text){
            res.status(400)
            throw new Error('Please add a text field')
        }else{
            res.status(200).json({message: 'Signun a User'})
        }
})

const updateUser =  asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Update a user'})
})

const deleteUser =  asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'Delete a user'})
})

module.exports = {loginUser, signupUser, updateUser, deleteUser, getUsers}