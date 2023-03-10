const errorHandler = (err, req, res, next)=>{
    if(err){
        const statusCode = res.statusCode? res.statusCode: 500;

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production'?null: err.stack
    })
    }else(
        next()
    )
}

module.exports = {errorHandler}