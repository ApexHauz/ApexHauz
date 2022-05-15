// Authorization middleware
const AppError = require('./../errors/AppError');

const authorize = () => {

    return (req, res, next) => {

        const user = req.user;
        const isAdmin = user.is_admin;

        if (!isAdmin) {
            throw new AppError(403, 'You are not authorized to be here!');
        }

        next();
    }
}

module.exports = authorize;