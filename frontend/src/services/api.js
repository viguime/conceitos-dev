import axios from 'axios';

const api = axios.create({
    bse_url:'http://localhost:3333'
})

export default api;