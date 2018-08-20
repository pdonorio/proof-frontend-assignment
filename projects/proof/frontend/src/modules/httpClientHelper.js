import axios from 'axios';
import { BASE } from './apiUrl';

export default axios.create({
  baseURL: BASE,
});
