import axiosClient from '../../utils/axiosClient';

class RateLimitService {
  // Get rate limit statistics
  async getRateLimitStats() {
    const response = await axiosClient.get('/admin/rate-limits');
    return response.data;
  }

  // Get specific user's rate limit info
  async getUserRateLimit(userId) {
    const response = await axiosClient.get(`/admin/rate-limits/${userId}`);
    return response.data;
  }

  // Reset user's rate limit
  async resetUserRateLimit(userId) {
    const response = await axiosClient.post(`/admin/rate-limits/${userId}/reset`);
    return response.data;
  }

  // Get anonymous user rate limit info
  async getAnonymousRateLimit(ip) {
    const response = await axiosClient.get(`/admin/rate-limits/anonymous/${ip}`);
    return response.data;
  }

  // Update rate limit settings
  async updateRateLimitSettings(settings) {
    const response = await axiosClient.put('/admin/rate-limits/settings', settings);
    return response.data;
  }

  // Get current rate limit settings
  async getRateLimitSettings() {
    const response = await axiosClient.get('/admin/rate-limits/settings');
    return response.data;
  }
}

export default new RateLimitService();
