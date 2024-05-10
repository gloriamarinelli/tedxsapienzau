import React, { useState, useContext, useEffect } from "react";
import "../../resources/styles/loginstyle.css";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";
import { redirect } from "react-router-dom";
import Image from "../images/logo-black.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const { currentUser } = useContext(AuthContext);
  const { logout, isUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === "null"
    ) {
      return;
    } else {
      const checkIsUserLoggedIn = async () => {
        const status = await isUserLoggedIn(localStorage.getItem("token"));
        return status;
      };

      let status = checkIsUserLoggedIn().catch((err) => logout());
      status.then((res) => {
        if (res.status === 200) {
          console.log(res);
        } else {
          logout();
        }
      });
    }
  }, []);

  return (
    <div
      style={{
        height: "800px",
      }}
      className="login-main-container"
    >
      <div className="login-container">
        <LazyLoadImage src={Image} alt="logo" width="" height="50" />
        <h1
          className="mb-4 mt-4"
          style={{
            fontFamily: "GothamBold",
            textAlign: "center",
          }}
        >
          {currentUser ? `Benvenuto, ${currentUser.username}` : "LOGIN"}
        </h1>
        {currentUser ? <div style={{ width: "80%" }}></div> : LoginForm()}
      </div>
    </div>
  );
}

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const errorMessageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ username: username, password: password })
      .then((res) => {
        console.log(res);
        window.location.href = "/write";
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err);
        errorMessageRef.current.classList.remove("error-animation");
        void errorMessageRef.current.offsetWidth;
        errorMessageRef.current.classList.add("error-animation");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="mb-4"
            placeholder=""
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="mb-5"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="button" style={{ width: "100%" }}>
            Login
          </button>
          <span
            className="error-message error-animation mt-3"
            ref={errorMessageRef}
            style={{ display: error ? "initial" : "none" }}
          >
            <FontAwesomeIcon icon={faCircleXmark} /> {error}
          </span>
        </div>
      </form>
    </>
  );
};
