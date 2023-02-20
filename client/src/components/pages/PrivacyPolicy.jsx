import React from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import "../../index.css";
import global from "../../resources/global.json";

export default function PrivacyPolicy() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div
          className="header"
          style={{
            textAlign: "center",
            color: "black",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-3"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            TEDxSapienzaU - Privacy Policy Sections ​
          </h1>
        </div>

        <div
          style={{
            textAlign: "justify",
            padding: "100px",
            fontFamily: "GothamBook",
          }}
        >
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Condizioni sul trattamento dei dati personali – Gestione dei cookies
            proprietari e di terze parti ​
          </p>
          <p>
            Informativa sulla Privacy ai sensi del D. Lgs. 30 giugno 2003 n.
            196, recante il Codice in materia di protezione dei dati personali
            (rev 1.0 del 25062004) e al regolamento Europeo – GDPR 679/2016.
          </p>
          <p>
            La presente informativa è stata redatta per far conoscere i principi
            in materia di riservatezza che regolano l’uso da parte di
            tedxsapienzau.com dei dati forniti dai clienti, compresi i dati
            raccolti attraverso questo sito internet. In questa pagina si
            descrivono le modalità di gestione del sito in riferimento al
            trattamento dei dati personali degli utenti che lo consultano. Si
            tratta di un’informativa resa anche ai sensi dell’art. 13 del d.lgs.
            n.196/2003 e al regolamento Europeo – GDPR 679/2016 (Codice in
            materia di protezione dei dati personali) a coloro che interagiscono
            con i servizi Web accessibili per via telematica a partire
            dall’indirizzo:{" "}
            <Link to="/tedxsapienzau">https://www.tedxsapienzau.com/</Link>.
            L’informativa è resa solo per il presente sito internet e non anche
            per altri siti internet eventualmente consultati dall’utente tramite
            link presenti su questo sito. Visitando il presente sito internet,
            si dichiara implicitamente di avere compreso ed accettato le
            modalità di trattamento descritte nella presente informativa sulla
            privacy. Per trattamento di dati personali si intende la loro
            raccolta, registrazione, organizzazione, conservazione,
            consultazione, elaborazione, modificazione, selezione, estrazione,
            raffronto, utilizzo, interconnessione, blocco, comunicazione,
            cancellazione e distruzione ovvero la combinazione di due o più di
            tali operazioni.
          </p>
          <p>
            Il trattamento dei dati, oltre alle finalità connesse, strumentali e
            necessarie alla fornitura del Servizio sarà finalizzato a
            raccogliere dati ed informazioni in via generale e particolare sugli
            orientamenti e le preferenze dell’Utente; inviare informazioni ed
            offerte commerciali; inviare materiale pubblicitario e informativo;
            effettuare comunicazioni commerciali, anche interattive; compiere
            attività dirette di vendita o di collocamento di prodotti o servizi;
            e per tutte quelle finalità a carattere commerciale e/o statistico
            lecite. Il trattamento dei dati avverrà mediante strumenti
            automatizzati atti a memorizzare, gestire e trasmettere i dati
            stessi in modo da garantirne la sicurezza nonchè la riservatezza. I
            dati saranno conservati presso “TEDxSapienzaU” almeno per i tempi
            prescritti dalle norme di legge e trattati da parte di dipendenti
            e/o terzi da questa incaricati, i quali svolgono le suddette
            attività sotto la sua diretta supervisione e responsabilità.
            “TEDxSapienzaU” assicura e garantisce che non saranno trattati in
            maniera diretta o indiretta argomenti riguardanti dati sensibili*.
          </p>
          <p>
            Il conferimento del consenso al trattamento dei dati personali
            forniti per gli scopi di cui sopra è necessario. In caso di rifiuto
            alla prestazione del consenso non ci sarà possibile erogarLe i
            servizi. La informiamo, inoltre, che, ai sensi dell’art. 7 del D.
            Lgs. 30 giugno 2003, n. 196 e al regolamento Europeo – GDPR
            679/2016, il Cliente ha il diritto di opporsi, in tutto o in parte,
            per motivi legittimi, al trattamento e può, secondo le modalità e
            nei limiti previsti dalla vigente normativa, richiedere la conferma
            dell’esistenza di dati personali che lo riguardano, e conoscerne
            l’origine, riceverne comunicazione intelligibile, avere informazioni
            circa la logica, le modalità e le finalità del trattamento,
            richiederne l’aggiornamento, la rettifica, l’integrazione,
            richiedere la cancellazione, la trasformazione in forma anonima, il
            blocco dei dati trattati in violazione di legge, ivi compresi quelli
            non più necessari al perseguimento degli scopi per i quali sono
            stati raccolti, nonchè, più in generale, esercitare tutti i diritti
            che gli sono riconosciuti dalle vigenti disposizioni di legge.
          </p>

          <p>
            Titolare del trattamento è Comitato TEDxSapienzaU, con sede legale
            in Piazzale Aldo Moro n. 5, 00185, Roma (RM). Le eventuali istanze
            ai sensi dell’art. 7 del D. Lgs. 196/03 potranno essere indirizzate
            al medesimo indirizzo, oppure all’indirizzo di posta elettronica
            info@tedxsapienzau.com
          </p>
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Informativa Cookie
          </p>

          <p>
            Questa informativa sull’utilizzo dei cookie sul sito web
            www.tedxsapienza.com è resa all’utente in attuazione del
            provvedimento del Garante per la protezione dei dati personali
            dell’8 maggio 2014 “Individuazione delle modalità semplificate per
            l’informativa e l’acquisizione del consenso per l’uso dei cookie” e
            nel rispetto dell’art. 13 del Codice privacy (D.Lgs. n. 196/2003) e
            al regolamento Europeo – GDPR 679/2016.
          </p>

          <p>
            Ogni ulteriore richiesta circa l’utilizzo dei cookie nel presente
            sito web può essere inviata all’indirizzo email
            info@tedxsapienzau.com
          </p>

          <p>
            Può essere utilizzato lo stesso indirizzo per esercitare in
            qualsiasi momento i diritti che il Codice le attribuisce in qualità
            di interessato (art. 7 e ss D.Lgs. 30 giugno 2003, n. 196: ad
            esempio, accesso, cancellazione, aggiornamento, rettificazione,
            integrazione, ecc.), nonchè per chiedere l’elenco aggiornato dei
            Responsabili del trattamento eventualmente designati.
          </p>
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
          className="header"
          style={{
            textAlign: "center",
            color: "black",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-3"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            TEDxSapienzaU - Privacy Policy Sections ​
          </h1>
        </div>

        <div
          style={{
            textAlign: "justify",
            padding: "20px",
            fontFamily: "GothamBook",
          }}
        >
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Condizioni sul trattamento dei dati personali – Gestione dei cookies
            proprietari e di terze parti ​
          </p>
          <p>
            Informativa sulla Privacy ai sensi del D. Lgs. 30 giugno 2003 n.
            196, recante il Codice in materia di protezione dei dati personali
            (rev 1.0 del 25062004) e al regolamento Europeo – GDPR 679/2016.
          </p>
          <p>
            La presente informativa è stata redatta per far conoscere i principi
            in materia di riservatezza che regolano l’uso da parte di
            tedxsapienzau.com dei dati forniti dai clienti, compresi i dati
            raccolti attraverso questo sito internet. In questa pagina si
            descrivono le modalità di gestione del sito in riferimento al
            trattamento dei dati personali degli utenti che lo consultano. Si
            tratta di un’informativa resa anche ai sensi dell’art. 13 del d.lgs.
            n.196/2003 e al regolamento Europeo – GDPR 679/2016 (Codice in
            materia di protezione dei dati personali) a coloro che interagiscono
            con i servizi Web accessibili per via telematica a partire
            dall’indirizzo:{" "}
            <Link to="/tedxsapienzau">https://www.tedxsapienzau.com/</Link>.
            L’informativa è resa solo per il presente sito internet e non anche
            per altri siti internet eventualmente consultati dall’utente tramite
            link presenti su questo sito. Visitando il presente sito internet,
            si dichiara implicitamente di avere compreso ed accettato le
            modalità di trattamento descritte nella presente informativa sulla
            privacy. Per trattamento di dati personali si intende la loro
            raccolta, registrazione, organizzazione, conservazione,
            consultazione, elaborazione, modificazione, selezione, estrazione,
            raffronto, utilizzo, interconnessione, blocco, comunicazione,
            cancellazione e distruzione ovvero la combinazione di due o più di
            tali operazioni.
          </p>
          <p>
            Il trattamento dei dati, oltre alle finalità connesse, strumentali e
            necessarie alla fornitura del Servizio sarà finalizzato a
            raccogliere dati ed informazioni in via generale e particolare sugli
            orientamenti e le preferenze dell’Utente; inviare informazioni ed
            offerte commerciali; inviare materiale pubblicitario e informativo;
            effettuare comunicazioni commerciali, anche interattive; compiere
            attività dirette di vendita o di collocamento di prodotti o servizi;
            e per tutte quelle finalità a carattere commerciale e/o statistico
            lecite. Il trattamento dei dati avverrà mediante strumenti
            automatizzati atti a memorizzare, gestire e trasmettere i dati
            stessi in modo da garantirne la sicurezza nonchè la riservatezza. I
            dati saranno conservati presso “TEDxSapienzaU” almeno per i tempi
            prescritti dalle norme di legge e trattati da parte di dipendenti
            e/o terzi da questa incaricati, i quali svolgono le suddette
            attività sotto la sua diretta supervisione e responsabilità.
            “TEDxSapienzaU” assicura e garantisce che non saranno trattati in
            maniera diretta o indiretta argomenti riguardanti dati sensibili*.
          </p>
          <p>
            Il conferimento del consenso al trattamento dei dati personali
            forniti per gli scopi di cui sopra è necessario. In caso di rifiuto
            alla prestazione del consenso non ci sarà possibile erogarLe i
            servizi. La informiamo, inoltre, che, ai sensi dell’art. 7 del D.
            Lgs. 30 giugno 2003, n. 196 e al regolamento Europeo – GDPR
            679/2016, il Cliente ha il diritto di opporsi, in tutto o in parte,
            per motivi legittimi, al trattamento e può, secondo le modalità e
            nei limiti previsti dalla vigente normativa, richiedere la conferma
            dell’esistenza di dati personali che lo riguardano, e conoscerne
            l’origine, riceverne comunicazione intelligibile, avere informazioni
            circa la logica, le modalità e le finalità del trattamento,
            richiederne l’aggiornamento, la rettifica, l’integrazione,
            richiedere la cancellazione, la trasformazione in forma anonima, il
            blocco dei dati trattati in violazione di legge, ivi compresi quelli
            non più necessari al perseguimento degli scopi per i quali sono
            stati raccolti, nonchè, più in generale, esercitare tutti i diritti
            che gli sono riconosciuti dalle vigenti disposizioni di legge.
          </p>

          <p>
            Titolare del trattamento è Comitato TEDxSapienzaU, con sede legale
            in Piazzale Aldo Moro n. 5, 00185, Roma (RM). Le eventuali istanze
            ai sensi dell’art. 7 del D. Lgs. 196/03 potranno essere indirizzate
            al medesimo indirizzo, oppure all’indirizzo di posta elettronica
            info@tedxsapienzau.com
          </p>
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Informativa Cookie
          </p>

          <p>
            Questa informativa sull’utilizzo dei cookie sul sito web
            www.tedxsapienza.com è resa all’utente in attuazione del
            provvedimento del Garante per la protezione dei dati personali
            dell’8 maggio 2014 “Individuazione delle modalità semplificate per
            l’informativa e l’acquisizione del consenso per l’uso dei cookie” e
            nel rispetto dell’art. 13 del Codice privacy (D.Lgs. n. 196/2003) e
            al regolamento Europeo – GDPR 679/2016.
          </p>

          <p>
            Ogni ulteriore richiesta circa l’utilizzo dei cookie nel presente
            sito web può essere inviata all’indirizzo email
            info@tedxsapienzau.com
          </p>

          <p>
            Può essere utilizzato lo stesso indirizzo per esercitare in
            qualsiasi momento i diritti che il Codice le attribuisce in qualità
            di interessato (art. 7 e ss D.Lgs. 30 giugno 2003, n. 196: ad
            esempio, accesso, cancellazione, aggiornamento, rettificazione,
            integrazione, ecc.), nonchè per chiedere l’elenco aggiornato dei
            Responsabili del trattamento eventualmente designati.
          </p>
        </div>
      </>
    );
  }
}
