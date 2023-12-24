const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course} = require("../db/index")
const jwt = require("jsonwebtoken")
const jwtPassword = "password"

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await User.findOne({username: username})
    if(existingUser) {
        res.json({msg: "username already taken"})
    } else {
        const token = jwt.sign({username}, jwtPassword)
        const user = new User({username: username, password: password, token: token, purchasedCourses: []})
        user.save()
        res.json({message: "User created successfully"})
    }
});

router.post('/signin', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await User.findOne({username: username, password: password})
    if(existingUser) {
        const token = existingUser.token
        res.json({token})
    } else {
        res.json({message: "wrong credentials"})
    }
});

router.get('/courses', async(req, res) => {
    const courses = await Course.find();
    res.json({courses})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = parseInt(req.params.courseId, 10)
    const tokenArr = req.headers.authorization.split(" ")
    const token = tokenArr[1];
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.username
    const user = await User.findOne({username: username})
    const course = await Course.findOne({id: courseId})
    user.purchasedCourses.push(course)
    user.save()
    res.json({message: "course purchased successfully"})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const tokenArr = req.headers.authorization.split(" ")
    const token = tokenArr[1];
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.username
    const user = await User.findOne({username: username})
    const purchasedCourses = user.purchasedCourses
    res.json({purchasedCourses})
});

module.exports = router