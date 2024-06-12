import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

const loginUser = async (username, password) => {
    try {
        const response = await axiosInstance.post('/api/login', {
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
        const response = await axiosInstance.get('/api/debts', {
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
