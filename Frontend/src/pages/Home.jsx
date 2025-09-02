import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Star,
  BookOpen,
  Code,
  Palette,
  Camera,
  Music,
  Utensils,
  Plane,
  Car,
  Briefcase,
  GraduationCap,
  Heart as HeartIcon,
  Zap,
  Target,
  Users,
  Globe,
  Award,
  CheckCircle,
  Play,
  Search,
  Filter,
  Calendar,
  Tag
} from 'lucide-react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

export default function Home(){
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setFeaturedPosts([
        {
          id: 1,
          title: "The Future of AI in Web Development",
          excerpt: "Discover how artificial intelligence is revolutionizing the way we build and maintain websites, from automated testing to intelligent user interfaces.",
          author: "Sarah Johnson",
          date: "2024-01-15",
          readTime: "8 min read",
          category: "Technology",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
          views: 15420,
          likes: 892,
          comments: 156,
          featured: true
        },
        {
          id: 2,
          title: "Sustainable Living: A Complete Guide for 2024",
          excerpt: "Learn practical tips and strategies for living a more sustainable lifestyle, from reducing waste to choosing eco-friendly products.",
          author: "Michael Chen",
          date: "2024-01-14",
          readTime: "12 min read",
          category: "Lifestyle",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
          views: 12850,
          likes: 745,
          comments: 98,
          featured: true
        },
        {
          id: 3,
          title: "Mastering React: From Beginner to Expert",
          excerpt: "A comprehensive guide to React development, covering everything from basic concepts to advanced patterns and best practices.",
          author: "Emily Rodriguez",
          date: "2024-01-13",
          readTime: "15 min read",
          category: "Development",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
          views: 18920,
          likes: 1123,
          comments: 234,
          featured: true
        }
      ]);

      setTrendingPosts([
        {
          id: 4,
          title: "10 Essential Life Skills for 2024",
          excerpt: "Essential skills everyone should master in the modern world, from digital literacy to emotional intelligence.",
          author: "David Kim",
          date: "2024-01-12",
          readTime: "6 min read",
          category: "Self-Improvement",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
          views: 9870,
          likes: 567,
          comments: 89
        },
        {
          id: 5,
          title: "The Art of Effective Communication",
          excerpt: "Master the skills of effective communication in both personal and professional settings.",
          author: "Lisa Wang",
          date: "2024-01-11",
          readTime: "7 min read",
          category: "Communication",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
          views: 8760,
          likes: 432,
          comments: 67
        },
        {
          id: 6,
          title: "Building a Successful Remote Team",
          excerpt: "Learn the strategies and tools needed to build and manage high-performing remote teams.",
          author: "Alex Thompson",
          date: "2024-01-10",
          readTime: "9 min read",
          category: "Business",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
          views: 7650,
          likes: 398,
          comments: 54
        }
      ]);

      setCategories([
        { name: "Technology", icon: Code, count: 45, color: "bg-blue-500" },
        { name: "Development", icon: BookOpen, count: 38, color: "bg-green-500" },
        { name: "Design", icon: Palette, count: 32, color: "bg-purple-500" },
        { name: "Photography", icon: Camera, count: 28, color: "bg-pink-500" },
        { name: "Music", icon: Music, count: 25, color: "bg-yellow-500" },
        { name: "Food", icon: Utensils, count: 22, color: "bg-orange-500" },
        { name: "Travel", icon: Plane, count: 35, color: "bg-indigo-500" },
        { name: "Automotive", icon: Car, count: 18, color: "bg-red-500" },
        { name: "Home & Garden", icon: Home, count: 30, color: "bg-teal-500" },
        { name: "Business", icon: Briefcase, count: 42, color: "bg-gray-500" },
        { name: "Education", icon: GraduationCap, count: 27, color: "bg-cyan-500" },
        { name: "Health & Fitness", icon: HeartIcon, count: 33, color: "bg-rose-500" }
      ]);

      setStats({
        totalPosts: 1250,
        totalAuthors: 85,
        totalViews: 2500000,
        totalCategories: 12
      });

      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Discover Amazing Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Explore insightful articles, tutorials, and stories from passionate writers around the world. 
              From technology to lifestyle, we've got everything you need to stay informed and inspired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blogs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explore Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        {/* <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-white rounded-full opacity-30"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <div className="w-6 h-6 bg-white rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-spin">
          <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
        </div> */}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stats.totalPosts.toLocaleString()}+
              </div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stats.totalAuthors}+
              </div>
              <div className="text-gray-600">Expert Writers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stats.totalViews.toLocaleString()}+
              </div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {stats.totalCategories}
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked stories that inspire, educate, and entertain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                    <Clock className="h-4 w-4 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find content that matches your interests across diverse topics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={`/blogs?category=${category.name.toLowerCase()}`}
                  className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count} articles
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Trending Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Trending Now</h2>
              <p className="text-xl text-gray-600">
                Most popular articles this week
              </p>
            </div>
            <Link
              to="/recent"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      #{index + 1} Trending
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                    <Clock className="h-4 w-4 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest articles and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

