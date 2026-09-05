import { useState } from 'react';
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import PawLogo from './PawLogo';
import './Auth.css';

export default function Login() {
  const { login, error } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const success = await login(formData);
    setSubmitting(false);
    if (success) navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <PawLogo />
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Sign in to manage appointments and patients.</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
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
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="auth-button" type="submit" disabled={submitting}>
            {submitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}
