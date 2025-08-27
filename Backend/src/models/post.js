const mongoose=require("mongoose");
const {Schema}=require("mongoose");
const postSchema=new Schema({
    coverImg:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        minlength:4,
        maxlength:70,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
    category:{
        type:String,
        enum:["development","political","finance","ecomonic","raw thought"],
    },
    shortDesc:{
        type:String,
        maxlength:100,
    },
    content:{
        type:String,
        maxlength:5000,
    },
    isFeatured:{
        type:Boolean,
        default :false,
    },
    status:{
        type:String,
        enum:["draft","published","archive"],
    },
    paraImg:{
        type:String,
    },
    visitNo:{
        type:Number,
        default:0,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:false,
    },
},
{ timestamps: true });
const Post=mongoose.model('Post',postSchema);
module.exports =Post;