import "../../index.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/TED_0004.jpg";
import Image1 from "../images/sapienza_minerva.jpg";

import React, { useState } from "react";
import global from "../../resources/global.json";
import "../../resources/styles/missionandvisionstyle.css";
import { useOutletContext } from "react-router";

export default function Location() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <div
          className="header gradient-background-about"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            backgroundColor: "red",
            marginBottom: "10px",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "80vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "120px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            LOCATION
          </h1>
        </div>

        <div className="container-lg marketing">
          <h3
            className="title"
            style={{
              textAlign: "justify",
              fontFamily: "GothamBold",
            }}
          >
            I luoghi di TEDxSapienzaU: Sapienza{" "}
          </h3>
        </div>

        <section style={{ fontSize: "20px" }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              L’Università Sapienza di Roma, fondata <strong>nel 1303</strong>{" "}
              da papa Bonifacio VIII, è la più antica università di Roma e la
              più grande in Europa. L’Ateneo conta <strong>700 anni</strong> di
              storia e ospita, secondo i dati dell’anno accademico 2022/23,
              circa <strong>120 mila studenti</strong> e{" "}
              <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
              c’è contribuire allo sviluppo della società della conoscenza
              attraverso ricerca, formazione di eccellenza e di qualità e la
              cooperazione internazionale. Il suo motto è la frase{" "}
              <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
              dalla storia centenaria dell’Università, e arriva fino ai giorni
              nostri.
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
              Una{" "}
              <a
                href="https://www.uniroma1.it/it/pagina/la-storia"
                style={{ color: "#EB0028" }}
              >
                storia
              </a>{" "}
              che varrebbe la pena approfondire: negli ultimi sette secoli
              Sapienza è stata al centro della storia romana e di quella
              italiana, prima come ateneo legato ai Papi, poi come Studium Urbis
              autonomo. Con il passare del tempo si è aperta a nuove discipline
              scientifiche e umanistiche. Oggi è un grande campus che si trova a
              breve distanza dalla stazione centrale Termini, con alcune sedi
              dislocate sul territorio della città, e altre nel Comune di
              Latina.
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
              Se si considera il{" "}
              <a
                href="https://www.uniroma1.it/it/notizia/la-sapienza-nei-ranking"
                style={{ color: "#EB0028" }}
              >
                panorama internazionale
              </a>
              , inoltre, qualità della ricerca e della didattica e dimensione
              internazionale hanno portato l’Ateneo a posizionarsi{" "}
              <strong>ai primi posti in Italia</strong> secondo i principali
              ranking universitari mondiali. Sapienza emerge poi anche nelle
              classifiche settoriali, affermandosi come punto di riferimento per
              numerose discipline (per esempio è prima al mondo negli studi
              classici), e ha ottenuto <strong>14 primati nazionali</strong> in
              diverse materie.
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
              Un altro aspetto che la caratterizza è la sua{" "}
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/corsi-e-iscrizioni"
                style={{ color: "#EB0028" }}
              >
                offerta formativa
              </a>
              : <strong>300 corsi </strong>
              di laurea e laurea magistrale (di cui oltre{" "}
              <strong>60 in inglese</strong>),
              <strong> 200 master</strong>, oltre <strong>90 dottorati</strong>{" "}
              di ricerca e più di <strong>80 scuole di specializzazione</strong>
              . La comunità studentesca si compone di più di{" "}
              <strong>30 mila studenti</strong> fuorisede, 10 mila
              internazionali e oltre 2,2 mila studenti all’anno in mobilità
              internazionale. Sono 984 le Università Partner, collocate in 87
              Paesi, con la quale l’Ateneo ha stretto rapporti negli anni.
              Viceversa, Sapienza offre ai propri studenti{" "}
              <strong> numerose opportunità internazionali</strong>, per esempio
              lauree a doppio titolo, borse per tesi all’estero, tirocini in
              diversi paesi europei ed extraeuropei, dottorati internazionali.
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
              Per quanto riguarda la{" "}
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/ricerca-scientifica"
                style={{ color: "#EB0028" }}
              >
                ricerca
              </a>{" "}
              scientifica, si parla di una copertura tra le discipline ad ampio
              raggio: l’Ateneo raggiunge
              <strong> livelli di eccellenza</strong> in molti ambiti, tra cui
              l’archeologia, la fisica, l’astrofisica e le scienze umanistiche.
              L’Università ha inoltre accolto durante lo studio o l’insegnamento
              premi Nobel e scienziati di fama internazionale.
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
              L’impegno in materia di{" "}
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/sapienza-sostenibile"
                style={{ color: "#EB0028" }}
              >
                sostenibilità
              </a>{" "}
              è un’altra dimensione di rilievo per Sapienza, la quale si impegna
              per il raggiungimento dei 17 Obiettivi di sviluppo sostenibile
              delle Nazioni unite con attività di didattica, di ricerca, di
              terza missione e con policy trasversali. Le iniziative portate
              avanti sono descritte sul portale
              <strong> Sapienza sostenibile</strong> e nel{" "}
              <a
                href="https://www.uniroma1.it/it/pagina/rapporto-di-sostenibilita"
                style={{ color: "#EB0028" }}
              >
                Bilancio sociale e di sostenibilità
              </a>{" "}
              pubblicato ogni anno.
            </p>
          </div>
          <div className="jp-5 d-flex justify-content-center align-items-center mt-3 mb-3">
            <LazyLoadImage src={Image1} alt="TedxSapienzaU" height="400" />
          </div>

          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Le strutture e l’Aula Magna
            </h3>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              L’Università Sapienza comprende numerose{" "}
              <a
                href="https://www.uniroma1.it/it/pagina/strutture"
                style={{ color: "#EB0028" }}
              >
                strutture
              </a>
              : <strong>11 facoltà</strong>, una scuola di studi avanzati, una
              scuola post laurea di ingegneria aerospaziale e{" "}
              <strong>58 dipartimenti</strong>, senza contare i molteplici
              centri di ricerca e centri di servizi, il tutto gestito
              dall’amministrazione centrale suddivisa per aree. A disposizione
              degli studenti ci sono 48 biblioteche, 18 musei, un ospedale
              universitario e diversi sportelli e uffici con lo scopo di
              rispondere alle loro esigenze.
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
              Tra gli spazi fondamentali c’è senz’altro{" "}
              <strong>l’Aula Magna del Rettorato </strong>
              collocata nella Città Universitaria, una vera e propria città
              nella città situata nel cuore di Roma. L’Aula Magna ha una
              superficie di
              <strong> 900 metri quadri</strong> e si conclude con una tribuna
              absidata definita da una parete curva con il murale “L’Italia tra
              le Arti e le Scienze” del pittore Mario Sironi. Si tratta di
              un’opera fissata in una dimensione atemporale che rappresenta una
              visione epica della storia. Le Figure Monumentali disposte ai lati
              dell’Italia alludono alla ricchezza e al valore della conoscenza.
            </p>{" "}
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Dalla sua fondazione, Sapienza ha sempre mantenuto un ruolo
              importante nella storia italiana ed è stato coinvolta negli
              sviluppi cruciali della società, dell'economia e della politica.
              L’Università riesce oggi a far{" "}
              <strong>
                collidere secoli di tradizione con una didattica
                all'avanguardia, ricerca e innovazione
              </strong>
              , offrendo un’istruzione di alta qualità e numerose opportunità di
              ricerca. Si tratta di un posto in cui studenti e docenti
              provenienti da tutto il mondo si incontrano e si confrontano in un
              contagio continuo di idee.
            </p>
          </div>
          <div className="jp-5 d-flex justify-content-center align-items-center mt-3 mb-3">
            <LazyLoadImage src={Image} alt="TedxSapienzaU" height="400" />
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
          className="header gradient-background-about"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            backgroundColor: "red",
            marginBottom: "10px",
            height: "40vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            LOCATION
          </h1>
        </div>
        <div className="container-lg marketing">
          <h3
            className="title"
            style={{
              textAlign: "center",
              fontFamily: "GothamBold",
            }}
          >
            I luoghi di TEDxSapienzaU: Sapienza{" "}
          </h3>
        </div>

        <section style={{ fontSize: "18px" }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              L’Università Sapienza di Roma, fondata <strong>nel 1303</strong>{" "}
              da papa Bonifacio VIII, è la più antica università di Roma e la
              più grande in Europa. L’Ateneo conta <strong>700 anni</strong> di
              storia e ospita, secondo i dati dell’anno accademico 2022/23,
              circa <strong>120 mila studenti</strong> e{" "}
              <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
              c’è contribuire allo sviluppo della società della conoscenza
              attraverso ricerca, formazione di eccellenza e di qualità e la
              cooperazione internazionale. Il suo motto è la frase{" "}
              <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
              dalla storia centenaria dell’Università, e arriva fino ai giorni
              nostri.
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
              Una{" "}
              <a
                href="https://www.uniroma1.it/it/pagina/la-storia"
                style={{ color: "#EB0028" }}
              >
                storia
              </a>{" "}
              che varrebbe la pena approfondire: negli ultimi sette secoli
              Sapienza è stata al centro della storia romana e di quella
              italiana, prima come ateneo legato ai Papi, poi come Studium Urbis
              autonomo. Con il passare del tempo si è aperta a nuove discipline
              scientifiche e umanistiche. Oggi è un grande campus che si trova a
              breve distanza dalla stazione centrale Termini, con alcune sedi
              dislocate sul territorio della città, e altre nel Comune di
              Latina.
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
              Se si considera il{" "}
              <a
                href="https://www.uniroma1.it/it/notizia/la-sapienza-nei-ranking"
                style={{ color: "#EB0028" }}
              >
                panorama internazionale
              </a>
              , inoltre, qualità della ricerca e della didattica e dimensione
              internazionale hanno portato l’Ateneo a posizionarsi{" "}
              <strong>ai primi posti in Italia</strong> secondo i principali
              ranking universitari mondiali. Sapienza emerge poi anche nelle
              classifiche settoriali, affermandosi come punto di riferimento per
              numerose discipline (per esempio è prima al mondo negli studi
              classici), e ha ottenuto <strong>14 primati nazionali</strong> in
              diverse materie.
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
              Un altro aspetto che la caratterizza è la sua{" "}
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/corsi-e-iscrizioni"
                style={{ color: "#EB0028" }}
              >
                offerta formativa
              </a>
              : <strong>300 corsi </strong>
              di laurea e laurea magistrale (di cui oltre{" "}
              <strong>60 in inglese</strong>),
              <strong> 200 master</strong>, oltre <strong>90 dottorati</strong>{" "}
              di ricerca e più di <strong>80 scuole di specializzazione</strong>
              . La comunità studentesca si compone di più di{" "}
              <strong>30 mila studenti</strong> fuorisede, 10 mila
              internazionali e oltre 2,2 mila studenti all’anno in mobilità
              internazionale. Sono 984 le Università Partner, collocate in 87
              Paesi, con la quale l’Ateneo ha stretto rapporti negli anni.
              Viceversa, Sapienza offre ai propri studenti{" "}
              <strong> numerose opportunità internazionali</strong>, per esempio
              lauree a doppio titolo, borse per tesi all’estero, tirocini in
              diversi paesi europei ed extraeuropei, dottorati internazionali.
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
              Per quanto riguarda la{" "}
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/ricerca-scientifica"
                style={{ color: "#EB0028" }}
              >
                ricerca
              </a>{" "}
              scientifica, si parla di una copertura tra le discipline ad ampio
              raggio: l’Ateneo raggiunge
              <strong> livelli di eccellenza</strong> in molti ambiti, tra cui
              l’archeologia, la fisica, l’astrofisica e le scienze umanistiche.
              L’Università ha inoltre accolto durante lo studio o l’insegnamento
              premi Nobel e scienziati di fama internazionale.
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
              L’impegno in materia di{" "}
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/sapienza-sostenibile"
                style={{ color: "#EB0028" }}
              >
                sostenibilità
              </a>{" "}
              è un’altra dimensione di rilievo per Sapienza, la quale si impegna
              per il raggiungimento dei 17 Obiettivi di sviluppo sostenibile
              delle Nazioni unite con attività di didattica, di ricerca, di
              terza missione e con policy trasversali. Le iniziative portate
              avanti sono descritte sul portale
              <strong> Sapienza sostenibile</strong> e nel{" "}
              <a
                href="https://www.uniroma1.it/it/pagina/rapporto-di-sostenibilita"
                style={{ color: "#EB0028" }}
              >
                Bilancio sociale e di sostenibilità
              </a>{" "}
              pubblicato ogni anno.
            </p>
          </div>
          <div className="container-lg marketing mt-3 mb-3">
            <LazyLoadImage src={Image1} alt="TedxSapienzaU" height="220" />
          </div>

          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "center",
                fontFamily: "GothamBold",
              }}
            >
              Le strutture e l’Aula Magna
            </h3>
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              L’Università Sapienza comprende numerose{" "}
              <a
                href="https://www.uniroma1.it/it/pagina/strutture"
                style={{ color: "#EB0028" }}
              >
                strutture
              </a>
              : <strong>11 facoltà</strong>, una scuola di studi avanzati, una
              scuola post laurea di ingegneria aerospaziale e{" "}
              <strong>58 dipartimenti</strong>, senza contare i molteplici
              centri di ricerca e centri di servizi, il tutto gestito
              dall’amministrazione centrale suddivisa per aree. A disposizione
              degli studenti ci sono 48 biblioteche, 18 musei, un ospedale
              universitario e diversi sportelli e uffici con lo scopo di
              rispondere alle loro esigenze.
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
              Tra gli spazi fondamentali c’è senz’altro{" "}
              <strong>l’Aula Magna del Rettorato </strong>
              collocata nella Città Universitaria, una vera e propria città
              nella città situata nel cuore di Roma. L’Aula Magna ha una
              superficie di
              <strong> 900 metri quadri</strong> e si conclude con una tribuna
              absidata definita da una parete curva con il murale “L’Italia tra
              le Arti e le Scienze” del pittore Mario Sironi. Si tratta di
              un’opera fissata in una dimensione atemporale che rappresenta una
              visione epica della storia. Le Figure Monumentali disposte ai lati
              dell’Italia alludono alla ricchezza e al valore della conoscenza.
            </p>{" "}
          </div>

          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Dalla sua fondazione, Sapienza ha sempre mantenuto un ruolo
              importante nella storia italiana ed è stato coinvolta negli
              sviluppi cruciali della società, dell'economia e della politica.
              L’Università riesce oggi a far{" "}
              <strong>
                collidere secoli di tradizione con una didattica
                all'avanguardia, ricerca e innovazione
              </strong>
              , offrendo un’istruzione di alta qualità e numerose opportunità di
              ricerca. Si tratta di un posto in cui studenti e docenti
              provenienti da tutto il mondo si incontrano e si confrontano in un
              contagio continuo di idee.
            </p>
          </div>
          <div className="container-lg marketing mt-3 mb-3">
            <LazyLoadImage src={Image} alt="TedxSapienzaU" height="245" />
          </div>
        </section>
      </>
    );
  }
}
