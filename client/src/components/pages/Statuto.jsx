import React from "react";
import { useOutletContext } from "react-router";
import "../../index.css";
import global from "../../resources/global.json";

export default function Statuto() {
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
						marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
					}}
				>
					<h1
						className="font-weight-bold mt-5"
						style={{
							fontSize: "30px",
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						STATUTO
					</h1>
				</div>

				<div style={{ textAlign: "center", padding: "100px" }}>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 1
					</h5>
					<p>
						È costituito ai sensi degli articoli 39 e seguenti del Codice
						civile, Il “Comitato TEDxSapienza”.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 2
					</h5>
					<p>
						Il comitato ha come scopo l’organizzazione periodica di eventi
						“TEDx” ospitati dalla Sapienza Università di Roma.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 2.1
					</h5>
					<p>
						A tal fine il comitato, nel rispetto delle linee guida della TED
						Foundation relative all’organizzazione degli eventi “TEDx”, potrà
						collaborare con altre organizzazioni, enti, soggetti con finalità
						compatibili alla propria ed inoltre potrà partecipare ad ogni
						iniziativa culturale, mediatica e di informazione in grado di
						promuovere e dare visibilità a ciascun evento.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 2.2
					</h5>
					<p>
						Per il perseguimento delle finalità statutarie il Comitato, oltre a
						promuovere nei confronti del pubblico apposita raccolta fondi, può
						svolgere qualsiasi attività di natura commerciale, mobiliare,
						immobiliare e finanziaria necessaria alla raccolta delle risorse da
						impiegare nell’organizzazione degli eventi “TEDx”.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 3
					</h5>
					<p>
						Il Comitato ha sede in Roma (RM) alla Via Colli sul Velino n. 41 ed
						ha durata limitata al raggiungimento dello scopo sociale.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 4
					</h5>
					<p>
						La compagine sociale è composta dai “soci ordinari” (o anche
						“organizing member”) e dai “soci sostenitori” (o anche “supporting
						member”).
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 4.1
					</h5>
					<p>
						Sono “soci ordinari” i sottoscrittori dell’atto costitutivo, nonché
						i “soci sostenitori” da almeno 6 mesi che abbiano fatto richiesta di
						adesione quali “soci ordinari” e siano stati accettati dal Consiglio
						direttivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 4.2
					</h5>
					<p>
						I soci ordinari hanno durata di 1 anno rinnovabile dal Consiglio
						direttivo per un massimo di 2 volte entro il 30 Giugno di ogni anno
						e comunque fino al compimento di n. 2 eventi ufficiali “TEDx” in
						qualità di soci ordinari, al termine del quale assumono la qualifica
						di soci sostenitori.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 4.3
					</h5>
					<p>
						Tutti gli altri soggetti, persone fisiche e giuridiche, che abbiano
						fatto richiesta di associarsi e siano stati ammessi con le modalità
						previste nel presente statuto, assumono la qualifica di “soci
						sostenitori”.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 4.4
					</h5>
					<p>
						Non assumono la qualifica di soci i soggetti che contribuiscano alla
						raccolta fondi attraverso la sottoscrizione delle oblazioni.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 5.
					</h5>
					<p>
						Sono organi del comitato: l’Assemblea dei soci ordinari e dei soci
						sostenitori in seguito definita “Plenaria” (o anche “Event Team”),
						l’Assemblea dei soci ordinari in seguito definita “Assemblea” (o
						anche “Organizing Team”), il Consiglio direttivo (o anche “Board”),
						il Presidente (o anche “Organizer”), il Tesoriere (o anche
						“Co-Organizer”), il Licenziatario (o anche “Licensee”).
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 5.1
					</h5>
					<p>
						Tutti gli organi restano in carica fino allo scioglimento, salva la
						facoltà di sostituire i soggetti titolari delle cariche secondo le
						previsioni del presente statuto.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 5.2
					</h5>
					<p>
						Il Presidente, il Tesoriere e tutti i componenti di organi
						collegiali del comitato cessano dalla carica per dimissioni,
						impedimento permanente, scadenza di mandato o morte.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 5.3
					</h5>
					<p>
						I membri del Consiglio direttivo cessano dalla carica altresì ove ne
						sia deliberata la sostituzione da parte dell’Assemblea.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6
					</h5>
					<p>
						La partecipazione alla Plenaria dei soci ordinari e dei soci
						sostenitori è diritto non delegabile di tutti i soci.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6.1
					</h5>
					<p>
						La Plenaria è convocata dal Presidente con comunicazione a mezzo
						posta elettronica da recapitarsi a tutti i soci almeno 5 giorni
						prima della riunione ed è validamente costituita quando siano
						intervenuti almeno un terzo dei soci.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6.2
					</h5>
					<p>
						La Plenaria è un organo consultivo e propositivo che delibera con il
						voto favorevole della maggioranza dei presenti.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6.3
					</h5>
					<p>
						La Plenaria approva la relazione dell’Assemblea sulle attività
						svolte nell’anno precedente dal Comitato entro il 30 Giugno di ogni
						anno e ha facoltà di presentare proposte progettuali, modifiche
						organizzative e gestionali all’Assemblea.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6.4
					</h5>
					<p>
						In relazione all’adozione degli atti di cui all’art. 6.3 la Plenaria
						è validamente costituita quando siano intervenuti almeno la metà dei
						soci ordinari.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6.5
					</h5>
					<p>
						Le riunioni potranno validamente svolgersi anche in audio e/o
						videoconferenza, purché nella convocazione sia esplicitato l’impiego
						di tali mezzi.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7
					</h5>
					<p>
						La partecipazione all’Assemblea è diritto non delegabile di tutti i
						soci ordinari.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.1
					</h5>
					<p>
						L’Assemblea dei soci ordinari è convocata dal Presidente con
						comunicazione a mezzo posta elettronica da recapitarsi a tutti i
						soci almeno 5 giorni prima della riunione ed è validamente
						costituita quando siano intervenuti almeno un terzo dei soci
						ordinari, che rappresentino almeno la metà del Consiglio direttivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.2
					</h5>
					<p>
						L’Assemblea è altresì convocata quando ne fanno richiesta almeno 1/3
						dei soci ordinari.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.3
					</h5>
					<p>
						L’Assemblea delibera con il voto favorevole della maggioranza dei
						presenti, purché si siano espressi favorevolmente almeno la metà dei
						membri del Consiglio direttivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.4
					</h5>
					<p>
						L’Assemblea dei soci ordinari nomina i membri del Consiglio
						direttivo, scegliendoli tra i soci ordinari candidati.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.5
					</h5>
					<p>
						L’Assemblea, a fronte delle dimissioni, dell’impedimento permanente
						o della morte di un membro del Consiglio direttivo ovvero in
						presenza di gravi e comprovati motivi, ne delibera la sostituzione
						indicendo delle elezioni straordinarie.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.6
					</h5>
					<p>
						L’Assemblea approva il rendiconto consuntivo di gestione dell’anno
						precedente sottopostole dal Consiglio direttivo entro il 30 Aprile
						di ogni anno e delibera su tutte le altre materie che le sono
						espressamente demandate dalla legge e dal presente statuto.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.7
					</h5>
					<p>
						L’Assemblea è altresì competente, previa delibera conforme del
						Consiglio direttivo, all’approvazione delle modifiche del presente
						statuto, allo scioglimento del Comitato e alla nomina del
						liquidatore, che, salvo diverse decisioni, è individuato nel
						Tesoriere.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.8
					</h5>
					<p>
						In relazione all’adozione di tali atti l’Assemblea è validamente
						costituita quando siano intervenuti almeno la metà dei soci
						ordinari, che rappresentino almeno i due terzi dei membri del
						Consiglio direttivo, e delibera con il voto favorevole dei due terzi
						dei presenti, purché si siano espressi favorevolmente almeno la metà
						dei membri del Consiglio direttivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.9
					</h5>
					<p>
						Le riunioni potranno validamente svolgersi anche in audio e/o
						videoconferenza, purché nella convocazione sia esplicitato l’impiego
						di tali mezzi.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8
					</h5>
					<p>
						Fanno parte del Consiglio direttivo il Presidente, che lo presiede,
						il Tesoriere ed ulteriori otto membri.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.1
					</h5>
					<p>
						Al Consiglio direttivo sono demandate le deliberazioni circa il
						coinvolgimento degli Sponsor e l’invito degli Speaker, nonché tutte
						le attività di amministrazione e gestione, anche straordinaria, che
						non siano espressamente riservate dalla legge o dal presente statuto
						alla competenza dell’assemblea dei soci ordinari.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.2
					</h5>
					<p>
						Il Consiglio direttivo nomina entro 3 mesi precedenti alla scadenza
						il nuovo Presidente ed il nuovo Tesoriere tra i propri membri che
						rivestano la qualifica di soci ordinari da almeno 6 mesi e ne
						dispone la sostituzione in caso di cessazione dalla carica o a
						fronte di gravi e comprovati motivi.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.3
					</h5>
					<p>
						l Consiglio direttivo è competente alla predisposizione del testo
						delle modifiche del presente statuto ed alla sottoposizione
						all’Assemblea della delibera di scioglimento del Comitato.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.4
					</h5>
					<p>
						Il Consiglio direttivo è convocato dal Presidente con comunicazione
						a mezzo posta elettronica da recapitarsi almeno 2 giorni prima della
						riunione.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.5
					</h5>
					<p>
						Il Consiglio direttivo è validamente costituito con l’intervento di
						almeno la metà dei componenti.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.6
					</h5>
					<p>
						Tutte le decisioni sono adottate a maggioranza dei presenti con
						parere favorevole di uno tra il Presidente e il Tesoriere; in caso
						di parità, il voto del Presidente vale doppio.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.7
					</h5>
					<p>
						l Consiglio direttivo è validamente costituito anche in assenza di
						convocazione quando siano presenti i due terzi dei suoi componenti.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.8
					</h5>
					<p>
						In caso di assenza del Presidente, il Consiglio direttivo è
						presieduto dal Tesoriere e, in sua assenza, dal componente più
						anziano presente alla riunione.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.9
					</h5>
					<p>
						Il Consiglio direttivo delibera, con il quorum di cui all’art. 9.6,
						sulle domande di ammissione di nuovi soci ordinari e di nuovi soci
						sostenitori, sottoponendo la delibera alla ratifica dell’Assemblea
						dei soci ordinari.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.10
					</h5>
					<p>
						I membri del Consiglio direttivo hanno durata di 1 anno rinnovabile
						dall’Assemblea per un massimo di 2 volte ogni anno e comunque fino
						al compimento di n. 2 eventi ufficiali “TEDx” in qualità di membri
						del Consiglio direttivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.11
					</h5>
					<p>
						Tutte le decisioni del Consiglio direttivo sono subordinate al
						rispetto delle procedure tecnico-amministrative e dei regolamenti
						vigenti della Sapienza Università di Roma.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 9
					</h5>
					<p>
						Al Presidente spetta la rappresentanza legale ed istituzionale del
						Comitato.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 9.1
					</h5>
					<p>
						Il Presidente promuove ed indirizza l’attività del Consiglio
						direttivo e vigila sul perseguimento dello scopo sociale.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 9.2
					</h5>
					<p>
						Il Presidente resta in carica fino al compimento di n. 2 eventi
						ufficiali “TEDx” e comunque per un massimo di 36 mesi dalla nomina
						mantenendo la qualità di socio ordinario per tutta la durata del
						mandato in deroga all’art. 4.2.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 9.3
					</h5>
					<p>
						Il Presidente uscente mantiene la propria qualifica fino al
						completamento del passaggio di consegne.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10
					</h5>
					<p>
						Il Tesoriere cura l’esatta attuazione delle delibere di tutti gli
						organi collegiali in conformità alla legge e al presente statuto e
						deve informare il Presidente su tutte le questioni che rivestono
						un’importanza sostanziale per il lavoro del Comitato.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10.1
					</h5>
					<p>Il Tesoriere è responsabile della cassa del Comitato.</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10.2
					</h5>
					<p>
						Egli cura la tenuta delle scritture contabili, disbriga gli
						adempimenti relativi ai pagamenti e agli incassi con potere di
						rappresentanza nel rilascio delle relative quietanze.
					</p>{" "}
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10.3
					</h5>
					<p>
						Il Tesoriere è altresì autorizzato ad aprire, chiudere e gestire
						rapporti di conto corrente bancario o postale.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10.4
					</h5>
					<p>
						Il Tesoriere resta in carica fino al compimento di n. 2 eventi
						ufficiali “TEDx” e comunque per un massimo di 36 mesi dalla nomina
						mantenendo la qualità di socio ordinario per tutta la durata del
						mandato in deroga all’art. 4.2.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10.5
					</h5>
					<p>
						Il Tesoriere uscente mantiene la propria qualifica fino al
						completamento del passaggio di consegne.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 11
					</h5>
					<p>
						Il Licenziatario è intestatario della licenza ufficiale “TEDx”
						rilasciata annualmente dalla TED Conferences LLC – TED Foundation.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 11.1
					</h5>
					<p>
						Il Licenziatario è interlocutore tra il Comitato e la TED
						Conferences LLC – TED Foundation.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 11.2
					</h5>
					<p>
						l Licenziatario è designato di volta in volta dalla Magnifica
						Rettrice della Sapienza Università di Roma e resta in carica fino a
						nuova designazione.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 11.3
					</h5>
					<p>
						Il Licenziatario delega al Comitato la gestione formale e
						sostanziale della licenza ufficiale “TEDx”, salvo quanto disposto
						dall’art. 11, ai fini del perseguimento dell’oggetto sociale nei
						rapporti con soggetti terzi.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 12
					</h5>
					<p>
						Lo scioglimento del Comitato è deliberato dall’Assemblea, secondo le
						modalità di cui all’art. 7 del presente Statuto, previa delibera
						conforme del Consiglio direttivo, all’atto del raggiungimento dello
						scopo sociale o qualora divenga impossibile raggiungere lo stesso
						ovvero qualora ne facciano richiesta almeno due terzi dei membri del
						Consiglio Direttivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 13
					</h5>
					<p>
						Il patrimonio del Comitato è costituito da tutti i beni, mobili e
						immobili, a qualunque titolo percepiti ed in particolare dalle
						oblazioni dei sottoscrittori della raccolta fondi, dalle somme
						versate dagli sponsor di ciascun evento e dall’eventuale somma
						versata, a titolo di contribuzione liberale, all’atto della
						partecipazione del pubblico a ciascun evento. In esito allo
						scioglimento del Comitato, salvo il pagamento di debiti e
						finanziamenti ricevuti da terzi, il patrimonio residuo, previa
						delibera del Consiglio Direttivo, è interamente devoluto agli enti,
						associazioni o comitati che dichiarino di voler perseguire scopi
						analoghi o affini, individuati in sede di scioglimento.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 14
					</h5>
					<p>
						Per quanto non espressamente previsto nel presente statuto si
						applicano gli artt. 39 e seguenti del Codice civile.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 15
					</h5>
					<p>
						Nel primo anno successivo alla costituzione del Comitato, il
						Consiglio direttivo è composto dai soggetti designati nell’atto
						costitutivo; nel medesimo lasso temporale sono nominati Presidente e
						Tesoriere i soci promotori individuati nell’atto costitutivo.
					</p>
					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 15.1
					</h5>
					<p>
						Entro il 30 Giugno di ogni anno è convocata, in via ordinaria,
						l’Assemblea dei soci ordinari.
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
						marginBottom: "5px",
						display: "grid",
						placeItems: "center",
						marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
					}}
				>
					<h1
						className="font-weight-bold mt-5"
						style={{
							fontSize: "15px",
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						STATUTO
					</h1>

					<div style={{ textAlign: "center", padding: "20px" }}>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 1
						</h5>
						<p>
							È costituito ai sensi degli articoli 39 e seguenti del Codice
							civile, Il “Comitato TEDxSapienza”.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 2
						</h5>
						<p>
							Il comitato ha come scopo l’organizzazione periodica di eventi
							“TEDx” ospitati dalla Sapienza Università di Roma.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 2.1
						</h5>
						<p>
							A tal fine il comitato, nel rispetto delle linee guida della TED
							Foundation relative all’organizzazione degli eventi “TEDx”, potrà
							collaborare con altre organizzazioni, enti, soggetti con finalità
							compatibili alla propria ed inoltre potrà partecipare ad ogni
							iniziativa culturale, mediatica e di informazione in grado di
							promuovere e dare visibilità a ciascun evento.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 2.2
						</h5>
						<p>
							Per il perseguimento delle finalità statutarie il Comitato, oltre
							a promuovere nei confronti del pubblico apposita raccolta fondi,
							può svolgere qualsiasi attività di natura commerciale, mobiliare,
							immobiliare e finanziaria necessaria alla raccolta delle risorse
							da impiegare nell’organizzazione degli eventi “TEDx”.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 3
						</h5>
						<p>
							Il Comitato ha sede in Roma (RM) alla Via Colli sul Velino n. 41
							ed ha durata limitata al raggiungimento dello scopo sociale.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 4
						</h5>
						<p>
							La compagine sociale è composta dai “soci ordinari” (o anche
							“organizing member”) e dai “soci sostenitori” (o anche “supporting
							member”).
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 4.1
						</h5>
						<p>
							Sono “soci ordinari” i sottoscrittori dell’atto costitutivo,
							nonché i “soci sostenitori” da almeno 6 mesi che abbiano fatto
							richiesta di adesione quali “soci ordinari” e siano stati
							accettati dal Consiglio direttivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 4.2
						</h5>
						<p>
							I soci ordinari hanno durata di 1 anno rinnovabile dal Consiglio
							direttivo per un massimo di 2 volte entro il 30 Giugno di ogni
							anno e comunque fino al compimento di n. 2 eventi ufficiali “TEDx”
							in qualità di soci ordinari, al termine del quale assumono la
							qualifica di soci sostenitori.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 4.3
						</h5>
						<p>
							Tutti gli altri soggetti, persone fisiche e giuridiche, che
							abbiano fatto richiesta di associarsi e siano stati ammessi con le
							modalità previste nel presente statuto, assumono la qualifica di
							“soci sostenitori”.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 4.4
						</h5>
						<p>
							Non assumono la qualifica di soci i soggetti che contribuiscano
							alla raccolta fondi attraverso la sottoscrizione delle oblazioni.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 5.
						</h5>
						<p>
							Sono organi del comitato: l’Assemblea dei soci ordinari e dei soci
							sostenitori in seguito definita “Plenaria” (o anche “Event Team”),
							l’Assemblea dei soci ordinari in seguito definita “Assemblea” (o
							anche “Organizing Team”), il Consiglio direttivo (o anche
							“Board”), il Presidente (o anche “Organizer”), il Tesoriere (o
							anche “Co-Organizer”), il Licenziatario (o anche “Licensee”).
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 5.1
						</h5>
						<p>
							Tutti gli organi restano in carica fino allo scioglimento, salva
							la facoltà di sostituire i soggetti titolari delle cariche secondo
							le previsioni del presente statuto.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 5.2
						</h5>
						<p>
							Il Presidente, il Tesoriere e tutti i componenti di organi
							collegiali del comitato cessano dalla carica per dimissioni,
							impedimento permanente, scadenza di mandato o morte.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 5.3
						</h5>
						<p>
							I membri del Consiglio direttivo cessano dalla carica altresì ove
							ne sia deliberata la sostituzione da parte dell’Assemblea.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6
						</h5>
						<p>
							La partecipazione alla Plenaria dei soci ordinari e dei soci
							sostenitori è diritto non delegabile di tutti i soci.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6.1
						</h5>
						<p>
							La Plenaria è convocata dal Presidente con comunicazione a mezzo
							posta elettronica da recapitarsi a tutti i soci almeno 5 giorni
							prima della riunione ed è validamente costituita quando siano
							intervenuti almeno un terzo dei soci.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6.2
						</h5>
						<p>
							La Plenaria è un organo consultivo e propositivo che delibera con
							il voto favorevole della maggioranza dei presenti.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6.3
						</h5>
						<p>
							La Plenaria approva la relazione dell’Assemblea sulle attività
							svolte nell’anno precedente dal Comitato entro il 30 Giugno di
							ogni anno e ha facoltà di presentare proposte progettuali,
							modifiche organizzative e gestionali all’Assemblea.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6.4
						</h5>
						<p>
							In relazione all’adozione degli atti di cui all’art. 6.3 la
							Plenaria è validamente costituita quando siano intervenuti almeno
							la metà dei soci ordinari.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6.5
						</h5>
						<p>
							Le riunioni potranno validamente svolgersi anche in audio e/o
							videoconferenza, purché nella convocazione sia esplicitato
							l’impiego di tali mezzi.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7
						</h5>
						<p>
							La partecipazione all’Assemblea è diritto non delegabile di tutti
							i soci ordinari.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.1
						</h5>
						<p>
							L’Assemblea dei soci ordinari è convocata dal Presidente con
							comunicazione a mezzo posta elettronica da recapitarsi a tutti i
							soci almeno 5 giorni prima della riunione ed è validamente
							costituita quando siano intervenuti almeno un terzo dei soci
							ordinari, che rappresentino almeno la metà del Consiglio
							direttivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.2
						</h5>
						<p>
							L’Assemblea è altresì convocata quando ne fanno richiesta almeno
							1/3 dei soci ordinari.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.3
						</h5>
						<p>
							L’Assemblea delibera con il voto favorevole della maggioranza dei
							presenti, purché si siano espressi favorevolmente almeno la metà
							dei membri del Consiglio direttivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.4
						</h5>
						<p>
							L’Assemblea dei soci ordinari nomina i membri del Consiglio
							direttivo, scegliendoli tra i soci ordinari candidati.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.5
						</h5>
						<p>
							L’Assemblea, a fronte delle dimissioni, dell’impedimento
							permanente o della morte di un membro del Consiglio direttivo
							ovvero in presenza di gravi e comprovati motivi, ne delibera la
							sostituzione indicendo delle elezioni straordinarie.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.6
						</h5>
						<p>
							L’Assemblea approva il rendiconto consuntivo di gestione dell’anno
							precedente sottopostole dal Consiglio direttivo entro il 30 Aprile
							di ogni anno e delibera su tutte le altre materie che le sono
							espressamente demandate dalla legge e dal presente statuto.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.7
						</h5>
						<p>
							L’Assemblea è altresì competente, previa delibera conforme del
							Consiglio direttivo, all’approvazione delle modifiche del presente
							statuto, allo scioglimento del Comitato e alla nomina del
							liquidatore, che, salvo diverse decisioni, è individuato nel
							Tesoriere.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.8
						</h5>
						<p>
							In relazione all’adozione di tali atti l’Assemblea è validamente
							costituita quando siano intervenuti almeno la metà dei soci
							ordinari, che rappresentino almeno i due terzi dei membri del
							Consiglio direttivo, e delibera con il voto favorevole dei due
							terzi dei presenti, purché si siano espressi favorevolmente almeno
							la metà dei membri del Consiglio direttivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.9
						</h5>
						<p>
							Le riunioni potranno validamente svolgersi anche in audio e/o
							videoconferenza, purché nella convocazione sia esplicitato
							l’impiego di tali mezzi.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8
						</h5>
						<p>
							Fanno parte del Consiglio direttivo il Presidente, che lo
							presiede, il Tesoriere ed ulteriori otto membri.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.1
						</h5>
						<p>
							Al Consiglio direttivo sono demandate le deliberazioni circa il
							coinvolgimento degli Sponsor e l’invito degli Speaker, nonché
							tutte le attività di amministrazione e gestione, anche
							straordinaria, che non siano espressamente riservate dalla legge o
							dal presente statuto alla competenza dell’assemblea dei soci
							ordinari.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.2
						</h5>
						<p>
							Il Consiglio direttivo nomina entro 3 mesi precedenti alla
							scadenza il nuovo Presidente ed il nuovo Tesoriere tra i propri
							membri che rivestano la qualifica di soci ordinari da almeno 6
							mesi e ne dispone la sostituzione in caso di cessazione dalla
							carica o a fronte di gravi e comprovati motivi.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.3
						</h5>
						<p>
							l Consiglio direttivo è competente alla predisposizione del testo
							delle modifiche del presente statuto ed alla sottoposizione
							all’Assemblea della delibera di scioglimento del Comitato.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.4
						</h5>
						<p>
							Il Consiglio direttivo è convocato dal Presidente con
							comunicazione a mezzo posta elettronica da recapitarsi almeno 2
							giorni prima della riunione.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.5
						</h5>
						<p>
							Il Consiglio direttivo è validamente costituito con l’intervento
							di almeno la metà dei componenti.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.6
						</h5>
						<p>
							Tutte le decisioni sono adottate a maggioranza dei presenti con
							parere favorevole di uno tra il Presidente e il Tesoriere; in caso
							di parità, il voto del Presidente vale doppio.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.7
						</h5>
						<p>
							l Consiglio direttivo è validamente costituito anche in assenza di
							convocazione quando siano presenti i due terzi dei suoi
							componenti.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.8
						</h5>
						<p>
							In caso di assenza del Presidente, il Consiglio direttivo è
							presieduto dal Tesoriere e, in sua assenza, dal componente più
							anziano presente alla riunione.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.9
						</h5>
						<p>
							Il Consiglio direttivo delibera, con il quorum di cui all’art.
							9.6, sulle domande di ammissione di nuovi soci ordinari e di nuovi
							soci sostenitori, sottoponendo la delibera alla ratifica
							dell’Assemblea dei soci ordinari.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.10
						</h5>
						<p>
							I membri del Consiglio direttivo hanno durata di 1 anno
							rinnovabile dall’Assemblea per un massimo di 2 volte ogni anno e
							comunque fino al compimento di n. 2 eventi ufficiali “TEDx” in
							qualità di membri del Consiglio direttivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.11
						</h5>
						<p>
							Tutte le decisioni del Consiglio direttivo sono subordinate al
							rispetto delle procedure tecnico-amministrative e dei regolamenti
							vigenti della Sapienza Università di Roma.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 9
						</h5>
						<p>
							Al Presidente spetta la rappresentanza legale ed istituzionale del
							Comitato.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 9.1
						</h5>
						<p>
							Il Presidente promuove ed indirizza l’attività del Consiglio
							direttivo e vigila sul perseguimento dello scopo sociale.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 9.2
						</h5>
						<p>
							Il Presidente resta in carica fino al compimento di n. 2 eventi
							ufficiali “TEDx” e comunque per un massimo di 36 mesi dalla nomina
							mantenendo la qualità di socio ordinario per tutta la durata del
							mandato in deroga all’art. 4.2.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 9.3
						</h5>
						<p>
							Il Presidente uscente mantiene la propria qualifica fino al
							completamento del passaggio di consegne.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10
						</h5>
						<p>
							Il Tesoriere cura l’esatta attuazione delle delibere di tutti gli
							organi collegiali in conformità alla legge e al presente statuto e
							deve informare il Presidente su tutte le questioni che rivestono
							un’importanza sostanziale per il lavoro del Comitato.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10.1
						</h5>
						<p>Il Tesoriere è responsabile della cassa del Comitato.</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10.2
						</h5>
						<p>
							Egli cura la tenuta delle scritture contabili, disbriga gli
							adempimenti relativi ai pagamenti e agli incassi con potere di
							rappresentanza nel rilascio delle relative quietanze.
						</p>{" "}
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10.3
						</h5>
						<p>
							Il Tesoriere è altresì autorizzato ad aprire, chiudere e gestire
							rapporti di conto corrente bancario o postale.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10.4
						</h5>
						<p>
							Il Tesoriere resta in carica fino al compimento di n. 2 eventi
							ufficiali “TEDx” e comunque per un massimo di 36 mesi dalla nomina
							mantenendo la qualità di socio ordinario per tutta la durata del
							mandato in deroga all’art. 4.2.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10.5
						</h5>
						<p>
							Il Tesoriere uscente mantiene la propria qualifica fino al
							completamento del passaggio di consegne.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 11
						</h5>
						<p>
							Il Licenziatario è intestatario della licenza ufficiale “TEDx”
							rilasciata annualmente dalla TED Conferences LLC – TED Foundation.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 11.1
						</h5>
						<p>
							Il Licenziatario è interlocutore tra il Comitato e la TED
							Conferences LLC – TED Foundation.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 11.2
						</h5>
						<p>
							l Licenziatario è designato di volta in volta dalla Magnifica
							Rettrice della Sapienza Università di Roma e resta in carica fino
							a nuova designazione.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 11.3
						</h5>
						<p>
							Il Licenziatario delega al Comitato la gestione formale e
							sostanziale della licenza ufficiale “TEDx”, salvo quanto disposto
							dall’art. 11, ai fini del perseguimento dell’oggetto sociale nei
							rapporti con soggetti terzi.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 12
						</h5>
						<p>
							Lo scioglimento del Comitato è deliberato dall’Assemblea, secondo
							le modalità di cui all’art. 7 del presente Statuto, previa
							delibera conforme del Consiglio direttivo, all’atto del
							raggiungimento dello scopo sociale o qualora divenga impossibile
							raggiungere lo stesso ovvero qualora ne facciano richiesta almeno
							due terzi dei membri del Consiglio Direttivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 13
						</h5>
						<p>
							Il patrimonio del Comitato è costituito da tutti i beni, mobili e
							immobili, a qualunque titolo percepiti ed in particolare dalle
							oblazioni dei sottoscrittori della raccolta fondi, dalle somme
							versate dagli sponsor di ciascun evento e dall’eventuale somma
							versata, a titolo di contribuzione liberale, all’atto della
							partecipazione del pubblico a ciascun evento. In esito allo
							scioglimento del Comitato, salvo il pagamento di debiti e
							finanziamenti ricevuti da terzi, il patrimonio residuo, previa
							delibera del Consiglio Direttivo, è interamente devoluto agli
							enti, associazioni o comitati che dichiarino di voler perseguire
							scopi analoghi o affini, individuati in sede di scioglimento.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 14
						</h5>
						<p>
							Per quanto non espressamente previsto nel presente statuto si
							applicano gli artt. 39 e seguenti del Codice civile.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 15
						</h5>
						<p>
							Nel primo anno successivo alla costituzione del Comitato, il
							Consiglio direttivo è composto dai soggetti designati nell’atto
							costitutivo; nel medesimo lasso temporale sono nominati Presidente
							e Tesoriere i soci promotori individuati nell’atto costitutivo.
						</p>
						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 15.1
						</h5>
						<p>
							Entro il 30 Giugno di ogni anno è convocata, in via ordinaria,
							l’Assemblea dei soci ordinari.
						</p>
					</div>
				</div>
			</>
		);
	}
}
