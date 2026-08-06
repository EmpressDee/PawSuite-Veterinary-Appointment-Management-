import api from './axios.js';

export const getAppointments = (start, end) =>
  api.get(`/appointments?start=${start}&end=${end}`);

export const getAppointmentById = (id) =>
  api.get(`/appointments/${id}`);

export const createAppointment = (data) =>
  api.post('/appointments', data);

export const updateAppointment = (id, data) =>
  api.put(`/appointments/${id}`, data);

export const deleteAppointment = (id) =>
  api.delete(`/appointments/${id}`);