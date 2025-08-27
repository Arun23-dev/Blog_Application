import React from 'react'
import { Link } from 'react-router'
import MainCategories from '../components/user/MainCategories'
import FeaturedPost from '../components/user/FeaturedPost'
import PostList from '../components/user/PostList'
import SinglePostPage from './SinglePostPage'
import Write from './Write'
import AdminLayout from "../layout/AdminLayout"
import AdminDashboard from "../components/admin/AdminDashboard"
import BlogPost from "../components/admin/BlogPost"
import CreatePostForm from "../components/admin/CreatePost";
import UsersManagement from "../components/admin/UserDashboard"


import AdminRoutes from "../routes/AdminRoute"

function Home() {
  return (
    <div className='mt-4 flex flex-col gap-4'>

        {/* breadcrumb */}
        <div className='flex gap-2 items-center'>
            <Link path="/home">Home</Link>
            {/* <span className='flex justify-center items-center  align-middle text-2xl'>.</span>
            <span>Blogs and Articles</span> */}

        </div>

        {/* for the eye catching latere redesign and other stuff */}
        {/* <div className=' mt-4 mb-25'>
            <h1>get the latest blog and the something </h1>
        </div> */}
        {/* search functionality */}
        {/* categories */}
        {/* <MainCategories/> */}
        {/* featured post */}
        {/* <FeaturedPost/> */}

        {/* postlist */}
        <div>
            <h1 className='text-2xl font-semibold'>Recent Post</h1>
            {/* <PostList/> */}
            {/* <SinglePostPage/> */}
            {/* <Write/> */}

            {/* <AdminLayout/>
1            <AdminDashboard/>
            <BlogPost/>
            <CreatePostForm />
            <UsersManagement/> */}
            <AdminRoutes/>
            

        </div>

        


   

    </div>
    // <div>Hello</div>
  )
}

export default Home