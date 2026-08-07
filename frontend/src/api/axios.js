import axios from "axios";

// const api = axios.create ({ baseURL: "http://localhost:3000/api",
//     headers: {"Content-Type" : "application/json"}
// });

// api.interceptors.request.use((config) => {      Leaving out incase i dont get to do authorization token
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: { 'Content-Type': 'application/json' }
});

export default api;