import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth, setAuth0User } from '../../authSlice';
import { useAuth0 } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated: isAuth0Authenticated, user: auth0User, isLoading: auth0Loading } = useAuth0();

  useEffect(() => {
    // Check if user is already authenticated on app load
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    // Handle Auth0 authentication
    if (isAuth0Authenticated && auth0User && !auth0Loading) {
      dispatch(setAuth0User(auth0User));
    }
  }, [isAuth0Authenticated, auth0User, auth0Loading, dispatch]);

  return children;
};

export default AuthProvider;
