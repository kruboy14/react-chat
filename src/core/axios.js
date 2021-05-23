import axios from 'axios';

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common['token'] = window.localStorage.mytoken;

window.axios = axios;

export default axios;
