import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set) => ({
  user: null,
  accessToken: typeof window !== 'undefined' ? localStorage.getItem('access_token') : '',
  refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refresh_token') : '',
  authorized: false,
  setUser: (user, accessToken, refreshToken) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
    }
    set({ user, accessToken, refreshToken, authorized: true });
  },
  setAccessToken: (accessToken) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', accessToken);
    }
    set({ accessToken });
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
    set({ user: null, accessToken: null, refreshToken: null, authorized: false });
  },
  refreshAccessToken: async () => {
    let refreshToken;
    if (typeof window !== 'undefined') {
      refreshToken = localStorage.getItem('refresh_token');
    }
    if (!refreshToken) return null;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/client/v1/user/refresh`,
        { refresh_token: refreshToken },
      );
      const { access_token, refresh_token } = response.data;

      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
      }
      set({ accessToken: access_token, refreshToken: refresh_token });
      return access_token;
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      set({ user: null, accessToken: null, refreshToken: null, authorized: false });
      return null;
    }
  },
}));

export default useUserStore;
