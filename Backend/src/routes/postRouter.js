const express=require('express');
const postRouter=express.Router();
const userMiddleware=require('../middleware/userMiddleware');
const adminMiddleware=require("../middleware/adminMiddleware");


postRouter.post("/createPost",adminMiddleware,creatPost)
// postRouter.get("getAllPost",getAllPost);
// postRouter.delete("/deletePost",adminMiddleware,deletePost);
// postRouter.patch("/updatePost",adminMiddleware,updatePost);
// postRouter.get("/getAllLikes",adminMiddleware,getAllLikes);
// postRouter.get("getLike",getLike);
// postRouter.get("/getSavedPost",userMiddleware,getSavedPost);
// postRouter.get("/totalVist",adminMiddleware, totalVisit);
// postRouter.get("/visitPerPost",adminMiddleware, visitPerPost)
// postRouter.get("/getAllPostByCategories",getAllPostByCategory);





module.exports=postRouter;

