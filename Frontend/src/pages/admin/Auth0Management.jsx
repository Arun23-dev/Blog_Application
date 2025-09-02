import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Shield, 
  Activity, 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX,
  Loader2,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import auth0ManagementService from '../../services/auth0ManagementService';

const Auth0Management = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      switch (activeTab) {
        case 'users':
          const usersData = await auth0ManagementService.getAuth0Users();
          setUsers(usersData.data || []);
          break;
        case 'roles':
          const rolesData = await auth0ManagementService.getAuth0Roles();
          setRoles(rolesData.data || []);
          break;
        case 'logs':
          const logsData = await auth0ManagementService.getAuth0Logs();
          setLogs(logsData.data || []);
          break;
        case 'stats':
          const statsData = await auth0ManagementService.getAuth0Stats();
          setStats(statsData.data);
          break;
      }
    } catch (err) {
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleBlockUser = async (userId) => {
    try {
      await auth0ManagementService.blockAuth0User(userId);
      loadData(); // Reload users
    } catch (err) {
      setError(err.message || 'Failed to block user');
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      await auth0ManagementService.unblockAuth0User(userId);
      loadData(); // Reload users
    } catch (err) {
      setError(err.message || 'Failed to unblock user');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await auth0ManagementService.deleteAuth0User(userId);
        loadData(); // Reload users
      } catch (err) {
        setError(err.message || 'Failed to delete user');
      }
    }
  };

  const filteredUsers = users.filter(user => 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderUsers = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => setShowUserModal(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <Plus size={20} />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.user_id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.picture || 'https://via.placeholder.com/40'}
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name || 'N/A'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {user.nickname || 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    user.blocked 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {user.blocked ? 'Blocked' : 'Active'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.last_login ? new Date(user.last_login).toLocaleDateString() : 'Never'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit size={16} />
                    </button>
                    {user.blocked ? (
                      <button
                        onClick={() => handleUnblockUser(user.user_id)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <UserCheck size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBlockUser(user.user_id)}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        <UserX size={16} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteUser(user.user_id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderRoles = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Auth0 Roles</h3>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Plus size={20} />
          Add Role
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <div key={role.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{role.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{role.description}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Edit size={16} />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLogs = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Auth0 Logs</h3>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="max-h-96 overflow-y-auto">
          {logs.map((log) => (
            <div key={log.log_id} className="border-b border-gray-200 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-900">{log.event_name}</p>
                  <p className="text-xs text-gray-500 mt-1">{log.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(log.date).toLocaleString()}
                  </p>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  log.type === 's' ? 'bg-green-100 text-green-800' :
                  log.type === 'f' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {log.type === 's' ? 'Success' : log.type === 'f' ? 'Failure' : 'Info'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Auth0 Statistics</h3>
      {stats && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.active_users || 0}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const tabs = [
    { id: 'users', label: 'Users', icon: Users },
    { id: 'roles', label: 'Roles', icon: Shield },
    { id: 'logs', label: 'Logs', icon: FileText },
    { id: 'stats', label: 'Stats', icon: Activity },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Auth0 Management</h1>
        <p className="text-gray-600">Manage Auth0 users, roles, and monitor activity</p>
      </div>

      {error && (
        <div className="mb-4 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <AlertCircle size={20} />
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
              {activeTab === 'users' && renderUsers()}
              {activeTab === 'roles' && renderRoles()}
              {activeTab === 'logs' && renderLogs()}
              {activeTab === 'stats' && renderStats()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth0Management;
