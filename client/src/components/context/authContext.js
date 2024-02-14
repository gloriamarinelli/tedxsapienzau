import { createContext, useState, useEffect } from "react";
import global from "../../resources/global.json";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [currentToken, setCurrentToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(currentToken));
  }, [currentToken]);

  const login = async (inputs) => {
    return new Promise((res, rej) => {
      axios
        .post(global.CONNECTION.ENDPOINT + "auth/login", inputs)
        .then((result) => {
          setCurrentUser(result.data.userData);
          setCurrentToken(result.data.token);
          res(result);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  const logout = async (inputs) => {
    await axios.post(global.CONNECTION.ENDPOINT + "auth/logout");
    setCurrentUser(null);
    setCurrentToken(null);
    window.location.href = "/";
  };

  const isUserLoggedIn = async (token) => {
    return new Promise((res, rej) => {
      axios
        .post(global.CONNECTION.ENDPOINT + "auth/isUserLoggedIn", {
          headers: {
            "x-auth-token": token,
          },
        })
        .then((result) => {
          res(result);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, currentToken, login, logout, isUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
