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
        maxlength:50,
    },
    slug:{
        type:String,
        required:true,
        uniqu:true,
    },
    category:{
        type:String,
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
        required:true,
    },
    comment:[{
        person:{type:Schema.Types.ObjectId,ref:"Comment"},
        likes:{types:Schema.Types.ObjectId,ref:"User"}
    }],
    likes:{
        type:Number,
        default:0,
    }  
},
{ timestamps: true });
const Post=mongoose.model('Post',postSchema);
module.exports =Post;