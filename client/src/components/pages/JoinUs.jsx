import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import arrow from "../images/arrow.png";
import arrowmiddle from "../images/arrowmiddle.png";
import volunteers from "../images/volunteers.webp";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function JoinUs() {
  const state = useLocation().state;
  const [windowSize, setWindowSize] = useOutletContext();
  const [cat, setCat] = useState(state?.cat || "");

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <section
          style={{
            marginTop: global.UTILS.NAV_HEIGHT,
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5 text-center"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "Fira Sans Extra Condensed",
              color: "#fff",
            }}
          >
            Entra anche tu a far parte del team TEDxSapienzaU!
          </h1>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: "95%",
              height: "100px",
              margin: "auto",
              padding: "30px",
              backgroundImage: `url(${volunteers})`,
              backgroundSize: "cover",
              backgroundPosition: "0px -30px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: "95%",
              margin: "auto",
              padding: "30px",
              marginTop: "50px",
            }}
          >
            <div className="container-lg marketing">
              <h3
                className="title"
                style={{
                  fontSize: "50px",
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "30px",
                  color: "#eb0028",
                }}
              >
                Come candidarsi{" "}
              </h3>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Entra a far parte di questo progetto pieno di stimoli e
                opportunità di crescita. Non vediamo l'ora di leggere la tua
                storia!
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Se verrai selezionato, farai parte del team TEDxSapienzaU per le
                attività degli anni 2024 e 2025, con inserimento immediato.
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Le candidature sono rivolte a tutti gli studenti{" "}
                <strong>regolarmente iscritti </strong> ad un{" "}
                <i>
                  corso di laurea, laurea magistrale, master, dottorato o scuola
                  di specializzazione{" "}
                </i>
                <strong>presso l'ateneo Sapienza Università di Roma</strong> e
                si chiuderanno il giorno{" "}
                <strong> 07/10/2024 alle ore 23:59</strong>.
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Compila il <strong>form </strong> per unirti a noi!
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                <strong>
                  L'esito della candidatura verrà comunicato tramite email
                  istituzionale.
                </strong>
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Per{" "}
                <strong>
                  <u>eventuali dubbi o approfondimenti</u>
                </strong>{" "}
                potete contattarci inviando una mail a:{" "}
                <a
                  className="font-weight-light mt-3 mb-4"
                  style={{
                    fontFamily: "Fira Sans Extra Condensed",
                    color: "#eb0028",
                  }}
                  href="mailto:info@tedxsapienzau.com"
                >
                  info@tedxsapienzau.com
                </a>
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  className="btn-volunteers"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                    textDecoration: "none",
                    fontFamily: "Fira Sans Extra Condensed",
                    color: "#eb0028",
                    marginTop: "40px",
                    width: "30%",
                  }}
                  href="https://forms.gle/DZdG1DosyGdkV2ZQ7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Candidati!
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: "95%",
              margin: "auto",
              padding: "10px",
              marginTop: "50px",
            }}
          >
            <div>
              <h1
                className="title"
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "80px",
                  color: "#eb0028",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Descrizione dei team
              </h1>
            </div>

            <div
              className="container-lg mt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#f089b7",
                    }}
                  >
                    External Relations & Sponsorship
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team External Relations & Sponsorship si occupa di
                    gestire ogni aspetto legato a sponsorizzazioni, partnership,
                    patrocini e bandi pubblici. Quindi a partire dalla ricerca
                    di aziende, startup, PMI, media, associazioni, enti ed
                    istituzioni, fino alla firma di accordi e contratti, con un
                    focus sulla gestione del rapporto in tutte le sue fasi, al
                    fine di dar vita ad una collaborazione win-win. Il
                    TEDxSapienzaU è un'organizzazione no-profit e questi fondi
                    servono interamente a finanziare la realizzazione del
                    progetto.
                  </p>
                </div>
                <div class="image-top-right">
                  <LazyLoadImage
                    src={arrow}
                    alt="cover edizione 2023"
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "cover",
                      marginBottom: "50px",
                    }}
                  />
                </div>

                <div class="text-bottom-right-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#bb5c9e",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Planning & Event Management
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team Planning and Event Management si occupa della
                    pianificazione e della gestione di vari aspetti
                    dell’organizzazione. Nel concreto si occupa della richiesta
                    dei preventivi alle aziende, della ricerca degli spazi per
                    le conferenze e per gli eventi con gli sponsor, della
                    promozione di essi tramite giornate dedicate agli studenti
                    Sapienza. In sostanza, quindi, si occupa dell'ideazione,
                    della progettazione e dello sviluppo dei vari eventi firmati
                    TEDxSapienzaU.
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#95c459",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Speakers & Event Curation
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team Speakers & Event Curation si occupa delle proposte
                    dei temi per i vari eventi, della scelta degli speakers e
                    della cura dei loro dettagli burocratici (es. email e
                    contatti) e pratici (es. slides e speech). In generale,
                    quindi, si occupa a 360° del rapporto con gli speakers
                    affinché sia sempre presente una forte attenzione verso
                    tutte le loro necessità.
                  </p>
                </div>
                <div class="text-bottom-right-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#2884c7",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Human Resources & Academy
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team Human Resources & Academy si occupa della selezione
                    (es. costruzione e screening delle candidature, colloqui
                    conoscitivi) e della gestione dei membri dell'organizzazione
                    al fine di garantirne il benessere e di costruire un
                    ambiente creativo e produttivo. Inoltre si occupa della
                    formazione degli associati attraverso l'organizzazione di
                    masterclass create ed esposte da membri interni ed esterni.
                  </p>
                </div>
                <div class="image-top-right">
                  <LazyLoadImage
                    src={arrowmiddle}
                    alt="cover edizione 2023"
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "cover",
                      marginBottom: "50px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#f07e2a",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    IT & Website
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team IT & Website si occupa di garantire il corretto
                    funzionamento del{" "}
                    <a
                      href="https://www.tedxsapienzau.com/"
                      style={{ color: "#EB0028" }}
                    >
                      sito web
                    </a>{" "}
                    ufficiale sia lato front-end che lato back-end e gestisce la{" "}
                    <a
                      href="https://tedxsapienzauapp.vercel.app/"
                      style={{ color: "#EB0028" }}
                    >
                      {" "}
                      web app
                    </a>{" "}
                    ufficiale. Inoltre coordina la newsletter settimanale e cura
                    la progettazione grafica, l'identità visiva e i contenuti,
                    assicurando un'esperienza utente online ottimale. Infine,
                    sovrintende la regia tecnica durante tutti gli eventi
                    principali, svolgendo un ruolo di supporto a 360° in ambito
                    tecnologico.{" "}
                  </p>
                </div>

                <div class="text-bottom-right-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#e9493a",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Communication & Marketing
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il Team Communication & Marketing si occupa di curare
                    l’intera comunicazione del TEDxSapienzaU. In particolare si
                    occupa della costruzione e della pianificazione della
                    reputazione online, dell’awareness e di creare campagne ed
                    iniziative per coinvolgere il pubblico e le realtà che
                    supportano il progetto. Inoltre si occupa, nelle varie fasi
                    dell' evento, della stesura dei comunicati stampa, delle
                    newsletter e dell’email marketing. Ma anche di articoli per
                    il blog, sia interno che per nostri partner, come ad esempio
                    la rivista Millionaire. Infine si occupa della creazione di
                    contenuti visuali, fotografici e video affinché si dia ai
                    messaggi comunicati la maggior efficacia possibile.
                  </p>
                </div>
                <div class="image-top-right">
                  <LazyLoadImage
                    src={arrowmiddle}
                    alt="cover edizione 2023"
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "cover",
                      marginBottom: "50px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#21bcef",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Legal & Administrative
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {" "}
                    Il team Legal & Administrative cura gli aspetti giuridici e
                    amministrativi legati all'organizzazione degli eventi TED.
                    In particolare si occupa della stesura dei contratti, della
                    contabilità, della ricerca dei bandi per il recupero fondi,
                    del rispetto delle TEDx rules e delle linee guida
                    dell'Ateneo ed infine della tutela della privacy e del
                    diritto d'autore.
                  </p>
                </div>
                <div class="image-top-right">
                  <LazyLoadImage
                    src={arrowmiddle}
                    alt="cover edizione 2023"
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "cover",
                      marginBottom: "50px",
                    }}
                  />
                </div>
                <div class="text-bottom-right-aw">
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#fab732",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Design
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {" "}
                    Il team Design si occupa degli aspetti di progettazione
                    dell’evento. Nel dettaglio, lavora alla creazione di
                    un’identità visiva e grafica, allo sviluppo di prodotti e
                    all’ideazione degli allestimenti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <section
          style={{
            marginTop: global.UTILS.NAV_HEIGHT,
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5 text-center"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Fira Sans Extra Condensed",
              color: "#fff",
            }}
          >
            Entra anche tu a far parte del team TEDxSapienzaU!
          </h1>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: "90%",
              height: "100px",
              margin: "auto",
              padding: "30px",
              backgroundImage: `url(${volunteers})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: "90%",
              margin: "auto",
              padding: "5px",
              marginTop: "50px",
            }}
          >
            <div className="container-lg marketing">
              <h3
                className="title"
                style={{
                  fontSize: "50px",
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "30px",
                  color: "#eb0028",
                }}
              >
                Come candidarsi{" "}
              </h3>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Entra a far parte di questo progetto pieno di stimoli e
                opportunità di crescita. Non vediamo l'ora di leggere la tua
                storia!
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Se verrai selezionato, farai parte del team TEDxSapienzaU per le
                attività degli anni 2024 e 2025, con inserimento immediato.
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Le candidature sono rivolte a tutti gli studenti{" "}
                <strong>regolarmente iscritti </strong> ad un{" "}
                <i>
                  corso di laurea, laurea magistrale, master, dottorato o scuola
                  di specializzazione{" "}
                </i>
                <strong>presso l'ateneo Sapienza Università di Roma</strong> e
                si chiuderanno il giorno{" "}
                <strong> 07/10/2024 alle ore 23:59</strong>.
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Compila il <strong>form </strong> per unirti a noi!
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                <strong>
                  L'esito della candidatura verrà comunicato tramite email
                  istituzionale.
                </strong>
              </p>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
                }}
              >
                Per{" "}
                <strong>
                  <u>eventuali dubbi o approfondimenti</u>
                </strong>{" "}
                potete contattarci inviando una mail a:{" "}
                <a
                  className="font-weight-light mt-3 mb-4"
                  style={{
                    fontFamily: "Fira Sans Extra Condensed",
                    color: "#eb0028",
                  }}
                  href="mailto:info@tedxsapienzau.com"
                >
                  info@tedxsapienzau.com
                </a>
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  className="btn-volunteers"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                    textDecoration: "none",
                    fontFamily: "Fira Sans Extra Condensed",
                    color: "#eb0028",
                    marginTop: "40px",
                    width: "90%",
                  }}
                  href="https://forms.gle/DZdG1DosyGdkV2ZQ7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Candidati!
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: "90%",
              margin: "auto",
              padding: "5px",
              marginTop: "50px",
            }}
          >
            <div>
              <h1
                className="title"
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "80px",
                  color: "#eb0028",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Descrizione dei team
              </h1>
            </div>

            <div
              className="container-lg mt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ fontFamily: "Fira Sans Extra Condensed" }}>
                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#f089b7",
                    }}
                  >
                    External Relations & Sponsorship
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team External Relations & Sponsorship si occupa di
                    gestire ogni aspetto legato a sponsorizzazioni, partnership,
                    patrocini e bandi pubblici. Quindi a partire dalla ricerca
                    di aziende, startup, PMI, media, associazioni, enti ed
                    istituzioni, fino alla firma di accordi e contratti, con un
                    focus sulla gestione del rapporto in tutte le sue fasi, al
                    fine di dar vita ad una collaborazione win-win. Il
                    TEDxSapienzaU è un'organizzazione no-profit e questi fondi
                    servono interamente a finanziare la realizzazione del
                    progetto.
                  </p>
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#bb5c9e",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Planning & Event Management
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team Planning and Event Management si occupa della
                    pianificazione e della gestione di vari aspetti
                    dell’organizzazione. Nel concreto si occupa della richiesta
                    dei preventivi alle aziende, della ricerca degli spazi per
                    le conferenze e per gli eventi con gli sponsor, della
                    promozione di essi tramite giornate dedicate agli studenti
                    Sapienza. In sostanza, quindi, si occupa dell'ideazione,
                    della progettazione e dello sviluppo dei vari eventi firmati
                    TEDxSapienzaU.
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div style={{ fontFamily: "Fira Sans Extra Condensed" }}>
                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#95c459",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Speakers & Event Curation
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team Speakers & Event Curation si occupa delle proposte
                    dei temi per i vari eventi, della scelta degli speakers e
                    della cura dei loro dettagli burocratici (es. email e
                    contatti) e pratici (es. slides e speech). In generale,
                    quindi, si occupa a 360° del rapporto con gli speakers
                    affinché sia sempre presente una forte attenzione verso
                    tutte le loro necessità.
                  </p>
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#2884c7",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Human Resources & Academy
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team Human Resources & Academy si occupa della selezione
                    (es. costruzione e screening delle candidature, colloqui
                    conoscitivi) e della gestione dei membri dell'organizzazione
                    al fine di garantirne il benessere e di costruire un
                    ambiente creativo e produttivo. Inoltre si occupa della
                    formazione degli associati attraverso l'organizzazione di
                    masterclass create ed esposte da membri interni ed esterni.
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div style={{ fontFamily: "Fira Sans Extra Condensed" }}>
                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#f07e2a",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    IT & Website
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il team IT & Website si occupa di garantire il corretto
                    funzionamento del{" "}
                    <a
                      href="https://www.tedxsapienzau.com/"
                      style={{ color: "#EB0028" }}
                    >
                      sito web
                    </a>{" "}
                    ufficiale sia lato front-end che lato back-end e gestisce la{" "}
                    <a
                      href="https://tedxsapienzauapp.vercel.app/"
                      style={{ color: "#EB0028" }}
                    >
                      {" "}
                      web app
                    </a>{" "}
                    ufficiale. Inoltre coordina la newsletter settimanale e cura
                    la progettazione grafica, l'identità visiva e i contenuti,
                    assicurando un'esperienza utente online ottimale. Infine,
                    sovrintende la regia tecnica durante tutti gli eventi
                    principali, svolgendo un ruolo di supporto a 360° in ambito
                    tecnologico.{" "}
                  </p>
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#e9493a",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Communication & Marketing
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Il Team Communication & Marketing si occupa di curare
                    l’intera comunicazione del TEDxSapienzaU. In particolare si
                    occupa della costruzione e della pianificazione della
                    reputazione online, dell’awareness e di creare campagne ed
                    iniziative per coinvolgere il pubblico e le realtà che
                    supportano il progetto. Inoltre si occupa, nelle varie fasi
                    dell' evento, della stesura dei comunicati stampa, delle
                    newsletter e dell’email marketing. Ma anche di articoli per
                    il blog, sia interno che per nostri partner, come ad esempio
                    la rivista Millionaire. Infine si occupa della creazione di
                    contenuti visuali, fotografici e video affinché si dia ai
                    messaggi comunicati la maggior efficacia possibile.
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div style={{ fontFamily: "Fira Sans Extra Condensed" }}>
                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#21bcef",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Legal & Administrative
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {" "}
                    Il team Legal & Administrative cura gli aspetti giuridici e
                    amministrativi legati all'organizzazione degli eventi TED.
                    In particolare si occupa della stesura dei contratti, della
                    contabilità, della ricerca dei bandi per il recupero fondi,
                    del rispetto delle TEDx rules e delle linee guida
                    dell'Ateneo ed infine della tutela della privacy e del
                    diritto d'autore.
                  </p>
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#fab732",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Design
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {" "}
                    Il team Design si occupa degli aspetti di progettazione
                    dell’evento. Nel dettaglio, lavora alla creazione di
                    un’identità visiva e grafica, allo sviluppo di prodotti e
                    all’ideazione degli allestimenti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
