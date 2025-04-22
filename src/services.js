// src/services/api.js

import axios from 'axios';

const API_URL = 'https://67eceaf84387d9117bbb77ae.mockapi.io/';

export const fetchContacts = async () => {
  const response = await axios.get(`${API_URL}contacts`);
  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post(`${API_URL}contacts`, newContact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`${API_URL}contacts/${id}`);
  return response.data;
};

export const updateContact = async (id, updatedContact) => {
  const response = await axios.put(`${API_URL}contacts/${id}`, updatedContact);
  return response.data;
};
