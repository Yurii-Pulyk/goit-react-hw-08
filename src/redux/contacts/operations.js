import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from '../auth/operations'; // Імпортуємо setAuthHeader

const api = axios.create({
  baseURL: 'https://connections-api.goit.global/', // чи твій API URL
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      // Отримуємо токен з redux state
      const state = thunkAPI.getState();
      setAuthHeader(state.auth.token); // Встановлюємо заголовок для запиту

      const res = await api.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setAuthHeader(state.auth.token); // Встановлюємо заголовок для запиту

      const res = await api.post('/contacts', newContact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setAuthHeader(state.auth.token); // Встановлюємо заголовок для запиту

      const res = await api.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
