const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  name: { type: String },
  position: { type: String},
  location: { type: String},
  contract: { type: String},
  
},
);

const JobModel = mongoose.model("job", JobSchema);
module.exports =JobModel;