import axios from "axios";

const api = axios.create ({ baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    headers: {"Content-Type" : "application/json"}
});

api.interceptors.request.use((config) => {      
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const registerUser = async (formData) => {
  const { data } = await api.post('/auth/register', formData);
  return data; // { user, token }
};

export const loginUser = async (formData) => {
  const { data } = await api.post('/auth/login', formData);
  return data; // { user, token }
};

export const fetchCurrentUser = async () => {
  const { data } = await api.get('/auth/me');
  return data.user;
};


export default api;

// const api = axios.create({
//   baseURL: 'http://localhost:3000/api', 
//   headers: { 'Content-Type': 'application/json' }
// });

// export default api;