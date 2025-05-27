import { createContext, useState, useEffect } from "react";

const getStoredUser = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = localStorage.getItem("cinemahubUser");
    return stored ? JSON.parse(stored) : null;
  }
  return null;
};

const storeUser = (user) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("cinemahubUser", JSON.stringify(user));
  }
};

const clearStoredUser = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem("cinemahubUser");
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser());

  useEffect(() => {
    if (user) {
      storeUser(user);
    } else {
      clearStoredUser();
    }
  }, [user]);

  const signup = (email, password) => {
    const newUser = { email, password };
    setUser(newUser);
    return true;
  };

  const login = (email, password) => {
    const stored = getStoredUser();
    if (stored && stored.email === email && stored.password === password) {
      setUser(stored);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
