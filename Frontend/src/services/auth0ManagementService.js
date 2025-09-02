import axiosClient from '../../utils/axiosClient';

class Auth0ManagementService {
  // User Management
  async getAuth0Users() {
    const response = await axiosClient.get('/auth0-management/users');
    return response.data;
  }

  async getAuth0User(userId) {
    const response = await axiosClient.get(`/auth0-management/users/${userId}`);
    return response.data;
  }

  async createAuth0User(userData) {
    const response = await axiosClient.post('/auth0-management/users', userData);
    return response.data;
  }

  async updateAuth0User(userId, userData) {
    const response = await axiosClient.patch(`/auth0-management/users/${userId}`, userData);
    return response.data;
  }

  async deleteAuth0User(userId) {
    const response = await axiosClient.delete(`/auth0-management/users/${userId}`);
    return response.data;
  }

  async getUserRoles(userId) {
    const response = await axiosClient.get(`/auth0-management/users/${userId}/roles`);
    return response.data;
  }

  async assignRolesToUser(userId, roles) {
    const response = await axiosClient.post(`/auth0-management/users/${userId}/roles`, { roles });
    return response.data;
  }

  async removeRolesFromUser(userId, roles) {
    const response = await axiosClient.delete(`/auth0-management/users/${userId}/roles`, { data: { roles } });
    return response.data;
  }

  // Role Management
  async getAuth0Roles() {
    const response = await axiosClient.get('/auth0-management/roles');
    return response.data;
  }

  async getAuth0Role(roleId) {
    const response = await axiosClient.get(`/auth0-management/roles/${roleId}`);
    return response.data;
  }

  async createAuth0Role(roleData) {
    const response = await axiosClient.post('/auth0-management/roles', roleData);
    return response.data;
  }

  async updateAuth0Role(roleId, roleData) {
    const response = await axiosClient.patch(`/auth0-management/roles/${roleId}`, roleData);
    return response.data;
  }

  async deleteAuth0Role(roleId) {
    const response = await axiosClient.delete(`/auth0-management/roles/${roleId}`);
    return response.data;
  }

  // Logs and Stats
  async getAuth0Logs(params = {}) {
    const response = await axiosClient.get('/auth0-management/logs', { params });
    return response.data;
  }

  async getAuth0Stats() {
    const response = await axiosClient.get('/auth0-management/stats');
    return response.data;
  }

  // User Actions
  async blockAuth0User(userId) {
    const response = await axiosClient.patch(`/auth0-management/users/${userId}/block`);
    return response.data;
  }

  async unblockAuth0User(userId) {
    const response = await axiosClient.patch(`/auth0-management/users/${userId}/unblock`);
    return response.data;
  }
}

export default new Auth0ManagementService();
