import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, Clock, ArrowRight, BookOpen, Code, Activity, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogList() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);

  // Load blogs from localStorage
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    setBlogs(storedBlogs);
  }, []);

  // Extract categories dynamically
  const categories = ["All", ...new Set(blogs.map((b) => b.category || "General"))];

  // Map categories to icons
  const categoryIcons = {
    All: BookOpen,
    General: BookOpen,
    Tech: Code,
    Lifestyle: Activity,
    Writing: PenTool,
  };

  // Filter blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4">
        {/* Search */}
        <div className="mb-8 flex items-center max-w-xl mx-auto rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full bg-transparent px-2 py-3 outline-none text-gray-700 dark:text-gray-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || BookOpen;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1 px-4 py-1 text-sm rounded-full border transition ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white border-cyan-600"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Cards */}
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((post) => {
              const CategoryIcon = categoryIcons[post.category] || BookOpen;
              return (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.thumbnail || post.image || "test.png"}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-1">
                      <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-medium text-gray-800 flex items-center gap-1">
                        <CategoryIcon className="h-3 w-3" />
                        {post.category || "General"}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="mb-3 font-montserrat text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {post.excerpt || "No description available..."}
                    </p>

                    <div className="mb-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          {post.author || "Anonymous"}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {post.readTime || "5 min read"}
                        </div>
                      </div>
                      <span>{post.date || "Recently"}</span>
                    </div>

                    <Link to={`/blogs/${post.id}`}>
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto font-medium text-cyan-600 hover:text-cyan-700"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No blogs found.</p>
        )}
      </div>
    </section>
  );
}
