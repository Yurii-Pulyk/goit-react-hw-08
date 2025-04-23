import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchContacts } from '../contacts/operations';

const api = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = value => {
  api.defaults.headers.common.Authorization = value;
};

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/users/signup', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/users/login', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const response = await api.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

export default api;
