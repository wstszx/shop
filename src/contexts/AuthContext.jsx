import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
    isAdmin: user?.role === 'admin',
    isAuthenticated: !!user,
    login: (userData) => {
      setUser(userData);
    },
    logout: () => {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}