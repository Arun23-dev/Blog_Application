import { Routes, Route } from "react-router"
import AdminLayout from "@/layout/AdminLayout"
import AdminDashboard from "@/components/admin/AdminDashboard"
import BlogPost from "@/components/admin/BlogPost"
import UserDashboard from "@/components/admin/UserDashboard"
import SettingAdmin from "@/components/admin/SettingAdmin"

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="posts" element={<BlogPost />} />
        <Route path="users" element={<UserDashboard />} />
        <Route path="settings" element={<SettingAdmin/>} />
      </Route>
    </Routes>
  )
}
