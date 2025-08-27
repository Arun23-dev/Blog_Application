const Comment=require("../models/comment");

const createComment=async(req,res)=>{
    try{
        
        const {user,post,text}=req.body;
        // first validate it
        if(text.length<3){
            return res.status(404).send("comment lenght  too short min length 3 required");
        }
        if(text.length>60){
            return res.status(400).send("Comment is too long enter the less characters")
        }

        const newComment =new Comment({
            user,post,text

        })
        const savedDocument=await newComment.save();

        return res.status(201).json({
        message: "Comment created successfully",
        comment: savedDocument
        });
    }
    catch(error){
         return res.status(500).json({ message: "Server error", error: error.message });

    }
}
const deleteComment=async(req,res)=>{
    try{
        const commentId=req.params.id;

        const commentData=await Comment.findByIdAndDelete(commentId);
        if(!commentData){
            return res.status(400).send("Comment doesn't exist");
        }
        return res.status(200).json({
            message:"Data deleted successfully",
            data:commentData,
        })
    }
    catch(err){
        res.status(404).send("Error occurred ",err.message);
    }
}
const updateComment=async(req,res)=>{
    // update post means only change in text data not other user and other ok

   try{
        const {_id,text}=req.body;
         if(text.length<3){
            return res.status(404).send("comment lenght  too short min length 3 required");
        }
        if(text.length>60){
            return res.status(400).send("Comment is too long enter the less characters")
        }
       
        const updatedComment=await Comment.findByIdAndUpdate(_id,{text:text},{new:true})
        
        return res.status(200).json({
            message:"Data updated  successfully",
            data:updatedComment,
        })
    }
    catch(err){
        res.status(404).send("Error occurred ",err.message);
    }

}
const deleteAllCommentPerPost=async(req,res)=>{
    try{

        const postId=req.params.id;
        const deletedComment= await Comment.deleteMany({post:postId})
        return res.status(200).json({
            deletedComment:deletedComment,
            message:"Comment Deleted successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to delete the comment")
    }
}
const getCommentByPost=async(req,res)=>{

     try{
        const postId=req.params.id;
        const comment= await Comment.find({post:postId})
        return res.status(200).json({
            comment:comment,
            message:"Comment fetched successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to fetch  the comment")
    }
}
const getAllComment=async(req,res)=>{
    try{
   
        const comment= await Comment.find();
        return res.status(200).json({
            comment:comment,
            message:"Comment fetched successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to fetch  the comment")
    }

}
const getCommentByUser=async(req,res)=>{

    try{
        const userId=req.params.id;
        const comment= await Comment.find({user:userId})
        return res.status(200).json({
            comment:comment,
            message:"Comment fetched successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to fetch  the comment")
    }

}
const getCommentCountByPost=async(req,res)=>{
     try{
        const postId=req.params.id;
        if(!postId){
            return res.statu(404).send("First then the postId");
        }
        const comment= await Comment.find({post:postId})
     
        return res.status(200).json({
            totalNofComment:comment.length,
            message:"Comment fetched successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to fetch  the comment")
    }
}
const getCommentCountAll=async(req,res)=>{
    try{
   
        const comment= await Comment.find();
      
        return res.status(200).json({
            TotalNo_of_Comment:comment.length,
            message:"Comment fetched successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to fetch  the comment")
    }
}
const getCommentCountByUser=async(req,res)=>{
    try{
        const userId=req.params.id;
        const comment= await Comment.find({user:userId})
        return res.status(200).json({
            TotalNo_of_Comment:comment.length,
            message:"Comment fetched successfully"  
        })
    }
    catch(err){
        return res.status(404).send("Can't able to fetch  the comment")
    }
}
const approveComment=async(req,res)=>{
    try{

        const commentId=req.params.id;
        const approve=await Comment.updateOne(commentId,{approved:true},{new:true})
        console.log(approve);
        return res.status(200).json({
            data:approve,
            message:"comment approved successfully"
        })

    }
    catch(err){
        return res.status(404).send("error in approving",err.message);

    }
}
const getRecentComment = async (req, res) => {
  try {
    // Optional: limit number of comments, default 10
    const limit = parseInt(req.query.limit) || 10;

    const recentComments = await Comment.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("user", "username email")   // populate user info
      .populate("post", "title slug");      // populate post info

    if (!recentComments || recentComments.length === 0) {
      return res.status(404).json({ message: "No comments found" });
    }

    return res.status(200).json({
      message: "Recent comments fetched successfully",
      data: recentComments
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}
module.exports={
    createComment,
    deleteComment,
    updateComment,
    deleteAllCommentPerPost,
    getCommentByPost,
    getAllComment,
    getCommentByUser,
    getCommentCountByPost,
    getCommentCountAll,
    getCommentCountByUser,
    approveComment,
    getRecentComment,
    
}












