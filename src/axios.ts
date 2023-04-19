import axios from 'axios';

// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.baseURL = 'http://lk.hr-plus.ru/api';