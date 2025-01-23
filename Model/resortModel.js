const mongoose = require("mongoose");
const resortSchema = new mongoose.Schema({
  name: { type: String },
  label: { type: String },
});
const resort = mongoose.model("resort", resortSchema);
module.exports = resort;
