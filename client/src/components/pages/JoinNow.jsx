import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/location3.jpg";
import { Center } from "@react-three/drei";

export default function JoinNow() {
    const state = useLocation().state;
    const [windowSize, setWindowSize] = useOutletContext();
    const [cat, setCat] = useState(state?.cat || "");
    
    
    if (windowSize > 992) {
        /**
         * DESKTOP
         */
        return (
          <>
            <div
              className="header gradient-background-joinus"
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
                  fontSize: "40px",
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
              marginTop: "30px",
            }}
          >
            Come candidarsi:{" "}
          </h3>
        </div>


        <section style={{ fontSize: "20px",
      marginTop: "30px", }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Entra a far parte di questo progetto meraviglioso, pieno di stimoli e opportunità di crescita.
Non vediamo l'ora di leggere la tua storia!

            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Se verrai selezionato, farai parte del team TEDxSapienzaU per le attività degli anni 2024 e 2025, con inserimento immediato.
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Le candidature sono rivolte a tutti gli studenti <strong>regolarmente iscritti </strong> ad un corso di laurea, laurea magistrale, master, dottorato o scuola di specializzazione <strong>presso l'ateneo Sapienza Università di Roma</strong> e si chiuderanno il giorno <strong> 4/03/2024 alle ore 23:59 </strong>.
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
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
                fontFamily: "GothamBook",
              }}
            >
              <strong>L'esito della candidatura verrà comunicato tramite email.</strong>
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Per <strong>eventuali dubbi o approfondimenti </strong> potete contattarci inviando una mail a: <strong>info@tedxsapienzau.com</strong>
            </p>
            <a
                  className="btn-volunteers"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                    color: "#eb0028",
                    marginTop:"40px",
                    width: "20%",
                  }}
                  href="https://forms.gle/4d93qym4BDjYhbpx5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Candidati!
                </a>
          </div>


          <div
          className="gradient-background"
          style={{
            backgroundColor: "red",
            textAlign: "left",
            display: "grid",
            height: "25vh",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            placeItems: "center",
            marginTop: "40px",
          }}
        >

          <h1
            className="font-weight-bold mb-5"
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              marginTop: "50px",
            }}
          >
            Descrizione team
          </h1>
        </div>

          <div className="container-lg mt-3">
          <div class="parent-aw" style={{ fontFamily: "GothamBold" }}>
            <div class="text-top-left-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                External Relations & Sponsorship
              </h2>
              <p>
              Il team External Relations & Sponsorship si occupa di gestire ogni aspetto legato a sponsorizzazioni, partnership, patrocini e bandi pubblici. Quindi a partire dalla ricerca di aziende, startup, PMI, media, associazioni, enti ed istituzioni, fino alla firma di accordi e contratti, con un focus sulla gestione del rapporto in tutte le sue fasi, al fine di dar vita ad una collaborazione win-win. Il TEDxSapienzaU è un'organizzazione no-profit e questi fondi servono interamente a finanziare la realizzazione del progetto.
              </p>
            </div>
            <div class="text-bottom-right-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                Planning & Event Management
              </h2>
              <p>
              Il team Planning and Event Management si occupa della pianificazione e della gestione di vari aspetti dell’organizzazione. 
Nel concreto si occupa della richiesta dei preventivi alle aziende, della ricerca degli spazi per le conferenze e per gli eventi con gli sponsor, della promozione di essi tramite giornate dedicate agli studenti Sapienza. 
In sostanza, quindi, si occupa dell'ideazione, della progettazione e dello sviluppo dei vari eventi firmati TEDxSapienzaU.

              </p>
            </div>
            </div>
            </div>

            <div className="container-lg mt-3">
          <div class="parent-aw" style={{ fontFamily: "GothamBold" }}>

            <div class="text-top-left-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                Speakers & Event Curation
              </h2>
              <p>
              Il team Speakers & Event Curation si occupa delle proposte dei temi per i vari eventi, della scelta degli speakers e della cura dei loro dettagli burocratici (es. mail e contatti) e pratici (es. slides e speech). 
In generale, quindi, si occupa a 360° del rapporto con gli speakers affinché sia sempre presente una forte attenzione verso tutte le loro necessità. 


              </p>
            </div>
            <div class="text-bottom-right-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                Human Resources & Academy 
              </h2>
              <p>
              Il team Human Resources & Academy si occupa della selezione (es. costruzione e screening delle candidature, colloqui conoscitivi) e della gestione del personale al fine di garantirne il benessere e di costruire un ambiente creativo e produttivo per ogni membro dell'organizzazione. 
