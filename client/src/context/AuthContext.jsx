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
      // Accept both shapes: { user: {...}, token } or flat { _id, name, email, isAdmin, token }
      if (userData?.token) {
        const userObj = userData.user || {
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          isAdmin: userData.isAdmin,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        localStorage.setItem("token", userData.token);
        setUser(userObj);
      }
    } catch (err) {
      console.error("Failed to save user data", err);
    }
  };

  const updateUser = (updated) => {
    try {
      const userObj = { ...user, ...updated };
      localStorage.setItem('user', JSON.stringify(userObj));
      setUser(userObj);
    } catch (err) {
      console.error('Failed to update user', err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
