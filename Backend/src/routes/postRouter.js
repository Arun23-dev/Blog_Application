const express=require('express');
const postRouter=express.Router();
const userMiddleware=require('../middleware/userMiddleware');
const adminMiddleware=require("../middleware/adminMiddleware");
const {createPost,
    deletePost ,
    getAllPost,
    getPostById,
    updatePostById,
    getPostCount,
    getPostByStatus,
    getPostOrderByStatus,
    getPostbyCategory,
    getFeaturedPost,
    getTotalVisitCount,
    getTotalVistPerPost,
    getSavedPost   

}=require("../controllers/postController")

postRouter.post("/createPost",adminMiddleware,createPost);
postRouter.delete("/deletePost/:id",adminMiddleware,deletePost);
postRouter.get("/getAllPost", adminMiddleware,getAllPost);
postRouter.get("/getPostById/:id",adminMiddleware,getPostById)
postRouter.patch("/updatePostById",adminMiddleware,updatePostById);
postRouter.get("/getPostCount",adminMiddleware,getPostCount);
postRouter.get("/getPostByStatus",adminMiddleware,getPostByStatus)
postRouter.get("/getPostOrderByStatus",adminMiddleware,getPostOrderByStatus);
postRouter.get("/getSavedPost",userMiddleware,getSavedPost);
postRouter.get("/getTotalVisitCount",adminMiddleware, getTotalVisitCount);
postRouter.get("/getTotalVistPerPost",adminMiddleware, getTotalVistPerPost)
postRouter.get("/getPostbyCategory", getPostbyCategory);
postRouter.get("/getFeaturedPost",getFeaturedPost);

module.exports=postRouter;

