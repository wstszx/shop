import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Implement actual authentication logic here
    if (credentials.email === 'admin@example.com' && credentials.password === 'admin') {
      setIsAdmin(true);
      setUser({ email: credentials.email, role: 'admin' });
    }
  };

  const logout = () => {
    setIsAdmin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);