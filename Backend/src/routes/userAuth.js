const express=require('express');
const {register,login,logout}=require('../controllers/userAuthent');
const authRouter=express.Router();
const userMiddleware=require('../middleware/userMiddleware');
 
//user login ,signup and logut 
authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',userMiddleware,logout);
module.exports=authRouter;
