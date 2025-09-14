import React, { useState } from "react";
import { Search, Menu, X, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  
  const navigate=useNavigate();
  
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-lg">B</span>
            </div>
            <span className="font-heading text-xl text-balance text-justify font-black mx-1.5 my-0">Bipin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 my-0 mx-1.5">
            <Link to="/home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/blogs" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Blogs
            </Link>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Videos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Categories
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search blogs, interviews..." className="pl-10 bg-muted/50 border-border focus:bg-background" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

         {/* Conditional User Actions */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" className="h-8 px-4 inline-flex items-center justify-center " onClick={() => navigate("/login")}>
                Login
              </Button>
            )}

   

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-4 p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search blogs, interviews..." className="pl-10 bg-muted/50" />
              </div>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Blogs
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Videos
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Categories
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <Button variant="ghost" onClick={toggleTheme} className="justify-start">
                {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </Button>


  {/* Mobile User Actions */}
              {isLoggedIn ? (
                <Button variant="outline" className="justify-start" onClick={() => alert("Open profile menu")}>
                  <User className="h-4 w-4 mr-2" /> Profile
                </Button>
              ) : (
                <Button variant="outline" className="justify-start" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
