import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom"; // CHANGED → using NavLink instead of manual active
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Bell,
  User,
  Shield,
  Activity,
} from "lucide-react";
import axiosClient from "../../utils/axiosClient";

// Sidebar navigation config
const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Auth0 Management", href: "/admin/auth0", icon: Shield },
  { name: "Rate Limits", href: "/admin/rate-limits", icon: Activity },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // CHANGED → renamed for clarity
  const [adminUser, setAdminUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminUser = async () => {
      try {
        const { data } = await axiosClient.get("/admin/dashboard");
        setAdminUser(data.user);
      } catch (error) {
        console.error("Error fetching admin user:", error);
      }
    };
    fetchAdminUser();
  }, []);

  const handleLogout = () => {
    // TODO: clear token/session
    navigate("/login");
  };

  return (
    // CHANGED → grid layout instead of lg:pl-64 padding trick
    <div className="min-h-screen bg-gray-100 grid grid-cols-[16rem_1fr]"> 
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Admin Panel
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/admin"}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        isActive
                          ? "text-blue-700"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center">
            <User className="h-8 w-8 text-gray-400" />
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {adminUser
                  ? `${adminUser.firstName} ${adminUser.lastName}`
                  : "Loading..."}
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col"> 
        {/* Top header */}
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          {/* CHANGED → consistent px spacing (px-6 lg:px-8) to align with sidebar */}
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              ☰
            </button>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Notifications */}
              <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                <Bell className="h-6 w-6" />
              </button>

              {/* Quick Action */}
              {/* CHANGED → button renamed for clarity */}
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                + New
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        {/* CHANGED → added p-6 for consistent spacing */}
        <main className="flex-1 p-6"> 
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
