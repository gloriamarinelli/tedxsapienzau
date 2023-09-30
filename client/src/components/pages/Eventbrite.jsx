import React, { useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function Eventbrite() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  const submitHandle = async (event) => {
    event.preventDefault();

    let domain = email.split("@")[1];

    if (domain === "studenti.uniroma1.it" || domain === "uniroma1.it") {
      try {
        const response = await axios.post(
          global.CONNECTION.ENDPOINT + "eventbrite",
          {
            email,
            nome,
            cognome,
          }
        );

        console.log(response);
        event.target.reset();

        setFormSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Email non valida");
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
        <form style={{ width: "50%" }} onSubmit={submitHandle}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email:</label>
            <input
              className="mb-4"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />

            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mb-4"
            />

            <label htmlFor="cognome">Cognome:</label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
              className="mb-4"
            />

            <Button type="submit" className="button" style={{ width: "100%" }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
