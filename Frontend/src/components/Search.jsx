import React, { useState } from 'react';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import AISearch from './AISearch';

const Search = ({ onSearch, placeholder = "Search articles..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    dateRange: '',
    sortBy: 'relevance'
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term, filters);
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onSearch) {
      onSearch(searchTerm, newFilters);
    }
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      dateRange: '',
      sortBy: 'relevance'
    };
    setFilters(clearedFilters);
    if (onSearch) {
      onSearch(searchTerm, clearedFilters);
    }
  };

  const handleAISearchResults = (results, query) => {
    console.log('AI Search Results:', results);
    // Handle AI search results here
    if (onSearch) {
      onSearch(query, filters, results);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-4">
        <AISearch 
          onSearchResults={handleAISearchResults}
          placeholder={placeholder}
        />
        
        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Filter className="h-5 w-5" />
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Search Filters</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
                <option value="health">Health & Wellness</option>
                <option value="travel">Travel</option>
                <option value="food">Food & Cooking</option>
                <option value="education">Education</option>
                <option value="culture">Culture</option>
              </select>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select
                value={filters.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>

            {/* Sort By Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="relevance">Relevance</option>
                <option value="date">Date</option>
                <option value="popularity">Popularity</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Search Results Summary */}
      {searchTerm && (
        <div className="text-sm text-gray-600 mb-4">
          Showing results for "{searchTerm}"
          {filters.category && ` in ${filters.category}`}
          {filters.dateRange && ` from ${filters.dateRange}`}
        </div>
      )}
    </div>
  );
};

export default Search;
