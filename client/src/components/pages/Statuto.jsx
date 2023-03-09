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
						Art. 1.
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
						Art. 2.
					</h5>
					<p>
						Il comitato ha come scopo l'organizzazione di eventi “TEDx” presso
						la Sapienza Università di Roma. A tal fine il comitato, nel rispetto
						delle linee guida relative all'organizzazione degli eventi “TEDx”,
						potrà collaborare con altre organizzazioni, enti, soggetti con
						finalità compatibili alla propria ed inoltre potrà partecipare ad
						ogni iniziativa culturale, mediatica e di informazione in grado di
						promuovere e dare visibilità a ciascun evento. Per il perseguimento
						delle finalità statutarie il Comitato, oltre a promuovere nei
						confronti del pubblico apposita raccolta fondi, può svolgere
						qualsiasi attività di natura commerciale, mobiliare, immobiliare e
						finanziaria necessaria alla raccolta delle risorse da impiegare
						nell'organizzazione degli eventi “TEDx”.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 3.
					</h5>
					<p>
						Il Comitato ha sede presso la Sapienza Università di Roma in
						Piazzale Aldo Moro n. 5, 00185 Roma (RM), ed ha durata limitata al
						raggiungimento dello scopo sociale.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 4.
					</h5>
					<p>
						La compagine sociale è composta dai “soci promotori” e dai “soci
						ordinari”. Sono “soci promotori” i sottoscrittori dell'atto
						costitutivo. Tutti gli altri soggetti, persone fisiche e giuridiche,
						che abbiano fatto richiesta di associarsi e siano stati ammessi con
						le modalità previste nel presente statuto, assumono la qualifica di
						“soci ordinari”. Non assumono la qualifica di soci i soggetti che
						contribuiscano alla raccolta fondi attraverso la sottoscrizione
						delle oblazioni.
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
						Sono organi del comitato: l'Assemblea, il Consiglio direttivo, il
						Presidente, il Tesoriere. Tutti gli organi restano in carica fino
						allo scioglimento, salva la facoltà di sostituire i soggetti
						titolari delle cariche secondo le previsioni del presente statuto.
						Il Presidente, il Tesoriere e tutti i componenti di organi
						collegiali del comitato cessano dalla carica per dimissioni,
						impedimento permanente o morte. I membri del Consiglio direttivo
						cessano dalla carica altresì ove ne sia deliberata la sostituzione
						da parte dell'Assemblea.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 6.
					</h5>
					<p>
						La partecipazione all’Assemblea è diritto non delegabile di tutti i
						soci. L’Assemblea è convocata dal Presidente con comunicazione a
						mezzo fax o posta elettronica da recapitarsi a tutti i soci almeno 5
						giorni prima della riunione ed è validamente costituita quando siano
						intervenuti almeno un terzo dei soci, che rappresentino almeno la
						metà dei soci promotori. L’Assemblea delibera con il voto favorevole
						della maggioranza dei presenti, purché si siano espressi
						favorevolmente almeno la metà dei soci promotori intervenuti.
						L’Assemblea nomina i membri del Consiglio direttivo, scegliendoli,
						per almeno la metà, tra i soci promotori. L’Assemblea, a fronte
						delle dimissioni, dell’impedimento permanente o della morte di un
						membro del Consiglio direttivo ovvero in presenza di gravi e
						comprovati motivi, ne delibera la sostituzione. L’Assemblea approva
						il rendiconto di gestione sottopostole dal Consiglio direttivo entro
						il 31 dicembre di ogni anno e delibera su tutte le altre materie che
						le sono espressamente demandate dalla legge e dal presente statuto.
						L’Assemblea è altresì competente, previa delibera conforme del
						Consiglio direttivo, all’approvazione delle modifiche del presente
						statuto, allo scioglimento del Comitato e alla nomina del
						liquidatore, che, salvo diverse decisioni, è individuato nel
						Tesoriere. In relazione all’adozione di tali atti l’Assemblea è
						validamente costituita quando siano intervenuti almeno la metà dei
						soci, che rappresentino almeno i due terzi dei soci promotori, e
						delibera con il voto favorevole dei due terzi dei presenti, purché
						si siano espressi favorevolmente almeno la metà dei soci promotori
						intervenuti. Le riunioni potranno validamente svolgersi anche in
						audio e/o videoconferenza, purché nella convocazione sia esplicitato
						l’impiego di tali mezzi.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 7.
					</h5>
					<p>
						Fanno parte del Consiglio direttivo il Presidente, che lo presiede,
						il Tesoriere ed ulteriori quattro membri. Al Consiglio direttivo
						sono demandate tutte le attività di amministrazione e gestione,
						anche straordinaria, che non siano espressamente riservate dalla
						legge o dal presente statuto alla competenza dell’assemblea dei
						soci. Il Consiglio direttivo nomina il Presidente ed il Tesoriere
						tra i propri membri che rivestano la qualifica di soci promotori e
						ne dispone la sostituzione in caso di cessazione dalla carica o a
						fronte di gravi e comprovati motivi. Il Consiglio direttivo è
						competente alla predisposizione del testo delle modifiche del
						presente statuto ed alla sottoposizione all’Assemblea della delibera
						di scioglimento del Comitato. Il Consiglio direttivo è convocato dal
						Presidente con comunicazione a mezzo fax o posta elettronica da
						recapitarsi almeno 2 giorni prima della riunione. Il Consiglio
						direttivo è validamente costituito con l’intervento di almeno la
						metà dei componenti. Tutte le decisioni sono adottate a maggioranza
						dei presenti; in caso di parità, il voto del Presidente vale doppio.
						Il Consiglio direttivo è validamente costituito anche in assenza di
						convocazione quando siano presenti i due terzi dei suoi componenti.
						In caso di assenza del Presidente, il Consiglio direttivo è
						presieduto dal Tesoriere e, in sua assenza, dal componente più
						anziano presente alla riunione. Il Consiglio direttivo delibera, con
						il quorum di cui al presente articolo, sulle domande di ammissione
						di nuovi soci ordinari, sottoponendo la delibera alla ratifica
						dell’Assemblea.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 8.
					</h5>
					<p>
						Al Presidente spetta la rappresentanza legale ed istituzionale del
						Comitato. Il Presidente promuove l’attività del Consiglio direttivo
						e vigila sul perseguimento dello scopo sociale.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 9.
					</h5>
					<p>
						Il Tesoriere cura l’esatta attuazione delle delibere di tutti gli
						organi collegiali in conformità alla legge e al presente statuto e
						deve informare il Presidente su tutte le questioni che rivestono
						un’importanza sostanziale per il lavoro del Comitato. Il Tesoriere è
						responsabile della cassa del Comitato. Egli cura la tenuta delle
						scritture contabili, disbriga gli adempimenti relativi ai pagamenti
						e agli incassi con potere di rappresentanza nel rilascio delle
						relative quietanze. Il Tesoriere è altresì autorizzato ad aprire,
						chiudere e gestire rapporti di conto corrente bancario o postale.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 10.
					</h5>
					<p>
						Lo scioglimento del Comitato è deliberato dall’Assemblea, secondo le
						modalità di cui all’art. 6 del presente Statuto, previa delibera
						conforme del Consiglio direttivo, all’atto del raggiungimento dello
						scopo sociale o qualora divenga impossibile raggiungere lo stesso
						ovvero qualora ne facciano richiesta almeno due terzi dei soci
						promotori.
					</p>

					<h5
						style={{
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						Art. 11.
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
						Art. 12.
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
						Art. 13.
					</h5>
					<p>
						Nel primo anno successivo alla costituzione del Comitato, il
						Consiglio direttivo è composto dai soggetti designati nell’atto
						costitutivo; nel medesimo lasso temporale sono nominati Presidente e
						Tesoriere i soci promotori individuati nell’atto costitutivo. Entro
						tre mesi dalla scadenza del termine di cui al precedente comma dovrà
						essere convocata, in via straordinaria, l’Assemblea per la nomina
						dei nuovi membri del Consiglio direttivo.
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
							Art. 1.
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
							Art. 2.
						</h5>
						<p>
							Il comitato ha come scopo l'organizzazione di eventi “TEDx” presso
							la Sapienza Università di Roma. A tal fine il comitato, nel
							rispetto delle linee guida relative all'organizzazione degli
							eventi “TEDx”, potrà collaborare con altre organizzazioni, enti,
							soggetti con finalità compatibili alla propria ed inoltre potrà
							partecipare ad ogni iniziativa culturale, mediatica e di
							informazione in grado di promuovere e dare visibilità a ciascun
							evento. Per il perseguimento delle finalità statutarie il
							Comitato, oltre a promuovere nei confronti del pubblico apposita
							raccolta fondi, può svolgere qualsiasi attività di natura
							commerciale, mobiliare, immobiliare e finanziaria necessaria alla
							raccolta delle risorse da impiegare nell'organizzazione degli
							eventi “TEDx”.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 3.
						</h5>
						<p>
							Il Comitato ha sede presso la Sapienza Università di Roma in
							Piazzale Aldo Moro n. 5, 00185 Roma (RM), ed ha durata limitata al
							raggiungimento dello scopo sociale.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 4.
						</h5>
						<p>
							La compagine sociale è composta dai “soci promotori” e dai “soci
							ordinari”. Sono “soci promotori” i sottoscrittori dell'atto
							costitutivo. Tutti gli altri soggetti, persone fisiche e
							giuridiche, che abbiano fatto richiesta di associarsi e siano
							stati ammessi con le modalità previste nel presente statuto,
							assumono la qualifica di “soci ordinari”. Non assumono la
							qualifica di soci i soggetti che contribuiscano alla raccolta
							fondi attraverso la sottoscrizione delle oblazioni.
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
							Sono organi del comitato: l'Assemblea, il Consiglio direttivo, il
							Presidente, il Tesoriere. Tutti gli organi restano in carica fino
							allo scioglimento, salva la facoltà di sostituire i soggetti
							titolari delle cariche secondo le previsioni del presente statuto.
							Il Presidente, il Tesoriere e tutti i componenti di organi
							collegiali del comitato cessano dalla carica per dimissioni,
							impedimento permanente o morte. I membri del Consiglio direttivo
							cessano dalla carica altresì ove ne sia deliberata la sostituzione
							da parte dell'Assemblea.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 6.
						</h5>
						<p>
							La partecipazione all’Assemblea è diritto non delegabile di tutti
							i soci. L’Assemblea è convocata dal Presidente con comunicazione a
							mezzo fax o posta elettronica da recapitarsi a tutti i soci almeno
							5 giorni prima della riunione ed è validamente costituita quando
							siano intervenuti almeno un terzo dei soci, che rappresentino
							almeno la metà dei soci promotori. L’Assemblea delibera con il
							voto favorevole della maggioranza dei presenti, purché si siano
							espressi favorevolmente almeno la metà dei soci promotori
							intervenuti. L’Assemblea nomina i membri del Consiglio direttivo,
							scegliendoli, per almeno la metà, tra i soci promotori.
							L’Assemblea, a fronte delle dimissioni, dell’impedimento
							permanente o della morte di un membro del Consiglio direttivo
							ovvero in presenza di gravi e comprovati motivi, ne delibera la
							sostituzione. L’Assemblea approva il rendiconto di gestione
							sottopostole dal Consiglio direttivo entro il 31 dicembre di ogni
							anno e delibera su tutte le altre materie che le sono
							espressamente demandate dalla legge e dal presente statuto.
							L’Assemblea è altresì competente, previa delibera conforme del
							Consiglio direttivo, all’approvazione delle modifiche del presente
							statuto, allo scioglimento del Comitato e alla nomina del
							liquidatore, che, salvo diverse decisioni, è individuato nel
							Tesoriere. In relazione all’adozione di tali atti l’Assemblea è
							validamente costituita quando siano intervenuti almeno la metà dei
							soci, che rappresentino almeno i due terzi dei soci promotori, e
							delibera con il voto favorevole dei due terzi dei presenti, purché
							si siano espressi favorevolmente almeno la metà dei soci promotori
							intervenuti. Le riunioni potranno validamente svolgersi anche in
							audio e/o videoconferenza, purché nella convocazione sia
							esplicitato l’impiego di tali mezzi.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 7.
						</h5>
						<p>
							Fanno parte del Consiglio direttivo il Presidente, che lo
							presiede, il Tesoriere ed ulteriori quattro membri. Al Consiglio
							direttivo sono demandate tutte le attività di amministrazione e
							gestione, anche straordinaria, che non siano espressamente
							riservate dalla legge o dal presente statuto alla competenza
							dell’assemblea dei soci. Il Consiglio direttivo nomina il
							Presidente ed il Tesoriere tra i propri membri che rivestano la
							qualifica di soci promotori e ne dispone la sostituzione in caso
							di cessazione dalla carica o a fronte di gravi e comprovati
							motivi. Il Consiglio direttivo è competente alla predisposizione
							del testo delle modifiche del presente statuto ed alla
							sottoposizione all’Assemblea della delibera di scioglimento del
							Comitato. Il Consiglio direttivo è convocato dal Presidente con
							comunicazione a mezzo fax o posta elettronica da recapitarsi
							almeno 2 giorni prima della riunione. Il Consiglio direttivo è
							validamente costituito con l’intervento di almeno la metà dei
							componenti. Tutte le decisioni sono adottate a maggioranza dei
							presenti; in caso di parità, il voto del Presidente vale doppio.
							Il Consiglio direttivo è validamente costituito anche in assenza
							di convocazione quando siano presenti i due terzi dei suoi
							componenti. In caso di assenza del Presidente, il Consiglio
							direttivo è presieduto dal Tesoriere e, in sua assenza, dal
							componente più anziano presente alla riunione. Il Consiglio
							direttivo delibera, con il quorum di cui al presente articolo,
							sulle domande di ammissione di nuovi soci ordinari, sottoponendo
							la delibera alla ratifica dell’Assemblea.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 8.
						</h5>
						<p>
							Al Presidente spetta la rappresentanza legale ed istituzionale del
							Comitato. Il Presidente promuove l’attività del Consiglio
							direttivo e vigila sul perseguimento dello scopo sociale.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 9.
						</h5>
						<p>
							Il Tesoriere cura l’esatta attuazione delle delibere di tutti gli
							organi collegiali in conformità alla legge e al presente statuto e
							deve informare il Presidente su tutte le questioni che rivestono
							un’importanza sostanziale per il lavoro del Comitato. Il Tesoriere
							è responsabile della cassa del Comitato. Egli cura la tenuta delle
							scritture contabili, disbriga gli adempimenti relativi ai
							pagamenti e agli incassi con potere di rappresentanza nel rilascio
							delle relative quietanze. Il Tesoriere è altresì autorizzato ad
							aprire, chiudere e gestire rapporti di conto corrente bancario o
							postale.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 10.
						</h5>
						<p>
							Lo scioglimento del Comitato è deliberato dall’Assemblea, secondo
							le modalità di cui all’art. 6 del presente Statuto, previa
							delibera conforme del Consiglio direttivo, all’atto del
							raggiungimento dello scopo sociale o qualora divenga impossibile
							raggiungere lo stesso ovvero qualora ne facciano richiesta almeno
							due terzi dei soci promotori.
						</p>

						<h5
							style={{
								fontWeight: "bold",
								fontFamily: "GothamBold",
							}}
						>
							Art. 11.
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
							Art. 12.
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
							Art. 13.
						</h5>
						<p>
							Nel primo anno successivo alla costituzione del Comitato, il
							Consiglio direttivo è composto dai soggetti designati nell’atto
							costitutivo; nel medesimo lasso temporale sono nominati Presidente
							e Tesoriere i soci promotori individuati nell’atto costitutivo.
							Entro tre mesi dalla scadenza del termine di cui al precedente
							comma dovrà essere convocata, in via straordinaria, l’Assemblea
							per la nomina dei nuovi membri del Consiglio direttivo.
						</p>
					</div>
				</div>
			</>
		);
	}
}
