import axios from 'axios';
const token = localStorage.getItem('Token')
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 90000, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization':   `Bearer ${token}`
  }
});
export default instance;
