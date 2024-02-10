

import axios from 'axios';

const createApi  = async () => {
    const api = axios.create({
        baseURL: 'http://192.168.8.100:8000',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return api;
}

export default createApi;