import axios from 'axios';

const api = axios.create({
    baseURL: 'https://65b040cb2f26c3f2139ca666.mockapi.io/',
    headers: { 'Content-Type': 'application/json' },
});

export default api;