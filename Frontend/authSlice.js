import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from './utils/axiosClient'

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
    const response =  await axiosClient.post('/user/register', userData);
    return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('/user/login', credentials);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.get('/user/check');
      return data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axiosClient.post('/logout');
      return null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Auth0 integration actions
export const setAuth0User = createAsyncThunk(
  'auth/setAuth0User',
  async (auth0User, { rejectWithValue }) => {
    try {
      // If user exists in our database, return it
      // If not, create a new user with Auth0 data
      const response = await axiosClient.post('/user/auth0-login', {
        emailId: auth0User.email,
        firstName: auth0User.given_name || auth0User.name?.split(' ')[0] || 'User',
        lastName: auth0User.family_name || auth0User.name?.split(' ').slice(1).join(' ') || '',
        auth0Id: auth0User.sub,
        picture: auth0User.picture
      });
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const clearAuth0User = createAsyncThunk(
  'auth/clearAuth0User',
  async (_, { rejectWithValue }) => {
    try {
      await axiosClient.post('/user/logout');
      return null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    auth0User: null,
    isAuth0Authenticated: false
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register User Cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })
  
      // Login User Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })
  
      // Check Auth Cases
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })
  
      // Logout User Cases
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })

      // Auth0 Cases
      .addCase(setAuth0User.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setAuth0User.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.isAuth0Authenticated = true;
        state.user = action.payload;
      })
      .addCase(setAuth0User.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Auth0 login failed';
        state.isAuthenticated = false;
        state.isAuth0Authenticated = false;
        state.user = null;
      })

      .addCase(clearAuth0User.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearAuth0User.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.isAuth0Authenticated = false;
        state.auth0User = null;
        state.error = null;
      })
      .addCase(clearAuth0User.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Auth0 logout failed';
        state.isAuthenticated = false;
        state.isAuth0Authenticated = false;
        state.user = null;
        state.auth0User = null;
      });
  }
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;