Inoltre si occupa della formazione del personale attraverso la ricerca continua, interna ed esterna al mondo universitario, di professionisti.
              </p>
            </div>
            </div>
            </div>
            
            <div className="container-lg mt-3">
          <div class="parent-aw" style={{ fontFamily: "GothamBold" }}>
            <div class="text-top-left-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                IT & Website 
              </h2>
              <p>
              Il team IT & Website si occupa di garantire il corretto funzionamento del sito web ufficiale sia lato front-end che lato back-end e gestisce la web app ufficiale. 
Inoltre coordina la newsletter settimanale e cura la progettazione grafica, l'identità visiva e i contenuti, assicurando un'esperienza utente online ottimale. 
Infine, sovrintende la regia tecnica durante gli eventi principali, fungendo da figura di supporto a 360° in ambito tecnologico.

              </p>
            </div>

            <div class="text-bottom-right-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                Communication & Marketing
              </h2>
              <p>
              Il Team Communication & Marketing si occupa di curare l’intera comunicazione del TEDxSapienzaU. 
In particolare si occupa della costruzione e della pianificazione della reputazione online, dell’awareness e di creare campagne ed iniziative per coinvolgere il pubblico e le realtà che supportano il progetto.  
Inoltre si occupa, nelle varie fasi dell' evento, della stesura dei comunicati stampa, delle newsletter e dell’email marketing.
Infine si occupa della creazione di contenuti visuali, fotografici e video affinché si dia ai messaggi comunicati la maggior efficacia possibile.


              </p>
            </div>
            </div>
            </div>

            <div className="container-lg mt-3">
          <div class="parent-aw" style={{ fontFamily: "GothamBold" }}>
            <div class="text-top-left-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                Legal & Administrative
              </h2>
              <p>
              Il team Legal & Administrative cura gli aspetti giuridici e amministrativi legati all'organizzazione degli eventi TED. In particolare si occupa della stesura dei contratti, della contabilità, della ricerca dei bandi per il recupero fondi, del rispetto delle TEDx rules e delle linee guida dell'Ateneo ed infine della tutela della privacy e del diritto d'autore.
              </p>
            </div>
            <div class="text-bottom-right-aw">
              <h2
                style={{
                  fontSize: "40px",
                  color: "black",
                }}
              >
                Design
              </h2>
              <p>
              Il team Design si occupa degli aspetti di progettazione dell’evento.
Nel dettaglio, lavora alla creazione di un’identità visiva e grafica, allo sviluppo di prodotti e all’ideazione degli allestimenti.



              </p>
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
        <div
          className="header gradient-background-joinus "
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            height: "30vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mb-5"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              marginTop: "100px",
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
              textAlign: "center",
              fontFamily: "GothamBold",
              marginTop: "30px",
            }}
          >
            Come candidarsi:{" "}
          </h3>
        </div>

        <section style={{ fontSize: "18px",marginTop: "30px", }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Entra a far parte di questo progetto meraviglioso, pieno di stimoli e opportunità di crescita.
Non vediamo l'ora di leggere la tua storia!
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Se verrai selezionato, farai parte del team TEDxSapienzaU per le attività degli anni 2024 e 2025, con inserimento immediato.
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Le candidature sono rivolte a tutti gli studenti <strong>regolarmente iscritti </strong> ad un corso di laurea, laurea magistrale, master, dottorato o scuola di specializzazione <strong>presso l'ateneo Sapienza Università di Roma</strong> e si chiuderanno il giorno <strong> 4/03/2024 alle ore 23:59 </strong>.
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
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
                fontFamily: "GothamBook",
              }}
            >
              <strong>L'esito della candidatura verrà comunicato tramite email.</strong>
            </p>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Per <strong>eventuali dubbi o approfondimenti </strong> potete contattarci inviando una mail a: <strong>info@tedxsapienzau.com</strong>
            </p>
            <a
                  className="btn-volunteers"
                  style={{
                    display: "flex",
                    width: "20%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "0px" : "15px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                    color: "#eb0028",
                    marginTop:"40px",
                  }}
                  href="https://forms.gle/4d93qym4BDjYhbpx5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Candidati!
                </a>
          </div>

          <div
          className="gradient-background"
          style={{
            backgroundColor: "red",
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            height: "30vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
            marginTop:"40px",
          }}
        >
          <h1
            className="font-weight-bold mb-5"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              marginTop: "50px",
            }}
          >
            Descrizione team
          </h1>
        </div>

        <div
          className="container mb-5 mt-5"
          style={{ fontFamily: "GothamBold" }}
        >
          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              External Relations & Sponsorship
            </h2>
            <p>
            Il team External Relations & Sponsorship si occupa di gestire ogni aspetto legato a sponsorizzazioni, partnership, patrocini e bandi pubblici. Quindi a partire dalla ricerca di aziende, startup, PMI, media, associazioni, enti ed istituzioni, fino alla firma di accordi e contratti, con un focus sulla gestione del rapporto in tutte le sue fasi, al fine di dar vita ad una collaborazione win-win. Il TEDxSapienzaU è un'organizzazione no-profit e questi fondi servono interamente a finanziare la realizzazione del progetto.
            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Planning & Event Management
            </h2>
            <p>
            Il team Planning and Event Management si occupa della pianificazione e della gestione di vari aspetti dell’organizzazione. 
