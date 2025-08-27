require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const main = require("./src/config/db");
const redisClient = require("./src/config/redis");
const authRouter = require("./src/routes/userAuth");
const postRouter=require("./src/routes/postRouter")
const commentRouter=require("./src/routes/commentRouter")
const likeRouter=require("./src/routes/likeRouter")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true, 
}));

app.use("/user", authRouter);
app.use("/post",postRouter);
app.use("/comment",commentRouter);
// app.use("/like",likeRouter);
app.user("/ai",aiRouter)
const initailizeConnection = async () => {
  try {
    await Promise.all([ main(), redisClient.connect()]);
    console.log("DB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port no. ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Error " + err);
  }
};
initailizeConnection();
