import React, { useEffect } from "react";
import Image from "../images/Get involved in TEDxSapienzaU.png";
import Image1 from "../images/Work with TEDxSapienzaU.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import axios from "axios";

export default function Join() {
  const [windowSize, setWindowSize] = useOutletContext();

  const submitHandle = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const nome = event.target.nome.value;
    const cognome = event.target.cognome.value;
    const interesse = event.target.interesse.value;

    axios
      .post("http://localhost:8800/join", {
        email,
        nome,
        cognome,
        interesse,
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandle1 = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const nome = event.target.nome.value;
    const telefono = event.target.telefono.value;
    const messaggio = event.target.messaggio.value;

    axios
      .post("http://localhost:8800/join1", {
        email,
        nome,
        telefono,
        messaggio,
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div
          className="gradient-background"
          style={{
            backgroundColor: "red",
            textAlign: "left",
            display: "grid",
            height: "100",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "40vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            Entra a far parte anche tu del team TEDxSapienzaU!
          </h1>
        </div>

        <div className="container marketing">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei uno studente interessato al progetto?</h3>
              <form onSubmit={submitHandle}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Indirizzo email istituzionale*
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="form-control mx-1 col-9"
                  ></input>

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nome*
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="form-control mx-1 col-9"
                  ></input>

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Cognome*
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    required
                    className="form-control mx-1 col-9"
                  ></input>

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Descrivici il tuo interesse
                  </label>
                  <input
                    type="text"
                    id="interesse"
                    name="interesse"
                    className="form-control mx-1 col-9"
                  ></input>
                </div>

                <button
                  type="submit"
                  className="btn mt-3"
                  style={{
                    backgroundColor: "rgb(235, 0, 40)",
                    color: "white",
                  }}
                >
                  Invia
                </button>
              </form>
            </div>
            <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
              <LazyLoadImage src={Image} alt="Student" width="" height="100" />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
              <form onSubmit={submitHandle1}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Indirizzo email*
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="form-control mx-1 col-9"
                  ></input>

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nome*
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="form-control mx-1 col-9"
                  ></input>

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Telefono*
                  </label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    required
                    className="form-control mx-1 col-9"
                  ></input>

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Messaggio
                  </label>
                  <input
                    type="text"
                    id="messaggio"
                    name="messaggio"              
                    className="form-control mx-1 col-9"
                  ></input>
                </div>

                <button
                  type="submit"
                  className="btn mt-3 mb-3"
                  style={{
                    backgroundColor: "rgb(235, 0, 40)",
                    color: "white",
                  }}
                >
                  Invia
                </button>
              </form>
            </div>
            <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center mb-5">
              <LazyLoadImage src={Image1} alt="Work" width="" height="100" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="gradient-background mb-5"
          style={{
            backgroundColor: "red",
            textAlign: "left",
            display: "grid",
            height: "100",
            color: "#fff",
            height: "40vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="mt-5 mb-5"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              maxWidth: "15ch",
              textAlign: "center",
            }}
          >
            Entra a far parte anche tu del team TEDxSapienzaU!
          </h1>
        </div>

        <div className="container marketing">
          <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center mb-3">
            <LazyLoadImage src={Image} alt="Student" width="" height="100" />
          </div>
          <div className="row featurette mb-5">
            <div className="col-md-7 order-md-2">
              <h3>Sei uno studente interessato al progetto?</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Indirizzo email istituzionale
                  </label>
                  <required>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nome
                  </label>
                  <required>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Cognome
                  </label>
                  <required>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Descrivici il tuo interesse
                  </label>
                  <required>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "rgb(235, 0, 40)",
                    color: "white",
                  }}
                >
                  Invia
                </button>
              </form>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette mt-5">
            <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center mb-3">
              <LazyLoadImage src={Image1} alt="Work" width="" height="100" />
            </div>
            <div className="col-md-7 order-md-2">
              <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
              <form>
                <div className="mb-10">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Indirizzo email
                  </label>
                  <required>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nome
                  </label>
                  <required>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Telefono
                  </label>
                  <required>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Messaggio
                  </label>
                  <required>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </required>
                </div>

                <button
                  type="submit"
                  className="btn mt-3 mb-3"
                  style={{
                    backgroundColor: "rgb(235, 0, 40)",
                    color: "white",
                  }}
                >
                  Invia
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
