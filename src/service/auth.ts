import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const getUser = async (token: string) => {
    const response = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const updateUser = async (token: string, user: { username?: string; email?: string; password?: string }) => {
    const response = await axios.put(`${API_URL}/user`, user, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};