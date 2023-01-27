
const loginUser = async(req, res)=>{
    res.status(200).json({message: 'Get a user'})
}

const signupUser = async(req, res)=>{
    res.status(200).json({message: 'Add a user'})
}

const updateUser = async(req, res)=>{
    res.status(200).json({message: 'Update a user'})
}

const deleteUser = async(req, res)=>{
    res.status(200).json({message: 'Delete a user'})
}

module.exports = {loginUser, signupUser, updateUser, deleteUser}