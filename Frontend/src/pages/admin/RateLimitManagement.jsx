import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  Activity, 
  Settings, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Loader2,
  Search,
  Eye,
  EyeOff
} from 'lucide-react';
import rateLimitService from '../../services/rateLimitService';

const RateLimitManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      switch (activeTab) {
        case 'overview':
          const statsData = await rateLimitService.getRateLimitStats();
          setStats(statsData.data);
          break;
        case 'settings':
          const settingsData = await rateLimitService.getRateLimitSettings();
          setSettings(settingsData.data);
          break;
      }
    } catch (err) {
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleResetUserLimit = async (userId) => {
    if (window.confirm('Are you sure you want to reset this user\'s rate limit?')) {
      try {
        await rateLimitService.resetUserRateLimit(userId);
        loadData(); // Reload data
      } catch (err) {
        setError(err.message || 'Failed to reset rate limit');
      }
    }
  };

  const handleUpdateSettings = async (newSettings) => {
    try {
      await rateLimitService.updateRateLimitSettings(newSettings);
      setSettings(newSettings);
      setShowSettings(false);
    } catch (err) {
      setError(err.message || 'Failed to update settings');
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-semibold text-gray-900">{stats?.totalUsers || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900">{stats?.activeUsers || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Rate Limited</p>
              <p className="text-2xl font-semibold text-gray-900">{stats?.rateLimitedUsers || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Requests/Hour</p>
              <p className="text-2xl font-semibold text-gray-900">{stats?.averageRequestsPerHour || 0}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Requesting Users */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Requesting Users</h3>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stats?.topRequestingUsers?.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.requests}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.ip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.requests >= 100 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.requests >= 100 ? 'Rate Limited' : 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleResetUserLimit(user.userId)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Rate Limit Settings</h3>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {showSettings ? <EyeOff size={16} /> : <Eye size={16} />}
              {showSettings ? 'Hide' : 'Edit'} Settings
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {showSettings ? (
            <SettingsForm 
              settings={settings} 
              onSave={handleUpdateSettings}
              onCancel={() => setShowSettings(false)}
            />
          ) : (
            <SettingsDisplay settings={settings} />
          )}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Rate Limit Management</h1>
        <p className="text-gray-600">Monitor and manage rate limiting for users and anonymous visitors</p>
      </div>

      {error && (
        <div className="mb-4 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <AlertTriangle size={20} />
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
              <span className="ml-2 text-gray-600">Loading...</span>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'settings' && renderSettings()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Settings Display Component
const SettingsDisplay = ({ settings }) => (
  <div className="grid gap-4 md:grid-cols-3">
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold text-gray-900">Anonymous Users</h4>
      <p className="text-2xl font-bold text-blue-600">{settings?.anonymousLimit || 5}</p>
      <p className="text-sm text-gray-600">prompts per hour</p>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold text-gray-900">Authenticated Users</h4>
      <p className="text-2xl font-bold text-green-600">{settings?.authenticatedLimit || 100}</p>
      <p className="text-sm text-gray-600">requests per hour</p>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold text-gray-900">Time Window</h4>
      <p className="text-2xl font-bold text-purple-600">{settings?.windowMinutes || 60}</p>
      <p className="text-sm text-gray-600">minutes</p>
    </div>
  </div>
);

// Settings Form Component
const SettingsForm = ({ settings, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    anonymousLimit: settings?.anonymousLimit || 5,
    authenticatedLimit: settings?.authenticatedLimit || 100,
    windowMinutes: settings?.windowMinutes || 60
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anonymous User Limit
          </label>
          <input
            type="number"
            value={formData.anonymousLimit}
            onChange={(e) => setFormData({...formData, anonymousLimit: parseInt(e.target.value)})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="50"
          />
          <p className="text-xs text-gray-500 mt-1">prompts per hour</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Authenticated User Limit
          </label>
          <input
            type="number"
            value={formData.authenticatedLimit}
            onChange={(e) => setFormData({...formData, authenticatedLimit: parseInt(e.target.value)})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="10"
            max="1000"
          />
          <p className="text-xs text-gray-500 mt-1">requests per hour</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Window
          </label>
          <input
            type="number"
            value={formData.windowMinutes}
            onChange={(e) => setFormData({...formData, windowMinutes: parseInt(e.target.value)})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="1440"
          />
          <p className="text-xs text-gray-500 mt-1">minutes</p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save Settings
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RateLimitManagement;
