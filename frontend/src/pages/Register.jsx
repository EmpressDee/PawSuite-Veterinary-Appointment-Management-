import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext"
import PawLogo from "./PawLogo";
import './Auth.css';

export default function Register() {
  const { register, error } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "vet_tech",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const success = await register(formData);
    setSubmitting(false);
    if (success) navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <PawLogo />
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Set up access to the clinic's appointment system.</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label" htmlFor="name">Full name</label>
          <input
            className="auth-input"
            id="name"
            name="name"
            type="text"
            placeholder="First Last"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="auth-label" htmlFor="email">Email</label>
          <input
            className="auth-input"
            id="email"
            name="email"
            type="email"
            placeholder="you@clinic.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="auth-label" htmlFor="password">Password</label>
          <input
            className="auth-input"
            id="password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          <label className="auth-label" htmlFor="role">Role</label>
          <select
            className="auth-input auth-select"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="vet_tech">Veterinary Technician</option>
            <option value="vet">Veterinarian</option>
            <option value="admin">Admin</option>
            <option value="care_cord">Care Coordinator</option>
            <option value="vet_assist">Veterinary Assistant</option>
          </select>

          <button className="auth-button" type="submit" disabled={submitting}>
            {submitting ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
