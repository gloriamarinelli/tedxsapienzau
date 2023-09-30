import React, { useRef } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function Eventbrite() {
  const [windowSize, setWindowSize] = useOutletContext();

  const inputRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault();
    let email = inputRef.current.value;
    let domain = email.split("@")[1];

    if (domain === "studenti.uniroma1.it" || domain === "uniroma1.it") {
      axios
        .post(global.CONNECTION.ENDPOINT + "newsletter", {
          email,
        })
        .then((response) => {
          console.log(response);
          inputRef.current.value = "";
          inputRef.current.style.borderColor = "green";
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      inputRef.current.style.borderColor = "red";
    }
  };

  return (
    <>
      <div
        className="gradient-background"
        style={{
          backgroundColor: "red",
          textAlign: "left",
          display: "grid",
          height: "20vh",
          color: "#fff",
          placeItems: "center",
        }}
      ></div>

      <div
        style={{
          width: "50%",
          alignItems: "center",
          backgroundColor: "lightgrey",
        }}
        className="login-container"
      >
        <form style={{ width: "50%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email:</label>
            <input
              className="mb-4"
              type="text"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></input>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" className="mb-4" />
            <label htmlFor="cognome">Cognome:</label>
            <input type="text" id="cognome" name="cognome" className="mb-4" />
            <button
              type="submit"
              onClick={submitHandle}
              className="button"
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
