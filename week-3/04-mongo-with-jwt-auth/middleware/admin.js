// Middleware for handling auth

const { Admin} = require("../db/index")

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const tokenArr = (req.headers.authorization).split(" ")
    const token = tokenArr[1]
    const existingAdmin = await Admin.findOne({token: token});
    if(existingAdmin) {
        next()
    } else {
        res.json({message: "bad token"})
    }
}

module.exports = adminMiddleware;