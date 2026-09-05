import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

// Wrap any route element: <Route path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p className="auth-loading">Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
