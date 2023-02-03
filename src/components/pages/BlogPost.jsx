import { faFeather, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Image from "../images/blogPOST1.png";
import {
	faFacebook,
	faFacebookF,
	faLinkedin,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function BlogPost() {
	const { id } = useParams();
	return (
		<div className="main-container">
			<div className="post-container">
				<p>
					Anna Lisa Caló <FontAwesomeIcon icon={faFeather} /> · 24 dic 2022 ·
					Tempo di lettura: 2 min
				</p>
				<hr className="featurette-divider"></hr>
				<h1>
					Natale con TEDxSapienzaU: un albero condiviso e mille idee appese ai
					rami
				</h1>
				<p>
					L’aria natalizia si è sparsa ovunque negli ultimi giorni ed è arrivata
					fino alla nostra Università. In Sapienza le lezioni continuano come
					sempre ma c’è qualcosa in più a remare contro il freddo di queste
					giornate. Stiamo parlando dell’albero di Natale di TEDxSapienzaU e del
					suo stand. Quest’anno, infatti, la squadra di volontari dell’evento ha
					deciso di coinvolgere l’intera comunità studentesca in un progetto
					speciale: scambiarsi auguri e idee di valore. Tutto ciò ha preso forma
					in modo semplice. Nelle giornate del 20 e 21 dicembre, davanti al CIAO
					in Città Universitaria, gli studenti sono stati invitati ad appendere
					ai rami dell’albero tanti bigliettini in cui avevano scritto un’idea,
					un progetto, una speranza da condividere. Un modo, questo, non solo
					per far conoscere la realtà di TEDxSapienzaU a quegli studenti che per
					qualche motivo ne erano ancora distanti, ma per concretizzare sempre
					più lo spirito dell’associazione. La condivisione, in questo caso, è
					al centro di tutto, ed è un elemento che ci accomuna con il Natale.
				</p>
				<LazyLoadImage src={Image} alt="Post" className="post-image" />
				<p>
					Se si ha un’idea che vale è bello metterla a disposizione di tutti,
					proprio come quando gli speaker diffondono le loro conoscenze sul
					palco del TED. Creare nuovi legami, imparare qualcosa di nuovo e
					guardare oltre i propri occhi: sono state due giornate ricche di
					valore, sia per i volontari del team che per chiunque sia passato
					davanti al nostro stand. È un periodo frenetico, quello che viviamo, e
					per gli studenti con la sessione alle porte lo stress si fa sentire
					particolarmente. Prendersi un momento per fermarsi, incuriosirsi,
					mangiare un pezzo di panettone in compagnia e chiedersi cos’è che ha
					davvero valore serve a riequilibrarsi. Un concetto che, comunque, va
					oltre l’Università e ci riguarda tutti.
				</p>
				<hr className="featurette-divider"></hr>
				<div className="post-social-container">
					<FontAwesomeIcon icon={faFacebookF} size="lg" />
					<FontAwesomeIcon icon={faTwitter} size="lg" />
					<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
					<FontAwesomeIcon icon={faLink} size="lg" />
				</div>
			</div>
		</div>
	);
}
