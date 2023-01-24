const {Schema,model}= require("mongoose");

const ApplySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "job",
    required: true,
  },
});

const ApplyModel = model("apply", ApplySchema);
module.exports = ApplyModel;
