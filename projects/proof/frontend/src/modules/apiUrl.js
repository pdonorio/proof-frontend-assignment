export const BASE = 'http://localhost:8080/';
const AUTH = 'auth';

const URL = {
  LOGIN: `${BASE}${AUTH}/login`,
  SIGNUP: `${BASE}${AUTH}/profile`,
  ACTIVATE: `${BASE}${AUTH}/profile/activate/`,
};

export default URL;
