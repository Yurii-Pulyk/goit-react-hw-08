import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api'; // Припускаємо, що ти використовуєш свою API

// Операція для отримання контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getContacts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Операція для додавання контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await api.addContact(contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return { id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
