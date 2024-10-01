const express = require("express");
const admin = require("../Controller/admin.js");
const router = express.Router();

router.post("/login", admin.login)
router.post("/signup", admin.signup)
router.get("/adminUsers", admin.adminUsers)
router.delete("/delete_user/:id", admin.deleteUsers)

module.exports = router;