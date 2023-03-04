import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";

export default function Join() {
  const state = useLocation().state;
  const [windowSize, setWindowSize] = useOutletContext();
  const [cat, setCat] = useState(state?.cat || "");

  /*
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
  */

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
            height: "40vh",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
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

        {/* JOIN STUDENT */}
        <div className="container marketing">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei uno studente interessato al progetto?</h3>
              <form /*onSubmit={submitHandle}*/>
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
            <div className="col-md-5 order-md-1 d-flex">
              <img
                src="https://static.vecteezy.com/ti/vettori-gratis/t1/3592464-un-unico-disegno-di-lavoratori-e-donne-seduti-nella-sala-riunioni-insieme-e-discutere-durante-l-ora-di-pranzo-concetto-aziendale-continuo-disegno-linea-disegno-illustrazione-grafica-vettoriale.jpg"
                alt="JoinStudent"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          {/* JOIN PARTNER */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
              <form /*onSubmit={submitHandle1}*/>
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
            <div className="col-5 order-md-2">
              <img
                src="https://img.freepik.com/premium-vector/businessmen-shaking-hands-continuous-line-drawing-business-people-meeting-handshake-partner-collaboration-partnership-vector-concept-man-having-deal-agreement-business-signing-contract_102902-3255.jpg"
                alt="Join Partner"
                height="300px"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          {/* JOIN ADVISE */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>
                Hai uno{" "}
                <select>
                  <option value="1">Speaker</option>
                  <option value="2">Sponsor</option>
                </select>{" "}
                da consigliarci?
              </h3>

              <form /*onSubmit={submitHandle1}*/>
                <div style={{ display: "flex", flexDirection: "column" }}>
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
                    Contatto
                  </label>
                  <input
                    type="text"
                    id="contatto"
                    name="contatto"
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
            <div className="col-md-5 order-md-1 d-flex">
              <img
                src="https://static.vecteezy.com/ti/gratis-vektor/p3/3592505-ein-einzellinien-zeichnung-von-jung-weiblichen-moderatorin-denken-wahrend-der-arbeit-prasentation-im-buro-wahrend-meeting-arbeit-prasentationskonzept-kontinuierliche-linie-zeichnen-grafikdesign-illustration-vektor.jpg"
                height="350px"
              />
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

        {/* JOIN STUDENT */}
        <div className="container marketing">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei uno studente interessato al progetto?</h3>
              <form /*onSubmit={submitHandle}*/>
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
          </div>

          <hr className="featurette-divider"></hr>

          {/* JOIN PARTNER */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
              <form /*onSubmit={submitHandle1}*/>
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
          </div>

          <hr className="featurette-divider"></hr>

          {/* JOIN ADVISE */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>
                Hai uno{" "}
                <select>
                  <option value="1">Speaker</option>
                  <option value="2">Sponsor</option>
                </select>{" "}
                da consigliarci?
              </h3>

              <form /*onSubmit={submitHandle1}*/>
                <div style={{ display: "flex", flexDirection: "column" }}>
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
                    Contatto
                  </label>
                  <input
                    type="text"
                    id="contatto"
                    name="contatto"
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
          </div>
        </div>
      </>
    );
  }
}
