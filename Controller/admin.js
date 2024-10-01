const adminUser = require("../Model/adminUserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async get_users(req, res) {
    try {
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async login(req,res){
    try {
      const {username,password} = req.body;
      const user = await adminUser.findOne({username:username});
      if(!user){
        return res.status(400).send("User not found");
      }
      const passCheck = await bcrypt.compare(password,user.password);
      if(passCheck){
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRETKEY);
        const {password: pass, ...rest} = user._doc;
        return res.cookie('access_token', token,{expires:new Date(Date.now() + 25892000000)}).status(200).send(rest);
      }
      else{
        return res.status(400).send("Invalid Credentials");
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async signup(req, res) {
    try {
      const {name,username,password,events,clubs,situationships,users,admins} = req.body;
      const exist = await adminUser.findOne({username:username});
      if(exist){
        return res.status(400).send("username already exist");
      }
      const hash_password = await bcrypt.hash(password,10);
      console.log(hash_password);
      const data = await adminUser.create({
        ...req.body,
      });
      data.password = hash_password;
      await data.save();
      if(!data){
        return res.status(400).send("Failed to create the user");
      }
      else{
        return res.status(201).send(data);
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },
  async adminUsers(req,res){
    try {
      const data = await adminUser.find({});
      return res.status(200).send(data);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async deleteUsers(req,res){
    try {
      const data = await adminUser.findOneAndDelete({ _id: req.params.id });
      return res.status(200).send("User delete successfully");
    } catch (e) {
      return res.status(500).send(e);
    }
  }
};
