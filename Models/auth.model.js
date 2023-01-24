const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: { type: String}
},
);

const AuthModel = mongoose.model("user", AuthSchema);
module.exports =AuthModel;