import axios from 'axios';

const api = axios.create({
    baseURL: '../db.json'
});

export default api;