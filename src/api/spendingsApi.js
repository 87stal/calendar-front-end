import axios from 'axios';
axios.defaults.baseURL = 'https://calendarfinance1.herokuapp.com';

export const authToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// AUTH
export const signup = contact => {
  return axios.post('/api/users/auth/register', contact).then(({ data }) => data);
};

// AUTH
export const login = contact => {
  return axios.post('/api/users/auth/login', contact).then(({ data }) => data);
};

// AUTH
export const logout = () => {
  return axios.post('/api/users/auth/logout').then(({ data }) => data);
};

// AUTH
// export const getUser = () => {
//   return axios.get('/users/current').then(({ data }) => data);
// };

// SPENDINGS
export const getByDate = () => {
  return axios.get('/api/financeentries/:financeEntryDate').then(({ data }) => data);
};

// SPENDINGS
export const addEntry =  entry => {
  return axios.post('/api/financeentries', entry).then(({ data }) => data);
};

// SPENDINGS
export const deleteSpending = id => {
  return axios.delete(`/api/financeentries/${id}`).then(({ data }) => data);
};

// SPENDINGS
export const updateSpending = id => {
  return axios.path(`/api/financeentries/${id}`).then(({ data }) => data);
};