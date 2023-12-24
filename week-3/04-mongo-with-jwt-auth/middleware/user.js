const {User} = require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const tokenArr = (req.headers.authorization).split(" ")
    const token = tokenArr[1]
    const existingUser = await User.findOne({token: token});
    if(existingUser) {
        next()
    } else {
        res.json({message: "bad token"})
    }
}

module.exports = userMiddleware;