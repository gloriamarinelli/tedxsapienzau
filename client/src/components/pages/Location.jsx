import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Image from "../images/location3.jpg";
import Image2 from "../images/location2.webp";
import "../../index.css";

import { useTranslation } from "react-i18next";

/**
 * Location page that talks about Sapienza University
 */
export default function Location() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();

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
            fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "50px" : "30px",
            fontWeight: "bold",
            fontFamily: "Fira Sans Extra Condensed",
            color: "#fff",
            margin: "10px",
          }}
        >
          I luoghi di TEDxSapienzaU: Sapienza{" "}
        </h1>

        <div
          style={{
            backgroundColor: "#191919",
            borderRadius: "25px",
            width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
            height: windowSize > global.UTILS.MOBILE_WIDTH ? "200px" : "100px",
            margin: "auto",
            padding: "30px",
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition:
              windowSize > global.UTILS.MOBILE_WIDTH
                ? "0px -300px"
                : "0px -600px",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "#191919",
            borderRadius: "25px",
            width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
            margin: "auto",
            padding: windowSize > global.UTILS.MOBILE_WIDTH ? "30px" : "5px",
            marginTop: "50px",
          }}
        >
          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              fontFamily: "Fira sans Extra Condensed",
              marginTop: "20px",
            }}
          >
            L’Università Sapienza di Roma, fondata <strong>nel 1303</strong> da
            papa Bonifacio VIII, è la più antica università di Roma e la più
            grande in Europa. L’Ateneo conta <strong>700 anni</strong> di storia
            e ospita, secondo i dati dell’anno accademico 2022/23, circa{" "}
            <strong>120 mila studenti</strong> e{" "}
            <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
            c’è contribuire allo sviluppo della società della conoscenza
            attraverso ricerca, formazione di eccellenza e di qualità e la
            cooperazione internazionale. Il suo motto è la frase{" "}
            <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
            dalla storia centenaria dell’Università, e arriva fino ai giorni
            nostri.
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              fontFamily: "Fira sans Extra Condensed",
              color: "#fff",
              fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
              marginTop: "20px",
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
            Sapienza è stata al centro della storia romana e di quella italiana,
            prima come ateneo legato ai Papi, poi come Studium Urbis autonomo.
            Con il passare del tempo si è aperta a nuove discipline scientifiche
            e umanistiche. Oggi è un grande campus che si trova a breve distanza
            dalla stazione centrale Termini, con alcune sedi dislocate sul
            territorio della città, e altre nel Comune di Latina.
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              fontFamily: "Fira sans Extra Condensed",
              color: "#fff",
              fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
              marginTop: "20px",
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

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              fontFamily: "Fira sans Extra Condensed",
              color: "#fff",
              fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
              marginTop: "20px",
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
            <strong> 200 master</strong>, oltre <strong>90 dottorati</strong> di
            ricerca e più di <strong>80 scuole di specializzazione</strong>. La
            comunità studentesca si compone di più di{" "}
            <strong>30 mila studenti</strong> fuorisede, 10 mila internazionali
            e oltre 2,2 mila studenti all’anno in mobilità internazionale. Sono
            984 le Università Partner, collocate in 87 Paesi, con la quale
            l’Ateneo ha stretto rapporti negli anni. Viceversa, Sapienza offre
            ai propri studenti{" "}
            <strong> numerose opportunità internazionali</strong>, per esempio
            lauree a doppio titolo, borse per tesi all’estero, tirocini in
            diversi paesi europei ed extraeuropei, dottorati internazionali.
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              fontFamily: "Fira sans Extra Condensed",
              color: "#fff",
              fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
              marginTop: "20px",
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

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              fontFamily: "Fira sans Extra Condensed",
              color: "#fff",
              fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
              marginTop: "20px",
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
            per il raggiungimento dei 17 Obiettivi di sviluppo sostenibile delle
            Nazioni unite con attività di didattica, di ricerca, di terza
            missione e con policy trasversali. Le iniziative portate avanti sono
            descritte sul portale
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
        <h1
          className="font-weight-bold mt-5 mb-5 text-center"
          style={{
            fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "60px" : "40px",
            fontWeight: "bold",
            fontFamily: "Fira Sans Extra Condensed",
            color: "#fff",
            margin: "10px",
          }}
        >
          Le strutture e l’Aula Magna
        </h1>
        <div>
          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
              height:
                windowSize > global.UTILS.MOBILE_WIDTH ? "200px" : "100px",
              margin: "auto",
              padding: "30px",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition:
                windowSize > global.UTILS.MOBILE_WIDTH
                  ? "0px -400px"
                  : "0px -5000px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
              margin: "auto",
              padding: windowSize > global.UTILS.MOBILE_WIDTH ? "30px" : "5px",
              marginTop: "50px",
            }}
          >
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "Fira sans Extra Condensed",
                color: "#fff",
                fontSize:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
                marginTop: "20px",
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
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "Fira sans Extra Condensed",
                color: "#fff",
                fontSize:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
                marginTop: "20px",
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
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "Fira sans Extra Condensed",
                color: "#fff",
                fontSize:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "2em" : "1em",
                marginTop: "20px",
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
        </div>
      </section>
    </>
  );
}
