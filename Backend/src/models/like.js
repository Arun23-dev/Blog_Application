const mongoose=require("mongoose");
const {Schema}=require("mongoose");

const likeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  targetType: { type: String, enum: ["Post", "Comment"], required: true },
  targetId: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Like=mongoose.model('Like',likeSchema);
module.exports =Like;