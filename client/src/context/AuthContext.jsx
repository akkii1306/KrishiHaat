import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const local = localStorage.getItem("user");
      if (local && local !== "undefined") {
        return JSON.parse(local);
      }
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
      localStorage.removeItem("user");
    }
    return null;
  });

  const login = (userData) => {
    try {
      if (userData?.user && userData?.token) {
        localStorage.setItem("user", JSON.stringify(userData.user));
        localStorage.setItem("token", userData.token);
        setUser(userData.user);
      }
    } catch (err) {
      console.error("Failed to save user data", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
