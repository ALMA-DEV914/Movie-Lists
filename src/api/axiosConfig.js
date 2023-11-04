import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    "localhost-skip-browser-warning": "true"
  }
});

export default instance;
