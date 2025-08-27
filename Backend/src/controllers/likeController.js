const Like=require("../models/like")

const getAllLikes = async (req, res) => {
  try {
    const likesCount = await Like.aggregate([
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
const getLikesById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Like.findById(id);

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
    const likesCount = await Like.aggregate([
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
const getHighestLikedPost = async (req, res) => {
  try {
    const likesCount = await Like.aggregate([
      { $project: { _id: 1, likes: 1, title: 1 } },

      { $sort: { likes: -1 } },
    ]);

    res.status(200).json(likesCount); // returns [{ _id: null, totalLikes: X }]
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error counting likes", error: err.message });
  }
};

module.exports = {
  getAllLikes,
  getLikesById,
  getLikesEveryPost,
  getHighestLikedPost,
};

//   1. User-centric endpoints

// getLikesByUser/:id → all likes a specific user has made (for both posts and comments).

// getMostActiveLiker → user who has liked the most posts/comments.

// 🔹 2. Target-centric endpoints

// getMostLikedComments/:postId → top N most liked comments for a post.

// getLeastLikedPosts → posts with fewest likes.

// getLikedPostsByUser/:id → posts liked by a specific user.

// 🔹 3. Like/unlike endpoints

// POST /like → like a post or comment (requires user + target).

// POST /unlike → remove a like.

// Optional: toggleLike → like if not liked, unlike if already liked.

// 🔹 4. Analytics/statistics

// getTotalLikesCount → total likes across all posts/comments.

// getLikeTrend/:postId → likes over time (could return daily counts).

// getTopLikedUsers → users whose posts/comments receive the most likes.

// 🔹 5. Optional advanced features

// getMutualLikes/:userId1/:userId2 → posts/comments liked by both users.

// getRecentLikes/:postId → who liked a post recently.

// getLikesWithPagination/:postId?page=1&limit=20 → paginated list of likes (useful for posts with tons of likes).
// 🔹 2. Like/Unlike Comment

// You have likes as an array of user IDs. You could add endpoints to like or unlike a comment:

// POST /likeComment/:id   -> add current user to likes array
// POST /unlikeComment/:id -> remove current user from likes array ok lets do it 