import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  timeout: 1000,
  params: {
    key: process.env.KEY_WEATHERAPI,
  },
  headers: { 'X-Custom-Header': 'foobar' },
});

export { api };
