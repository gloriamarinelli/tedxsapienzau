import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import axios from "axios";

export default function Join() {
  const state = useLocation().state;
  const [windowSize, setWindowSize] = useOutletContext();
  const [cat, setCat] = useState(state?.cat || "");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitStudent = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const nome = event.target.nome.value;
    const cognome = event.target.cognome.value;
    const interesse = event.target.interesse.value;

    axios
      .post(global.CONNECTION.ENDPOINT + "join/student", {
        email,
        nome,
        cognome,
        contenuto: interesse,
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitPartner = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const nome = event.target.nome.value;
    const telefono = event.target.telefono.value;
    const messaggio = event.target.messaggio.value;

    axios
      .post(global.CONNECTION.ENDPOINT + "join/partner", {
        email,
        nome,
        telefono,
        contenuto: messaggio,
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitAdvise = (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const contatto = event.target.contatto.value;
    const messaggio = event.target.messaggio.value;

    axios
      .post(global.CONNECTION.ENDPOINT + "join/advise", {
        nome,
        telefono: contatto,
        contenuto: messaggio,
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (formSubmitted) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          opacity: formSubmitted ? 1 : 0,
          transition: "all 0.5s ease-in-out",
        }}
      >
        <img
          src="/images/logo-black.png"
          width="50%"
          style={{ minWidth: "350px" }}
          alt="TEDxSapienzaU"
        />
        <p
          style={{
            fontSize: windowSize > 992 ? "35px" : "25px",
            maxWidth: "20ch",
            textAlign: "center",
          }}
        >
          Grazie per averci contattato
        </p>
        <Link
          to="/"
          style={{
            padding: "10px 20px",
            backgroundColor: global.COLORS.ROSSO_TED,
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Torna alla home
        </Link>
      </div>
    );
  }

  if (windowSize > 992) {
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
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5 text-center"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            Entra anche tu a far parte del team TEDxSapienzaU!
          </h1>
        </div>

        <div className="container-lg marketing">
          <h3
            className="title"
            style={{
              fontSize: "30px",
              textAlign: "justify",
              fontFamily: "GothamBold",
              marginBottom: "30px",
            }}
          >
            Le candidature per far parte del team sono chiuse, ma non per
            sempre.<br></br> Compila il form qui sotto per essere contattato
            quando riapriremo le candidature!
          </h3>
        </div>

        {/* JOIN STUDENT */}
        <div className="container marketing">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei uno studente interessato al progetto?</h3>
              <form onSubmit={handleSubmitStudent}>
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
          </div>{" "}
          <hr className="featurette-divider"></hr>
          {/* JOIN PARTNER */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
              <form onSubmit={handleSubmitPartner}>
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
          {/* JOIN ADVISE */}
          {/*
					<hr className="featurette-divider"></hr> <div className="row featurette">
						<div className="col-md-7 order-md-2">
							<h3>
								Hai uno{" "}
								<select>
									<option value="1">Speaker</option>
									<option value="2">Sponsor</option>
								</select>{" "}
								da consigliarci?
							</h3>

							<form onSubmit={handleSubmitAdvise}>
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
								alt="Join Advise"
							/>
						</div>
					</div> */}
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
          className="gradient-background mb-5 "
          style={{
            backgroundColor: "red",
            padding: "30px",
            textAlign: "left",
            display: "grid",
            color: "#fff",
            height: "30vh",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="mt-5 mb-5"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              maxWidth: "15ch",
              textAlign: "center",
            }}
          >
            Entra anche tu a far parte del team TEDxSapienzaU!
          </h1>
        </div>

        <div className="container-lg marketing">
          <h3
            className="title"
            style={{
              fontSize: "20px",
              textAlign: "center",
              fontFamily: "GothamBold",
              marginBottom: "10px",
            }}
          >
            Le candidature per far parte del team sono chiuse, ma non per
            sempre.<br></br> Compila il form qui sotto per essere contattato
            quando riapriremo le candidature!
          </h3>
        </div>

        {/* JOIN STUDENT */}
        <div className="container marketing">
          <div className="row featurette">
            <div className="col">
              <h3>Sei uno studente interessato al progetto?</h3>
              <form onSubmit={handleSubmitStudent}>
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
          </div>{" "}
          <hr className="featurette-divider"></hr>
          {/* JOIN PARTNER */}
          <div className="row featurette">
            <div className="col">
              <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
              <form onSubmit={handleSubmitPartner}>
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
          {/* JOIN ADVISE */}
          {/* <hr className="featurette-divider"></hr><div className="row featurette">
						<div className="col">
							<h3>
								Hai uno{" "}
								<select>
									<option value="1">Speaker</option>
									<option value="2">Sponsor</option>
								</select>{" "}
								da consigliarci?
							</h3>

							<form onSubmit={handleSubmitAdvise}>
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
					</div> */}
        </div>
      </>
    );
  }
}
