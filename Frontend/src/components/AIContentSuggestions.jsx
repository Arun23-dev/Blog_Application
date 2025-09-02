import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, TrendingUp, Clock, Heart, ArrowRight } from 'lucide-react';
import axiosClient from '../../utils/axiosClient';

const AIContentSuggestions = ({ category, limit = 5, title = "AI Recommendations" }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSuggestions();
  }, [category, limit]);

  const fetchSuggestions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.get('/ai/suggestions', {
        params: {
          category,
          limit
        }
      });

      if (response.data.success) {
        setSuggestions(response.data.data.suggestions);
      } else {
        throw new Error(response.data.message || 'Failed to fetch suggestions');
      }
    } catch (error) {
      console.error('Error fetching AI suggestions:', error);
      setError('Failed to load suggestions');
      // Fallback to default suggestions
      setSuggestions(generateFallbackSuggestions(category, limit));
    } finally {
      setIsLoading(false);
    }
  };

  const generateFallbackSuggestions = (category, limit) => {
    const allSuggestions = [
      {
        id: 1,
        title: 'The Future of AI in Web Development',
        category: 'Technology',
        readTime: '5 min read',
        popularity: 'high',
        tags: ['AI', 'Web Development', 'Technology']
      },
      {
        id: 2,
        title: 'Modern Lifestyle Trends in 2024',
        category: 'Lifestyle',
        readTime: '4 min read',
        popularity: 'medium',
        tags: ['Lifestyle', 'Trends', '2024']
      },
      {
        id: 3,
        title: 'Business Strategy for Startups',
        category: 'Business',
        readTime: '7 min read',
        popularity: 'high',
        tags: ['Business', 'Startup', 'Strategy']
      },
      {
        id: 4,
        title: 'Mental Health in the Digital Age',
        category: 'Health',
        readTime: '6 min read',
        popularity: 'medium',
        tags: ['Health', 'Mental Health', 'Digital']
      },
      {
        id: 5,
        title: 'Sustainable Living: A Complete Guide',
        category: 'Lifestyle',
        readTime: '8 min read',
        popularity: 'high',
        tags: ['Lifestyle', 'Sustainability', 'Guide']
      },
      {
        id: 6,
        title: 'Mastering React: From Beginner to Expert',
        category: 'Technology',
        readTime: '10 min read',
        popularity: 'high',
        tags: ['Technology', 'React', 'Programming']
      },
      {
        id: 7,
        title: 'Travel Photography Tips for Beginners',
        category: 'Travel',
        readTime: '5 min read',
        popularity: 'medium',
        tags: ['Travel', 'Photography', 'Tips']
      },
      {
        id: 8,
        title: 'The Art of Effective Communication',
        category: 'Business',
        readTime: '6 min read',
        popularity: 'medium',
        tags: ['Business', 'Communication', 'Skills']
      }
    ];

    if (category) {
      return allSuggestions
        .filter(suggestion => suggestion.category.toLowerCase() === category.toLowerCase())
        .slice(0, limit);
    }

    return allSuggestions.slice(0, limit);
  };

  const getPopularityIcon = (popularity) => {
    switch (popularity) {
      case 'high':
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'medium':
        return <Heart className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPopularityText = (popularity) => {
    switch (popularity) {
      case 'high':
        return 'Trending';
      case 'medium':
        return 'Popular';
      default:
        return 'Recent';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="space-y-3">
          {[...Array(limit)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">Powered by AI</p>
          </div>
        </div>
        <div className="bg-purple-50 px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-purple-700">AI</span>
        </div>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={suggestion.id || index}
            className="group p-4 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                  <h4 className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                    {suggestion.title || suggestion}
                  </h4>
                </div>
                
                {suggestion.category && (
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {suggestion.category}
                    </span>
                    {suggestion.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {suggestion.readTime}
                      </span>
                    )}
                    {suggestion.popularity && (
                      <span className="flex items-center gap-1">
                        {getPopularityIcon(suggestion.popularity)}
                        {getPopularityText(suggestion.popularity)}
                      </span>
                    )}
                  </div>
                )}

                {suggestion.tags && suggestion.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {suggestion.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Suggestions are personalized based on your interests and reading history
        </p>
      </div>
    </div>
  );
};

export default AIContentSuggestions;
