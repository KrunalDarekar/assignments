const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course} = require("../db/index")
const jwt = require("jsonwebtoken")
const jwtPassword = "password"

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingAdmin = await Admin.findOne({username: username})
    if(existingAdmin) {
        res.json({msg: "username already taken"})
    } else {
        const token = jwt.sign({username}, jwtPassword)
        const admin = new Admin({username: username, password: password, token: token})
        admin.save()
        res.json({message: "admin created successfully"})
    }
});

router.post('/signin', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingAdmin = await Admin.findOne({username: username, password: password})
    if(existingAdmin) {
        const token = existingAdmin.token
        res.json({token})
    } else {
        res.json({message: "wrong credentials"})
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const course = req.body
    const counter = await Course.countDocuments()
    course.id = counter + 1;
    const courseToSave = new Course(course)
    courseToSave.save()
    res.json({message: "course created successfully", courseId: course.id})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find();
    res.json({courses})
});

module.exports = router;