Nel concreto si occupa della richiesta dei preventivi alle aziende, della ricerca degli spazi per le conferenze e per gli eventi con gli sponsor, della promozione di essi tramite giornate dedicate agli studenti Sapienza. 
In sostanza, quindi, si occupa dell'ideazione, della progettazione e dello sviluppo dei vari eventi firmati TEDxSapienzaU.

            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Speakers & Event Curation
            </h2>
            <p>
            Il team Speakers & Event Curation si occupa delle proposte dei temi per i vari eventi, della scelta degli speakers e della cura dei loro dettagli burocratici (es. mail e contatti) e pratici (es. slides e speech). 
In generale, quindi, si occupa a 360° del rapporto con gli speakers affinché sia sempre presente una forte attenzione verso tutte le loro necessità. 
            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Human Resources & Academy
            </h2>
            <p>
            Il team Human Resources & Academy si occupa della selezione (es. costruzione e screening delle candidature, colloqui conoscitivi) e della gestione del personale al fine di garantirne il benessere e di costruire un ambiente creativo e produttivo per ogni membro dell'organizzazione. 
Inoltre si occupa della formazione del personale attraverso la ricerca continua, interna ed esterna al mondo universitario, di professionisti.            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              IT & Website 
            </h2>
            <p>
            Il team IT & Website si occupa di garantire il corretto funzionamento del sito web ufficiale sia lato front-end che lato back-end e gestisce la web app ufficiale. 
Inoltre coordina la newsletter settimanale e cura la progettazione grafica, l'identità visiva e i contenuti, assicurando un'esperienza utente online ottimale. 
Infine, sovrintende la regia tecnica durante gli eventi principali, fungendo da figura di supporto a 360° in ambito tecnologico.
            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Communication & Marketing
            </h2>
            <p>
            Il Team Communication & Marketing si occupa di curare l’intera comunicazione del TEDxSapienzaU. 
In particolare si occupa della costruzione e della pianificazione della reputazione online, dell’awareness e di creare campagne ed iniziative per coinvolgere il pubblico e le realtà che supportano il progetto.  
Inoltre si occupa, nelle varie fasi dell' evento, della stesura dei comunicati stampa, delle newsletter e dell’email marketing.
Infine si occupa della creazione di contenuti visuali, fotografici e video affinché si dia ai messaggi comunicati la maggior efficacia possibile.
            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Legal & Administrative
            </h2>
            <p>
            Il team Legal & Administrative cura gli aspetti giuridici e amministrativi legati all'organizzazione degli eventi TED. In particolare si occupa della stesura dei contratti, della contabilità, della ricerca dei bandi per il recupero fondi, del rispetto delle TEDx rules e delle linee guida dell'Ateneo ed infine della tutela della privacy e del diritto d'autore.
            </p>
          </div>

          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Design
            </h2>
            <p>
            Il team Design si occupa degli aspetti di progettazione dell’evento.
Nel dettaglio, lavora alla creazione di un’identità visiva e grafica, allo sviluppo di prodotti e all’ideazione degli allestimenti.

            </p>
          </div>


          </div>
        </section>
            

            </>
    );
 }  
}