import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = localStorage.getItem('token');

  // If token exists, render child routes; otherwise redirect to /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}