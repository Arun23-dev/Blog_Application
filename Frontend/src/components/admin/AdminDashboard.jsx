import React, { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Eye, 
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  RefreshCw,
  Settings,
  Maximize2,
  Minimize2
} from 'lucide-react';
import axiosClient from '../../../utils/axiosClient';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell } from 'recharts';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [widgets, setWidgets] = useState([
    { id: 'stats', title: 'Overview Stats', position: 0, enabled: true, size: 'large' },
    { id: 'recentPosts', title: 'Recent Posts', position: 1, enabled: true, size: 'medium' },
    { id: 'userActivity', title: 'User Activity', position: 2, enabled: true, size: 'medium' },
    { id: 'analytics', title: 'Analytics', position: 3, enabled: true, size: 'large' },
    { id: 'categoryStats', title: 'Category Statistics', position: 4, enabled: true, size: 'small' },
    { id: 'topAuthors', title: 'Top Authors', position: 5, enabled: true, size: 'small' }
  ]);
  const [draggedWidget, setDraggedWidget] = useState(null);

  useEffect(() => {
    fetchDashboardData();
    fetchAnalyticsData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axiosClient.get('/admin/dashboard/stats');
      if (response.data.success) {
        setDashboardData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Set mock data for development
      setDashboardData({
        stats: {
          totalUsers: 1250,
          totalPosts: 456,
          totalComments: 1234,
          activeUsers: 875
        },
        recentActivity: {
          posts: [
            { _id: '1', title: 'Getting Started with React', author: { name: 'John Doe', email: 'john@example.com' }, createdAt: new Date() },
            { _id: '2', title: 'Advanced JavaScript Patterns', author: { name: 'Jane Smith', email: 'jane@example.com' }, createdAt: new Date() }
          ],
          users: [
            { _id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'user', createdAt: new Date() },
            { _id: '2', name: 'Bob Wilson', email: 'bob@example.com', role: 'user', createdAt: new Date() }
          ]
        },
        categoryStats: [
          { _id: 'technology', count: 45 },
          { _id: 'lifestyle', count: 32 },
          { _id: 'business', count: 28 },
          { _id: 'health', count: 25 }
        ],
        monthlyStats: [
          { _id: { year: 2024, month: 1 }, count: 12 },
          { _id: { year: 2024, month: 2 }, count: 18 },
          { _id: { year: 2024, month: 3 }, count: 15 },
          { _id: { year: 2024, month: 4 }, count: 22 }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalyticsData = async () => {
    try {
      const response = await axiosClient.get('/admin/analytics/overview');
      if (response.data.success) {
        setAnalyticsData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      // Set mock analytics data
      setAnalyticsData({
        overview: {
          totalUsers: 1250,
          newUsersThisMonth: 45,
          newUsersThisWeek: 12,
          totalPosts: 456,
          publishedPosts: 432,
          postsThisMonth: 28,
          totalComments: 1234,
          commentsThisMonth: 89
        },
        topCategories: [
          { _id: 'technology', count: 45 },
          { _id: 'lifestyle', count: 32 },
          { _id: 'business', count: 28 },
          { _id: 'health', count: 25 },
          { _id: 'travel', count: 20 }
        ],
        topAuthors: [
          { name: 'John Doe', email: 'john@example.com', postCount: 15 },
          { name: 'Jane Smith', email: 'jane@example.com', postCount: 12 },
          { name: 'Mike Johnson', email: 'mike@example.com', postCount: 10 },
          { name: 'Sarah Wilson', email: 'sarah@example.com', postCount: 8 },
          { name: 'David Brown', email: 'david@example.com', postCount: 6 }
        ]
      });
    }
  };

  const handleDragStart = (e, widgetId) => {
    setDraggedWidget(widgetId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetWidgetId) => {
    e.preventDefault();
    if (draggedWidget && draggedWidget !== targetWidgetId) {
      const draggedIndex = widgets.findIndex(w => w.id === draggedWidget);
      const targetIndex = widgets.findIndex(w => w.id === targetWidgetId);
      
      const newWidgets = [...widgets];
      const [draggedWidgetData] = newWidgets.splice(draggedIndex, 1);
      newWidgets.splice(targetIndex, 0, draggedWidgetData);
      
      // Update positions
      newWidgets.forEach((widget, index) => {
        widget.position = index;
      });
      
      setWidgets(newWidgets);
    }
    setDraggedWidget(null);
  };

  const toggleWidget = (widgetId) => {
    setWidgets(prev => prev.map(widget => 
      widget.id === widgetId ? { ...widget, enabled: !widget.enabled } : widget
    ));
  };

  const getWidgetSize = (size) => {
    switch (size) {
      case 'small': return 'col-span-1';
      case 'medium': return 'col-span-2';
      case 'large': return 'col-span-3';
      default: return 'col-span-2';
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  const renderWidget = (widget) => {
    if (!widget.enabled) return null;

    switch (widget.id) {
      case 'stats':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{widget.title}</h3>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button 
                  className="p-1 text-gray-400 hover:text-gray-600"
                  onClick={() => toggleWidget(widget.id)}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(dashboardData?.stats?.totalUsers || 0)}</p>
                <p className="text-sm text-gray-500">Total Users</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(dashboardData?.stats?.totalPosts || 0)}</p>
                <p className="text-sm text-gray-500">Total Posts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(dashboardData?.stats?.totalComments || 0)}</p>
                <p className="text-sm text-gray-500">Comments</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(dashboardData?.stats?.activeUsers || 0)}</p>
                <p className="text-sm text-gray-500">Active Users</p>
              </div>
            </div>
          </div>
        );

      case 'recentPosts':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{widget.title}</h3>
              <button 
                className="p-1 text-gray-400 hover:text-gray-600"
                onClick={() => toggleWidget(widget.id)}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {dashboardData?.recentActivity?.posts?.slice(0, 5).map((post) => (
                <div key={post._id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                    <p className="text-xs text-gray-500">by {post.author?.name}</p>
                    <p className="text-xs text-gray-400">{formatDate(post.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'userActivity':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{widget.title}</h3>
              <button 
                className="p-1 text-gray-400 hover:text-gray-600"
                onClick={() => toggleWidget(widget.id)}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {dashboardData?.recentActivity?.users?.slice(0, 5).map((user) => (
                <div key={user._id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <p className="text-xs text-gray-400">{formatDate(user.createdAt)}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {user.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{widget.title}</h3>
              <button 
                className="p-1 text-gray-400 hover:text-gray-600"
                onClick={() => toggleWidget(widget.id)}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dashboardData?.monthlyStats?.map(stat => ({
                  name: `${stat._id.month}/${stat._id.year}`,
                  posts: stat.count
                })) || []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="posts" stroke="#8b5cf6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'categoryStats':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{widget.title}</h3>
              <button 
                className="p-1 text-gray-400 hover:text-gray-600"
                onClick={() => toggleWidget(widget.id)}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {dashboardData?.categoryStats?.slice(0, 5).map((category) => (
                <div key={category._id} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 capitalize">{category._id}</span>
                  <span className="text-sm font-medium text-gray-900">{category.count}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'topAuthors':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{widget.title}</h3>
              <button 
                className="p-1 text-gray-400 hover:text-gray-600"
                onClick={() => toggleWidget(widget.id)}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {analyticsData?.topAuthors?.slice(0, 5).map((author, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{index + 1}.</span>
                    <span className="text-sm text-gray-600">{author.name}</span>
                  </div>
                  <span className="text-sm font-medium text-purple-600">{author.postCount} posts</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your admin dashboard</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={fetchDashboardData}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets
          .filter(widget => widget.enabled)
          .sort((a, b) => a.position - b.position)
          .map((widget) => (
            <div
              key={widget.id}
              className={`${getWidgetSize(widget.size)}`}
              draggable
              onDragStart={(e) => handleDragStart(e, widget.id)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, widget.id)}
            >
              {renderWidget(widget)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
