const mongoose=require("mongoose");
const {Schema}=require("mongoose");

const commentSchema=new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post",
        required:true,
    },
    text:{
        type:String,
        required:true,
        minlength:3,
        maxlength:60,
    },
    approved:{
        type:Boolean,
        default:false,
    }, 
   
},
{ timestamps: true });
const Comment=mongoose.model('Comment',commentSchema);
module.exports =Comment;