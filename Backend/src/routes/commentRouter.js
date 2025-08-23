const express = require("express");
const commentRouter = express.Router();
const userMiddleware = require("../middleware/userMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
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
} = require("../controllers/commentController");

commentRouter.post("/createComment", userMiddleware, createComment);
commentRouter.get("/getCommentByPost/:id", getCommentByPost);
commentRouter.delete("/deleteComment/:id", userMiddleware, deleteComment);
commentRouter.patch("/updateComment", userMiddleware, updateComment);
commentRouter.delete("/deleteAllCommentPerPost/:id",  adminMiddleware,  deleteAllCommentPerPost);
commentRouter.get("/getAllComment", getAllComment);
commentRouter.get("/getCommentByUser/:id", adminMiddleware, getCommentByUser);
commentRouter.get("/getCommentCountByPost/:id", getCommentCountByPost);
commentRouter.get("/getCommentCountAll", adminMiddleware, getCommentCountAll);
commentRouter.get("/getCommentCountByUser/:id", adminMiddleware, getCommentCountByUser);

module.exports = commentRouter;
