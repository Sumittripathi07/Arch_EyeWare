const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  title:String,
  price: Number,
  imageUrl:String,
  description:String
});
module.exports = mongoose.model("products", userSchema);
