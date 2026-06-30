import { create } from 'zustand';
import { User } from '../types';
import api from './api';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  initialize: () => Promise<void>;
  updateUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const data = await api.login(email, password);
      const user = data.user as User;
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      set({ user, isAuthenticated: true, isLoading: false });
      return user;
    } catch (err: any) {
      const errMsg = err.response?.data?.detail || 'Invalid email or password';
      set({ error: errMsg, isLoading: false });
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false, error: null });
  },

  initialize: async () => {
    set({ isLoading: true });
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as User;
        // Verify user with backend if possible, or just trust localStorage
        const latestUser = await api.getUser(user.user_id);
        localStorage.setItem('user', JSON.stringify(latestUser));
        set({ user: latestUser, isAuthenticated: true, isLoading: false });
      } catch (err) {
        localStorage.removeItem('user');
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      set({ isLoading: false });
    }
  },

  updateUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  }
}));
export default useAuthStore;
