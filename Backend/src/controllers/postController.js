const { default: mongoose } = require("mongoose");
const Post = require("../models/post");
const validateReq = require("../utils/validatePost");

const createPost = async (req, res) => {
  try {
    const { coverImg, title, slug, content, status } = req.body;
    const data = { coverImg, title, slug, content, status };
    const errors = validateReq(data);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation failed", errors });
    }
    const newPost = new Post({
      coverImg,
      title,
      slug,
      content,
      status,
    });

    await newPost.save();
    return res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error occurred while creating post",
      error: err.message,
    });
  }
};
// delete post by id
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletePost = await Post.findByIdAndDelete(postId);

    if (!deletePost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    return res.status(200).send("Data deleted successfully");
  } catch (err) {
    res.status(404).json({
      message: "Failed to delete the post",
      error: err.message,
    });
  }
};
const getAllPost = async (req, res) => {
  try {
    console.log("get all post api hit ");
    const allPost = await Post.find();

    if (allPost.length == 0) {
      return res.status(404).send("No Post are available");
    }
    return res.status(200).json({
      data: allPost,
      message: "Postfetched successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error occurs while fetching post",
      error: err.message,
    });
  }
};
// get post by id
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send("No Post are availabel");
    }
    return res.status(200).json({
      data: post,
      message: "Post fetched successfully",
    });
  } catch (err) {
    return res.status(404).send("Error occurs while fetching post", err);
  }
};
// updatPostById
const updatePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const Post = await Post.findByIdAndUpdate(postId, { title: "I am hero" });
    if (!Post) {
      return res.status(404).send("No Post are availabel");
    }
    return res.status(200).json({
      data: Post,
      message: "Post Updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error occurred while updating post",
      error: err.message,
    });
  }
};
// getAllLikes
const getAllLikes = async (req, res) => {
  try {
    const likesCount = await Post.aggregate([
      { $match: { likes: { $gt: 0 } } }, // ignore posts with 0 likes
      {
        $group: {
          _id: null,
          totalLikes: { $sum: "$likes" },
        },
      },
    ]);

    res.status(200).json(likesCount[0].totalLikes); // returns [{ _id: null, totalLikes: X }]
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error counting likes", error: err.message });
  }
};
// get likes by id
const getLikesById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Only return likes if greater than 0
    const likes = post.likes > 0 ? post.likes : 0;

    res.status(200).json({ postId: id, likes });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching likes", error: err.message });
  }
};
const getLikesEveryPost = async (req, res) => {
  try {
    const likesCount = await Post.aggregate([
      { $project: { _id: 1, likes: 1, title: 1 } },
    ]);
    console.log(likesCount);

    res.status(200).json(likesCount); // returns [{ _id: null, totalLikes: X }]
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error counting likes", error: err.message });
  }
};

const getHighestLikedPost=async(req,res)=>{
    
       try {
            const likesCount = await Post.aggregate([
            { $project: { _id: 1, likes: 1, title: 1 } },
            
            {$sort:{likes:-1}},
            ]);
           
            res.status(200).json(likesCount); // returns [{ _id: null, totalLikes: X }]
          } catch (err) {
            res
            .status(500)
            .json({ message: "Error counting likes", error: err.message });
        }
   
}

const getPostCount = async (req, res) => {
  try {
    const postCount = await Post.aggregate([
      {
        $group: {
          _id: null,
          countPost: { $sum: 1 } // count each post
        }
      }
    ]);

    res.status(200).json({
      totalPosts: postCount[0]?.countPost || 0
    });
  } catch (err) {
    res.status(500).send("Error occurred here");
  }
};

 const getPostByStatus=async(req,res)=>{
   
  try {
    let { status } = req.query;  // gets ?status=published from URL
    status=status.trim();
    console.log(status);
    if (!status) {
      return res.status(400).json({ message: "Status query is required" });
    }

    const posts = await Post.aggregate([
        { $match:{status:status}},
        {
            $project:{title:1,status:1}
        }
    ]);  // fetch posts with that status
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

const getPostOrderByStatus=async(req,res)=>{

  try {
    const posts = await Post.find({}, { title: 1, status: 1 }) // select only title and status
                             .sort({ status: 1 }); // sort by status ascending

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

// const getPostbyCategory=async(req,res)=>{

// }
// const getFeaturedPost=async(req,res)=>{

// }
// const getTotalVisitCount=async (req,res)=>{

// }
// const getTotalVistPerPost=async(req,res)=>{

// }
module.exports = {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePostById,
  getAllLikes,
  getLikesById,
  getLikesEveryPost,
  getHighestLikedPost,
  getPostCount,
  getPostByStatus,
  getPostOrderByStatus,
  
};
