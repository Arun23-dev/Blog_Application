import React, { useState } from "react";
import {
  Monitor,
  Palette,
  Briefcase,
  Heart,
  Plane,
  ChefHat,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Search from "../components/Search";
import AIContentSuggestions from "../components/AIContentSuggestions";

const categories = [
  {
    id: "technology",
    title: "Technology",
    description: "Latest tech trends, gadgets, and innovations",
    articles: 245,
    icon: Monitor,
    color: "bg-blue-500",
  },
  {
    id: "design",
    title: "Design",
    description: "UI/UX design, graphics, and creative inspiration",
    articles: 189,
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    id: "business",
    title: "Business",
    description: "Entrepreneurship, strategy, and market insights",
    articles: 156,
    icon: Briefcase,
    color: "bg-teal-500",
  },
  {
    id: "health",
    title: "Health & Wellness",
    description: "Fitness, nutrition, and mental health tips",
    articles: 203,
    icon: Heart,
    color: "bg-green-500",
  },
  {
    id: "travel",
    title: "Travel",
    description: "Destinations, tips, and travel experiences",
    articles: 127,
    icon: Plane,
    color: "bg-blue-400",
  },
  {
    id: "food",
    title: "Food & Cooking",
    description: "Recipes, cooking tips, and culinary adventures",
    articles: 178,
    icon: ChefHat,
    color: "bg-orange-500",
  },
  {
    id: "education",
    title: "Education",
    description: "Learning resources and educational content",
    articles: 234,
    icon: GraduationCap,
    color: "bg-purple-600",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description: "Personal development and life inspiration",
    articles: 167,
    icon: Star,
    color: "bg-pink-500",
  },
];

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const totalPages = 2;

  const handleSearch = (term, filters, results) => {
    setSearchTerm(term);
    setSearchResults(results);
    console.log('Search performed:', { term, filters, results });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchResults(null);
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Explore Categories</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover content organized by topics that interest you most. Use AI-powered search to find exactly what you're looking for.
          </p>
        </div>

        {/* AI Search Section */}
        <div className="mb-12">
          <Search 
            onSearch={handleSearch}
            placeholder="Search articles with AI..."
          />
        </div>

        {/* Search Results */}
        {searchResults && (
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Search Results for "{searchTerm}"
              </h2>
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">{result.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{result.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {result.category}
                      </span>
                      {result.tags && result.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Categories</h2>
              
              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.id}
                      onClick={() => handleCategoryClick(category)}
                      className="bg-gray-50 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 cursor-pointer rounded-lg p-6 group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${category.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                      <p className="text-gray-500 text-sm font-medium">{category.articles} articles</p>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="bg-purple-600 text-white border border-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 inline-block" />
                </button>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="bg-purple-600 text-white border border-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4 inline-block" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Content Suggestions */}
            <AIContentSuggestions 
              category={selectedCategory?.id}
              limit={5}
              title="Recommended for You"
            />

            {/* Category-specific suggestions */}
            {selectedCategory && (
              <AIContentSuggestions 
                category={selectedCategory.id}
                limit={3}
                title={`More ${selectedCategory.title}`}
              />
            )}

            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {['AI & Machine Learning', 'Web Development', 'Mental Health', 'Sustainable Living'].map((topic, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
