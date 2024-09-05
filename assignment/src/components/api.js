import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch Users
export const fetchUsers = async () => {
  return await axios.get(API_URL);
};

// Create User
export const createUser = async (userData) => {
  return await axios.post(API_URL, userData);
};

// Update User
export const updateUser = async (id, userData) => {
  return await axios.put(`${API_URL}/${id}`, userData);
};

// Delete User
export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
