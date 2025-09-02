import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AdminRoute = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Check if user is authenticated and has admin role
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
