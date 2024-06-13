import axios from 'axios';
import { logout } from '../slices/authSlice';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

const loginUser = async (username, password) => {
    try {
        const response = await api.post('/api/login', { 
            username,
            password,
        });
        console.log('Login response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error; 
    }
};

const fetchDebts = async () => {
    const token = localStorage.getItem('accessToken');

    try {
        const response = await api.get('/api/debts', { // Use `api` instead of `axiosInstance`
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Debts:', response.data);
        return response.data;
    } catch (error) {
        console.error('Fetch debts error:', error);
        throw error;
    }
};


export { loginUser, fetchDebts };