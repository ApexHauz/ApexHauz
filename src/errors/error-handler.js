
const AppError = require('./AppError');

module.exports = (err, req, res, next) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    } else {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
}