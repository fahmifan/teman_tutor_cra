import axios from 'axios';

const conn = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
})

export default conn;