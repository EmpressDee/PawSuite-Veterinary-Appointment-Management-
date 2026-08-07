# PawSuite Appointment Manager

A full-stack MERN application for managing veterinary clinic appointments. View this week's schedule, search clients and pets, and click into any appointment for full pet and client details.

## Features

- **Week view homepage** — see all appointments at a glance
- **Search** — filter appointments by client or pet name in real time
- **Appointment detail page** — click any appointment to see full pet and client info
- **Client and pet directories** — browse full lists independently
- **Full CRUD** on Clients, Pets, and Appointments via a REST API
- **Centralized error handling** on the backend for consistent API error responses

## Tech Stack

**Frontend:** React (Vite), React Router, Axios, CSS
**Backend:** Node.js, Express, Mongoose
**Database:** MongoDB (Atlas)

## Getting Started

### Prerequisites
- Node.js installed
- A MongoDB Atlas cluster (or local MongoDB instance)

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:
```
MONGO_URI=your_mongodb_connection_string
```

Run the server:
```bash
npm run dev
```
Server runs on `http://localhost:3000`.

Populates the database with sample clients, pets, and appointments for testing.

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
App runs on `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/clients` | Get all clients |
| GET | `/api/clients/:id` | Get one client |
| POST | `/api/clients` | Create a client |
| PUT | `/api/clients/:id` | Update a client |
| DELETE | `/api/clients/:id` | Delete a client |
| GET | `/api/pets` | Get all pets |
| GET | `/api/pets/:id` | Get one pet |
| POST | `/api/pets` | Create a pet |
| PUT | `/api/pets/:id` | Update a pet |
| DELETE | `/api/pets/:id` | Delete a pet |
| GET | `/api/appointments` | Get all appointments (supports `?start=&end=` date filtering) |
| GET | `/api/appointments/:id` | Get one appointment (populated with pet + client) |
| POST | `/api/appointments` | Create an appointment |
| PUT | `/api/appointments/:id` | Update an appointment |
| DELETE | `/api/appointments/:id` | Delete an appointment