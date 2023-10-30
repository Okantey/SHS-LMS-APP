import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [subject, setSubject] = useState("");
  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, subject, setSubject }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
