import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setUser, logout } from '../store/slices/authSlice';
import { User } from '../types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const login = (userData: User) => {
    dispatch(setUser(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout: handleLogout,
  };
};