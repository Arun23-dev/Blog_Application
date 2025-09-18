import React, { useState } from "react";
import { Search, Menu, X, User, Moon, Sun, Crown, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("admin");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData] = useState({
    name: "John",
    email: "john@example.com",
    avatar: "/avatar.jpg",
  });

  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("user");
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">Bipin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium dark:text-white dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
            >
              Blogs
            </Link>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
            >
              Videos
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
            >
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                placeholder="Search blogs, interviews..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Conditional User Actions */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                {/* User Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
                      {userData.name.charAt(0).toUpperCase()}
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 dark:bg-gray-800 dark:border-gray-700">
                      {/* User Info */}
                      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm mr-3">
                          {userData.name.charAt(0).toUpperCase()}
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        <button
                          onClick={() => {
                            navigate("/profile");
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          <User className="h-4 w-4 mr-2" />
                          Profile
                        </button>

                        <button
                          onClick={() => {
                            navigate("/settings");
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </button>

                        {userRole === "admin" && (
                          <button
                            onClick={() => {
                              navigate("/admin");
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
                          >
                            <Crown className="h-4 w-4 mr-2 text-amber-600" />
                            Admin Dashboard
                          </button>
                        )}
                      </div>

                      {/* Separator */}
                      <div className="h-px bg-gray-200 dark:bg-gray-700 my-1"></div>

                      {/* Logout */}
                      <div className="p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md dark:text-red-400 dark:hover:bg-red-900/20"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate("/register")}
                  className="hidden md:inline-flex items-center px-4 py-2 h-8 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center px-4 py-2 h-8 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Login
                </button>
              </div>
            )}

            {/* Mobile Menu Button (uncomment to enable) */}
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button> 
           
          </div>
        </div>

        {/* Mobile Menu (currently commented out — remove comments if you want it active) */}
      </div>
    </header>
  );
}
