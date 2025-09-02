import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Search, 
  Filter, 
  Calendar,
  Tag,
  TrendingUp,
  Star,
  Bookmark,
  Share2,
  ArrowUp,
  ArrowDown,
  Grid,
  List,
  RefreshCw,
  Loader2,
  Zap,
  Target,
  Filter as FilterIcon,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router';

const Recent = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const categories = [
    'All', 'Technology', 'Development', 'Design', 'Photography', 'Music', 
    'Food', 'Travel', 'Automotive', 'Home & Garden', 'Business', 'Education', 
    'Health & Fitness', 'Self-Improvement', 'Communication', 'Lifestyle'
  ];

  const sortOptions = [
    { value: 'date', label: 'Date', icon: Calendar },
    { value: 'views', label: 'Views', icon: Eye },
    { value: 'likes', label: 'Likes', icon: Heart },
    { value: 'comments', label: 'Comments', icon: MessageCircle },
    { value: 'title', label: 'Title', icon: Bookmark }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const mockPosts = [
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
          featured: true,
          trending: true
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
          featured: true,
          trending: true
        },
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
          comments: 89,
          trending: true
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
        },
        {
          id: 7,
          title: "Modern Photography Techniques",
          excerpt: "Explore advanced photography techniques and tips for capturing stunning images in any setting.",
          author: "Jessica Park",
          date: "2024-01-09",
          readTime: "10 min read",
          category: "Photography",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
          views: 6540,
          likes: 321,
          comments: 45
        },
        {
          id: 8,
          title: "Healthy Eating Habits for Busy Professionals",
          excerpt: "Simple and effective strategies for maintaining a healthy diet despite a busy schedule.",
          author: "Maria Garcia",
          date: "2024-01-08",
          readTime: "5 min read",
          category: "Health & Fitness",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop",
          views: 5430,
          likes: 298,
          comments: 38
        },
        {
          id: 9,
          title: "Design Principles for Modern Web Applications",
          excerpt: "Essential design principles that every web developer should understand and implement.",
          author: "Ryan Wilson",
          date: "2024-01-07",
          readTime: "11 min read",
          category: "Design",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
          views: 4320,
          likes: 245,
          comments: 32
        },
        {
          id: 10,
          title: "Travel Photography: Capturing Memories",
          excerpt: "Tips and techniques for taking amazing travel photos that tell a story.",
          author: "Sophie Brown",
          date: "2024-01-06",
          readTime: "8 min read",
          category: "Travel",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
          views: 3980,
          likes: 187,
          comments: 28
        },
        {
          id: 11,
          title: "Music Production for Beginners",
          excerpt: "A comprehensive guide to getting started with music production at home.",
          author: "Carlos Martinez",
          date: "2024-01-05",
          readTime: "13 min read",
          category: "Music",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop",
          views: 3650,
          likes: 156,
          comments: 24
        },
        {
          id: 12,
          title: "Home Gardening: From Seed to Harvest",
          excerpt: "Complete guide to starting and maintaining a successful home garden.",
          author: "Emma Davis",
          date: "2024-01-04",
          readTime: "14 min read",
          category: "Home & Garden",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop",
          views: 3120,
          likes: 134,
          comments: 19
        }
      ];

      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'likes':
          aValue = a.likes;
          bValue = b.likes;
          break;
        case 'comments':
          aValue = a.comments;
          bValue = b.comments;
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          aValue = new Date(a.date);
          bValue = new Date(b.date);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [posts, searchTerm, selectedCategory, sortBy, sortOrder]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleSort = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('date');
    setSortOrder('desc');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest stories, insights, and knowledge from our community of writers
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {/* Search and View Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FilterIcon className="h-5 w-5" />
                Filters
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <div className="flex gap-2">
                    {sortOptions.map(option => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.value}
                          onClick={() => handleSort(option.value)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            sortBy === option.value
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {option.label}
                          {sortBy === option.value && (
                            sortOrder === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <X className="h-4 w-4" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mt-6 mb-8">
          <div className="text-gray-600">
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles
          </div>
          <div className="text-gray-600">
            {filteredPosts.length > 0 && (
              <span className="inline-flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Last updated: {new Date().toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>

        {/* Posts Grid/List */}
        {currentPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {currentPosts.map((post) => (
              <article key={post.id} className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={viewMode === 'list' ? 'flex-shrink-0 w-48' : ''}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className={`${viewMode === 'list' ? 'w-48 h-32' : 'w-full h-48'} object-cover`}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.featured && (
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                      {post.trending && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Fire className="h-3 w-3" />
                          Trending
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                    <Clock className="h-4 w-4 ml-3 mr-1" />
                    {post.readTime}
                    <Tag className="h-4 w-4 ml-3 mr-1" />
                    {post.category}
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 mb-3 ${viewMode === 'list' ? 'text-xl' : 'text-lg'} line-clamp-2`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 ${viewMode === 'list' ? 'line-clamp-3' : 'line-clamp-2'}`}>
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
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recent;