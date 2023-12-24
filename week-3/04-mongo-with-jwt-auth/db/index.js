const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://krunaldarekar29:xYAXq16GMKG0tBJR@cluster0.vu6t1tu.mongodb.net/mongoJWt');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String,
    purchasedCourses: Array
});

const CourseSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}