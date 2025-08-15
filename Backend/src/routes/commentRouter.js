const express=require('express');
const commentRouter=express.Router();
const userMiddleware=require('../middleware/userMiddleware');
const adminMiddleware=require("../middleware/adminMiddleware")
 
// commentRouter.get("/getComment",getComment);
// commentRouter.delete("/deleteComment",userMiddleware,deleteComment)
// commentRouter.patch("/updateComment",userMiddleware,updateComment)
// commentRouter.post("/createComment",adminMiddleware,createComment)


module.exports=commentRouter;
