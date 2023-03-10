import axios from 'axios';

const api = axios.create({
  baseURL: 'https://atendevet-api.azurewebsites.net/api',
});

export { api };