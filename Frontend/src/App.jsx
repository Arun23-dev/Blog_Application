// layout
import AdminLayout from "./layout/AdminLayout"
import UserLayout from "./layout/UserLayout"
import PublicLayout from "./layout/PublicLayout";

import { ImageKitProvider } from "@imagekit/react";
import { Routes, Route } from "react-router";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Recent from "./pages/Recent";
import About from "./pages/About";

import AdminDashboard from "./components/admin/AdminDashboard";
import UsersManagement from "./pages/admin/UsersManagement";
import Analytics from "./pages/admin/Analytics";
import Auth0Management from "./pages/admin/Auth0Management";
import RateLimitManagement from "./pages/admin/RateLimitManagement";

import AdminBlog from "./pages/admin/AdminBlog";
import Blogs from "./pages/Blogs";
// import Blog from "./pages/Blog";

// routes
import AdminRoute from "./routes/AdminRoute";

// import AuthProvider from "./components/AuthProvider";


export default function App() {
  const imagekiturl = import.meta.env.VITE_IMAGEKIT_URL
  return (
      <ImageKitProvider urlEndpoint={imagekiturl}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path="recent" element={<Recent />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/blogs/:id" element={<Blog />} /> */}



          </Route>
  
            <Route path="admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<UsersManagement />} />
              <Route path="posts" element={<div>Posts Management</div>} />
              <Route path="comments" element={<div>Comments Management</div>} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="auth0" element={<Auth0Management />} />
              <Route path="rate-limits" element={<RateLimitManagement />} />
              <Route path="settings" element={<div>Settings</div>} />
            </Route>
         
        </Routes>
      </ImageKitProvider>
  );
}