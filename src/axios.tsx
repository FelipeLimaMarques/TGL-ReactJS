import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tgl-lottery-default-rtdb.firebaseio.com/'
});

export default instance;