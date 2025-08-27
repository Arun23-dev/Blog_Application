const Post = require("../models/post");
const User=require("../models/user")
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
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid Post ID" });
    }
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
const getPostCount = async (req, res) => {
  try {
    const postCount = await Post.aggregate([
      {
        $group: {
          _id: null,
          countPost: { $sum: 1 }, // count each post
        },
      },
    ]);

    res.status(200).json({
      totalPosts: postCount[0]?.countPost || 0,
    });
  } catch (err) {
    res.status(500).send("Error occurred here");
  }
};
const getPostByStatus = async (req, res) => {
  try {
    let { status } = req.query; // gets ?status=published from URL
    status = status.trim();
    console.log(status);
    if (!status) {
      return res.status(400).json({ message: "Status query is required" });
    }

    const posts = await Post.aggregate([
      { $match: { status: status } },
      {
        $project: { title: 1, status: 1 },
      },
    ]); // fetch posts with that status
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
};
const getPostOrderByStatus = async (req, res) => {
  try {
    const posts = await Post.find({}, { title: 1, status: 1 }) // select only title and status
      .sort({ status: 1 }); // sort by status ascending

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
};
const getPostbyCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const data = await Post.find({ category: category });

    if (data.length === 0) {
      return res.status(404).send("Data with your category is empty");
    }
    return res.status(200).json({
      data: data,
      messagae: "data fetched successfully ok done",
    });
  } catch (err) {
    return res.status(400).send("Error occurred ", err);
  }
};
const getFeaturedPost = async (req, res) => {
  try {
    const data = await Post.find({ isFeatured: true });

    if (data.length === 0) {
      return res.status(404).send("Data with your category is empty");
    }
    return res.status(200).json({
      data: data,
      messagae: "data fetched successfully ok done",
    });
  } catch (err) {
    return res.status(400).send("Error occurred ", err);
  }
};
const getTotalVisitCount = async (req, res) => {
  try {
     const data=await Post.aggregate([
      {$match:{visitNo:{$gt:0}}},
      {$group:{
        _id:null,
      totalCount:{$sum:"$visitNo"}
    }
      }
     ])
     const totalVisits = data[0]?.totalCount || 0;
    return res.status(200).json({ totalVisits });
  } catch (err) {
    return res.status(400).send("Error occurred ", err);
  }
};
const getTotalVistPerPost = async (req, res) => {
  try {
    const data = await Post.find({}, { title: 1, visitNo: 1 });

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }

    return res.status(200).json({
      message: "Visit count per post fetched successfully",
      visitsPerPost: data
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error occurred while fetching visit counts",
      error: err.message
    });
  }
};
const getSavedPost = async (req, res) => {
  try {
    const userId = req.user._id; // assuming userMiddleware sets req.user

    const user = await User.findById(userId).populate({
      path: "savedPost",
      select: "title slug coverImg visitNo" // pick only needed fields
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      savedPost: user.savedPost,
      message: "Saved posts fetched successfully"
    });

  } 
  catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error fetching saved posts",
      error: err.message
    });
  }
};

module.exports = {
  createPost,
  deletePost,
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
  getSavedPost,
};
