import React, { useState } from "react";
import {
  Search,
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

// Replace Card, CardContent, Input, Button with plain divs/buttons or your own components
// For demonstration, I will use plain HTML elements with Tailwind classes

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

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Categories</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover content organized by topics that interest you most. Click on any category to explore related
            content.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-slate-600"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-slate-800 border border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer rounded-lg p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.color} flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{category.description}</p>
                <p className="text-slate-400 text-sm">{category.articles} articles</p>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="bg-white text-slate-900 border border-white hover:bg-slate-100 px-3 py-1 rounded"
          >
            <ChevronLeft className="w-4 h-4 inline-block" />
          </button>
          <span className="px-4 py-2 bg-white text-slate-900 rounded-md text-sm font-medium">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="bg-white text-slate-900 border border-white hover:bg-slate-100 px-3 py-1 rounded"
          >
            <ChevronRight className="w-4 h-4 inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
}
