import axios from 'axios';

export const customAxios = axios.create({
    // baseURL: "https://fashion-store-c48a2-default-rtdb.firebaseio.com/",
    baseURL: "https://fashion-43836-default-rtdb.firebaseio.com/",
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
});


