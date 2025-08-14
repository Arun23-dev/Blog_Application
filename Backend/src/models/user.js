const mongoose=require('mongoose');
const {Schema}=require("mongoose");
const userSchema=new Schema({
    firstName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true,
    },
    lastName:{
        type:String,
        minlength:3,
        maxlength:20,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    profile:{
        type:String

    },
    savedPost:[{
        type:Schema.Types.ObjectId,
        ref:"Post",
    }],
},
{ timestamps: true });
const User=mongoose.model('User',userSchema);
module.exports =User;