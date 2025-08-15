postRouter.get("/getPost",async(req,res)=>{
    res.send("got the post");
})
postRouter.delete("/deletePost",adminMiddleware,async(res,res)=>{
    res.send("Post deleted successfully");
})
postRouter.patch("/updatePost",adminMiddleware,async(req,res)=>{
    res.send("post updated successfully");
})
postRouter.post("/createPost",adminMiddleware,async(req,res)=>{
    res.send("Post created successfully ");
})

postRouter.get("/like",userMiddleware,async(req,res)=>{
    res.send("got the no of likes");
})