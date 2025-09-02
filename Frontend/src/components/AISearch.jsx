import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, Loader2, X, Bot, TrendingUp } from 'lucide-react';
import axiosClient from '../../utils/axiosClient';


const AISearch = ({ onSearchResults, placeholder = "Search with AI..." }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery = query) => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setShowSuggestions(false);

    try {
      const response = await axiosClient.post('/ai/search', {
        query: searchQuery,
        filters: {
          limit: 10,
          sortBy: 'relevance'
        }
      });

      if (response.data.success) {
        const results = response.data.data.results;
        
        // Save to recent searches
        const newRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
        setRecentSearches(newRecent);
        localStorage.setItem('recentSearches', JSON.stringify(newRecent));

        // Pass results to parent component
        if (onSearchResults) {
          onSearchResults(results, searchQuery);
        }
      }
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to basic search
      const fallbackResults = generateFallbackResults(searchQuery);
      if (onSearchResults) {
        onSearchResults(fallbackResults, searchQuery);
      }
    } finally {
      setIsSearching(false);
    }
  };

  const generateFallbackResults = (searchQuery) => {
    // Fallback search results when AI search is not available
    const mockResults = [
      {
        id: 1,
        title: `Search results for "${searchQuery}"`,
        excerpt: 'Here are some relevant articles that might interest you...',
        category: 'General',
        relevance: 0.8,
        tags: [searchQuery, 'search', 'results']
      }
    ];
    return mockResults;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      // Generate suggestions based on input
      const newSuggestions = generateSuggestions(value);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const generateSuggestions = (input) => {
    const baseSuggestions = [
      'technology trends',
      'web development',
      'artificial intelligence',
      'business strategy',
      'lifestyle tips',
      'health and wellness',
      'travel guides',
      'personal development'
    ];

    return baseSuggestions.filter(suggestion => 
      suggestion.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleRecentSearchClick = (recentSearch) => {
    setQuery(recentSearch);
    handleSearch(recentSearch);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {isSearching ? (
            <Loader2 className="h-5 w-5 text-purple-600 animate-spin" />
          ) : (
            <div className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-xs text-purple-600 font-medium">AI</span>
            </div>
          )}
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-80 overflow-y-auto">
          {/* AI Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">AI Suggestions</span>
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Search className="h-3 w-3 text-gray-400" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Recent Searches</span>
                </div>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((recentSearch, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(recentSearch)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Search className="h-3 w-3 text-gray-400" />
                  {recentSearch}
                </button>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-100">
            <div className="text-xs text-gray-500 mb-2">Quick Actions</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSuggestionClick('latest posts')}
                className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
              >
                Latest Posts
              </button>
              <button
                onClick={() => handleSuggestionClick('popular articles')}
                className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
              >
                Popular
              </button>
              <button
                onClick={() => handleSuggestionClick('trending topics')}
                className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
              >
                Trending
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISearch;
