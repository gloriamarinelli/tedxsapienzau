import React, { useState } from "react";
import PartnerCard22 from "../components/PartnerCard22";
import PartnerCard23 from "../components/PartnerCard23";
import PartnerCard24 from "../components/PartnerCard24";
import { useOutletContext } from "react-router";
import CountUp from "react-countup";
import global from "../../resources/global.json";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";
import "../../resources/styles/parallax-scrolldown.css";
import PartnerCardCommunity from "../components/PartnerCardCommunity";
import first_box_bg from "../images/partners/desktop/3.webp";
import second_box_bg from "../images/partners/desktop/6.webp";
import third_box_bg from "../images/partners/desktop/5.webp";
import fourth_box_bg from "../images/partners/desktop/4.webp";
import volunteers from "../images/partners/desktop/volunteers_darker_filter.webp";
import { useTranslation } from "react-i18next";
import PartnersCounter from "./PartnersCounter";

export default function Partners() {
  const { t, Trans } = useTranslation();
  const [activeYear] = useState(24);
  const [windowSize] = useOutletContext();

  /* variables to manage play-pause animation logos scroller */
  let [isHovered, setIsHovered] = useState(false);

  function getSponsor2022() {
    return (
      <section className="page-section" id="portfolio">
        <div className="container">
          <div>
            <h2
              className="section-heading"
              style={{
                fontFamily: "Fira Sans Extra Condensed, sans-serif",
                fontSize: "2.5em",
                color: "white",
              }}
            >
              Partner Istituzionali
            </h2>
          </div>
          <div className="row">
            <PartnerCard22
              imgSrc="https://italy.representation.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-04/logo_ce-it-rvb-hr.png?itok=n0KlJmYq"
              sponsorType={"institutional"}
            />
            <PartnerCard22
              imgSrc="https://www.melogranoroma.org/wp-content/uploads/2019/03/logo-REGIONE-LAZIO.png"
              sponsorType={"institutional"}
            />
            <PartnerCard22
              imgSrc="https://www.astronomitaly.com/wp-content/uploads/2015/10/Roma-capitale.jpg"
              sponsorType={"institutional"}
            />
          </div>

          <h2
            className="section-heading"
            style={{
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              fontSize: "2.5em",
              color: "white",
            }}
          >
            Main Sponsors
          </h2>
          <div className="row">
            <PartnerCard22
              imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Unicredit_logo.svg/2560px-Unicredit_logo.svg.png"
              sponsorType={"main"}
            />

            <PartnerCard22
              imgSrc="https://www.fondazioneania.it/images/loghi/logo.png"
              sponsorType={"main"}
            />
          </div>

          <h2
            className="section-heading mb-3"
            style={{
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              fontSize: "2em",
              color: "white",
            }}
          >
            Supporting Sponsors
          </h2>
          <div className="row">
            <PartnerCard22
              imgSrc="https://www.piodaimaging.it/wp-content/uploads/2021/12/favicon.png"
              sponsorType={"supporting"}
            />
            <PartnerCard22
              imgSrc="https://www.smau.it/Imported/PartnerProfile/image-thumb__5951__partner-show-image/Ferrovie_dello_Stato_Italiane_32880.jpeg"
              sponsorType={"supporting"}
            />
            <PartnerCard22
              imgSrc="https://assets-global.website-files.com/6340630bc206e3e9f1770198/6340630bc206e33cf777029f_Logo-unobravo.png"
              sponsorType={"supporting"}
            />
            <PartnerCard22
              imgSrc="https://www.autocentribalduina.com/media/osvdbcml/ab-autocentri-balduina.jpg"
              sponsorType={"supporting"}
            />
          </div>

          <h2
            className="section-heading"
            style={{
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              fontSize: "2em",
              color: "white",
            }}
          >
            Smart Sponsor
          </h2>
          <div className="row">
            <PartnerCard22
              imgSrc="https://cdn.shopify.com/s/files/1/0084/4696/7889/products/logo_scritta_nera_scontornato_0a7bd0ae-a45f-4a0c-8f70-a29ecd08284a_620x.png?v=1654963814"
              sponsorType={"smart"}
            />
            <PartnerCard22
              imgSrc="https://cosebellecoserare.com/wp-content/uploads/2020/12/Logo-Home-Colorato.png"
              sponsorType={"smart"}
            />
            <PartnerCard22
              imgSrc="https://www.essenzialeseta.com/wp-content/uploads/2021/04/cropped-Logo-bordo-150px-1.png"
              sponsorType={"smart"}
            />
          </div>

          <h2
            className="section-heading"
            style={{
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              fontSize: "2em",
              color: "white",
            }}
          >
            Friendly Sponsor
          </h2>
          <div className="row">
            <PartnerCard22
              imgSrc="https://cdn.shopify.com/s/files/1/0267/7194/7575/files/queesy-logo-header_1350x.png?v=1618655220"
              sponsorType={"friendly"}
            />
            <PartnerCard22
              imgSrc="https://loghi-famosi.com/wp-content/uploads/2020/11/Red-Bull-Logo.png"
              sponsorType={"friendly"}
            />
            <PartnerCard22
              imgSrc="https://i0.wp.com/newsfood.com/wp-content/uploads/2009/07/17/20090717154415-bf0acfdc.jpg?fit=800%2C600&ssl=1"
              sponsorType={"friendly"}
            />
            <PartnerCard22
              imgSrc="https://steccolecco.com/wp-content/uploads/2019/06/logo-233x300.png"
              sponsorType={"friendly"}
            />
            <PartnerCard22
              imgSrc="https://techprincess.it/wp-content/uploads/2022/02/Save-the-Waste-2.jpg"
              sponsorType={"friendly"}
            />
            <PartnerCard22
              imgSrc="https://www.startup-turismo.it/wp-content/uploads/2022/06/logo-14.png"
              linkSite="https://www.u2y.io/"
              sponsorType={"friendly"}
            />
            <PartnerCard22
              imgSrc="https://uqrmecdn.s3.us-east-2.amazonaws.com/u/314241/701532-1237158219cc6b3f47dd0f4c6d417df04ef0cd4.jpg"
              sponsorType={"friendly"}
            />
          </div>
        </div>
      </section>
    );
  }

  function getSponsor2023() {
    return (
      <>
        <section className="page-section" id="portfolio">
          <div className="container">
            <div>
              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2.5em",
                  color: "white",
                }}
              >
                Main Sponsors
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="Tim.webp"
                  text="Il Gruppo TIM è il primo operatore di telecomunicazioni italiano e guida la transizione digitale in Italia e Brasile. Nello sviluppo del business ha fatto propria una strategia improntata alla sostenibilità che si poggia su obiettivi di climate strategy, economia circolare, crescita digitale e gender equality, con l'obiettivo di diventare carbon neutral nel 2030 e raggiungere le zero emissioni nette entro il 2040."
                  link="https://www.gruppotim.it/it.html"
                  sponsorType={"main"}
                />

                <PartnerCard23
                  imgSrc="Unicredit.webp"
                  text="UniCredit è una banca commerciale pan-europea con un modello di servizio unico nel suo genere in Italia, Germania, Europa Centrale e Orientale. Il nostro obiettivo primario è dare alle nostre comunità le leve per il progresso, offrendo il meglio a tutti gli stakeholder e liberando il potenziale dei nostri clienti e delle nostre persone in tutta Europa."
                  link="https://www.unicredit.it/it/privati.html"
                  sponsorType={"main"}
                />
              </div>

              <div className="row" style={{ color: "white" }}>
                <PartnerCard23
                  title="Supporting Sponsor"
                  imgSrc="Balduina1.webp"
                  text="Autocentri Balduina è il punto di riferimento per intere generazioni di romani. Con diversi showroom su Roma e provincia, rappresenta alcuni dei brand più prestigiosi: Audi, Volkswagen, Skoda e Porsche.
                La soddisfazione del cliente è prioritaria. Vendita diretta, service e officine tecnologicamente avanzavate. Dal 1962 il meglio sempre."
                  link="https://www.autocentribalduina.com/"
                  sponsorType={"supporting"}
                />

                <PartnerCard23
                  title="Technical Sponsor"
                  imgSrc="Pioda.webp"
                  text="Nata come piccolo laboratorio artigiano di litografia e stampa su pietra, la nostra azienda ha saputo, negli anni, cogliere i cambiamenti di mercato investendo in nuove tecnologie di stampa e in know-how per essere, così, sempre al passo con le richieste della clientela. Oggi Pioda Imaging offre il suo supporto ad aziende pubbliche e private nonchè a professionisti e privati."
                  link="https://www.piodaimaging.it/"
                  sponsorType={"technical"}
                />

                <PartnerCard23
                  title="Con la partecipazione di"
                  imgSrc="Enav.webp"
                  text="Noi di ENAV garantiamo H24 i servizi alla navigazione aerea da 45 Torri di controllo e quattro Centri di
                  controllo d’area. Ogni giorno accompagniamo chi vola con affidabilità e sicurezza. Disegniamo il cielo delfuturo, investendo sulle persone e sull'innovazione per un trasporto aereo sostenibile."
                  link="https://www.enav.it/"
                  sponsorType={"partecipazione"}
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2em",
                  color: "white",
                }}
              >
                Smart Sponsors
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="CBCR.webp"
                  text="https://cosebellecoserare.com/it/home-v4-italiano/"
                  link=""
                  sponsorType={"smart"}
                />
                <PartnerCard23
                  imgSrc="VAIA.webp"
                  text="VAIA nasce come reazione alla tempesta che nel 2018 ha messo in ginocchio le Dolomiti. Un modello di business sostenibile, che mette al centro il territorio e le comunità che lo vivono. Design in legno e oggetti pensati per riconnettere l'uomo alla natura, con azioni concrete per ridare vita alle foreste e per tutelare i ghiacciai."
                  link="https://www.vaiawood.eu/"
                  sponsorType={"smart"}
                />
                <PartnerCard23
                  imgSrc="Deloitte.jpg"
                  text="Deloitte accompagna le aziende nello sviluppo e nell'implementazione di soluzioni innovative, sostenibili e al passo con il mercato. I suoi 345.000 professionisti in tutto il mondo sono uniti da una cultura che promuove l'integrità, la costante attenzione ai clienti, l'impegno verso i colleghi e la valorizzazione delle differenze."
                  link="https://www2.deloitte.com/it/it.html"
                  sponsorType={"smart"}
                />
                <PartnerCard23
                  imgSrc="EF.webp"
                  text="EF Education First è l’organizzazione internazionale leader nel campo dell’educazione, specializzata in programmi di formazione linguistica, viaggi studio e scambi culturali all’estero. Nata quasi 60 anni fa in Svezia è oggi presente con più di 500 scuole e uffici in 53 Nazioni dei 5 Continenti. EF offre soluzioni mirate per ogni età, esigenza ed obiettivo futuro."
                  link="http://www.ef-italia.it/"
                  sponsorType={"smart"}
                />
                <PartnerCard23
                  imgSrc="MyDiet.webp"
                  text="Il settore dell' healthy food negli ultimi anni ha indirizzato sempre più persone verso abitudini alimentari sane e sostenibili scontrandosi però con le difficoltà di tutti i giorni. È qui che nasce MyDiet: ci occupiamo di promuovere il mangiar sano, evitando gli sprechi alimentari, dando la possibilità a chiunque di seguire una dieta senza alcuno sforzo, non rinunciando però al gusto e alla qualità."
                  link="https://mydietroma.it/"
                  sponsorType={"smart"}
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2em",
                  color: "white",
                }}
              >
                Friendly Sponsors
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="Tlon.webp"
                  text="Tlon è un progetto di divulgazione culturale e filosofica che è al tempo stesso  casa editrice, libreria e teatro. Il loro focus sono i giovani studenti delle scuole e delle università a cui offrono anche corsi di formazione per la fioritura personale e il lifelong learning. Molto attivi sui social, hanno anche una rubrica fissa su vanity fair."
                  link="https://shop.tlon.it/segnalibro/"
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Copernico.webp"
                  link="https://copernicofm.com/"
                  text="Copernico offre dal 2017 servizi di pulizia professionali per uffici, autobus, ospedali. L'azienda promuove la sostenibilità come leva competitiva, tagliando sprechi e inefficienze. Inoltre, fornisce anche servizi di outsourcing in settori come logistica, traslochi, ristorazione e gestione magazzini, creando valore senza compromettere l'efficienza operativa."
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Dias.webp"
                  text="Libreria Dias, punto di riferimento per gli studenti degli atenei romani da oltre 40 anni, offre un vasto assortimento di libri universitari in un ambiente accogliente e vivace che stimola la curiosità. Grazie alla gentilezza e preparazione, lo staff svolge un ruolo guida con affidabilità."
                  link="https://www.libreriadias.com/"
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="CrikCrok.webp"
                  link="https://crikcrok.it/"
                  text="Crik Crok è un marchio italiano di snack croccanti e gustosi, attento alla qualità e alla freschezza degli ingredienti. Con una vasta gamma di gusti, tra cui le originali Crik Crok e le celebri Puff, da oltre 70 anni è il marchio di fiducia per soddisfare le voglie di snack degli italiani, e non solo, di tutte le età.  "
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Sanarti.webp"
                  link="http://www.sanarti.it/"
                  text="SanArti è il Fondo di Assistenza Sanitaria Integrativa dell'Artigianato. Fondato da Confartigianato, CNA, Casartigiani, C.L.A.A.I., CGIL, CISL e UIL sostiene, integralmente o quasi, i costi degli iscritti per visite, esami, fare prevenzione, cure odontoiatriche, in caso di ricovero e molto altro."
                  sponsorType={"friendly"}
                />

                <PartnerCard23
                  imgSrc="Innocent.webp"
                  text="Ciao, noi siamo innocent. Facciamo smoothie e succhi di frutta realizzati con ingredienti naturali e nient'altro, doniamo il 10% dei nostri profitti in beneficenza e ci impegniamo affinché le nostri emissioni siano sempre più vicine a zero. Ah, siamo anche molto fieri di essere una B-Corp."
                  link="https://www.innocentdrinks.it"
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Redbull.webp"
                  text="Red Bull è un'azienda leader nel mercato dell'Energy Drink. L'ascesa del brand e le sue innovative strategie di marketing le hanno permesso, nel tempo, di espandersi in altri settori, come quello sportivo e musicale. 
Red Bull Basement, il Global Student Project che mette alla prova gli studenti universitari di tutto il mondo spingendoli a trovare idee che possano migliorare il mondo."
                  link="https://www.redbull.com/int-en/event-series/basement"
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Marziali.webp"
                  text=""
                  link="https://marziali1922.com/"
                  sponsorType={"friendly"}
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2em",
                  color: "white",
                }}
              >
                Media Partners
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="RadioSapienza.png"
                  link="https://www.radiosapienza.net/"
                  text="RadioSapienza è la webradio ufficiale della Sapienza Università di Roma e fa parte del centro di produzione e sperimentazione radiofonica RadioLab del Dipartimento di Comunicazione e Ricerca Sociale. Nata nel 2007 si propone sia come canale di informazione, approfondimento e intrattenimento, ma anche come laboratorio formativo per tutti gli studenti dell’Ateneo."
                  sponsorType={"media"}
                />
                <PartnerCard23
                  imgSrc="Millionaire.webp"
                  link="http://www.millionaire.it/"
                  text="Da oltre 30 anni Millionaire è il punto di riferimento in Italia per chi vuole realizzarsi e fare impresa. Millionaire è inspirational, business e lifestyle. Scopri i nuovi business,  analizza settori e tendenze, lasciati ispirare da chi fa impresa.  In edicola, online, sui social e anche in versione digitale."
                  sponsorType={"media"}
                />
                <PartnerCard23
                  imgSrc="eCo.webp"
                  link="https://www.ecoagency.eu/"
                  text="eCo (ecologic Communication) nasce nel 2022 come pagina Instagram con l’obiettivo di sensibilizzare gli utenti verso tematiche sostenibili, green e inclusive. Vogliamo rappresentare la voce di una nuova comunicazione sostenibile attraverso un'informazione chiara, innovativa e di qualità."
                  sponsorType={"media"}
                />
                <PartnerCard23
                  imgSrc="RadioKaos.webp"
                  link="https://www.radiokaositaly.com/"
                  text="Radio Kaos Italy è la WebRadio indipendente, in vetrina, nata nel 2009 con lo scopo di individuare e diffondere le realtà artistiche, culturali, musicali e dell’underground italiano e internazionale. Miglior webradio d’Italia al MEI di Faenza e vincitrice del MArte awards come miglior webradio, una delle ospiti al World Radio Day 2021."
                  sponsorType={"media"}
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2em",
                  color: "white",
                }}
              >
                Creative Partners
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="Collettivo.webp"
                  link="https://www.instagram.com/collettivoviscosa/?hl=it"
                  text="Collettivo Viscosa nasce da un manipolo di studentesse che hanno scelto di fare branco per sfondare nel mondo del fumetto. Collettivo Viscosa è il risultato dell’unione di creatività diverse, che hanno dato vita a soluzioni multiformi. Siamo bestie fluide, ancora in divenire ma pronte a metterci in gioco."
                  sponsorType={"creative"}
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2em",
                  color: "white",
                }}
              >
                Community Partners
              </h2>
              <div className="row">
                <PartnerCardCommunity
                  imgSrc="Thesis4u.webp"
                  link="https://thesisforyou.com/"
                />
                <PartnerCardCommunity imgSrc="MentorsNova.webp" />
                <PartnerCardCommunity
                  imgSrc="Peekaboo.webp"
                  link="https://www.peekaboovision.com/"
                />
                <PartnerCardCommunity
                  imgSrc="SFClubSapienza.webp"
                  link="https://startingfinance.com/cerca-club/"
                />
                <PartnerCardCommunity
                  imgSrc="JESAP.webp"
                  link="https://jesap.it/"
                />
                <PartnerCardCommunity
                  imgSrc="WAYouth.webp"
                  link="https://wayouth.it/#project"
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "Fira Sans Extra Condensed, sans-serif",
                  fontSize: "2em",
                  color: "white",
                }}
              >
                Con il patrocinio di
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="CNR.webp"
                  link="https://www.cnr.it/"
                  sponsorType={"patrocinio"}
                />
                <PartnerCard23
                  imgSrc="Enea.png"
                  link="https://www.enea.it/it"
                  sponsorType={"patrocinio"}
                />
                <PartnerCard23
                  imgSrc="Roma.webp"
                  link="https://www.comune.roma.it/web/it/assessorato-agricoltura-ambiente-e-ciclo-dei-rifiuti.page"
                  sponsorType={"patrocinio"}
                />
                <PartnerCard23
                  imgSrc="CE.webp"
                  link="https://commission.europa.eu/index_en"
                  sponsorType={"patrocinio"}
                />
                <PartnerCard23
                  imgSrc="RegioneLazio.webp"
                  link="https://www.regione.lazio.it/"
                  sponsorType={"patrocinio"}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  /*function displayParallaxScrollDown() {
    return (
      <div className="parent-div">
        <div className="gradient-div gradient-div-top"></div>
        <div className="img-div">
          <ImageOne />
          <ImageTwo />
          <ImageThree />
          <ImageFour />
        </div>
        <div className="gradient-div gradient-div-bottom"></div>
      </div>
    );
  }*/

  /* 'pause' animation logos scroller */
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  /* 'play' animation logos scroller */
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function getSponsor2024() {
    return (
      <>
        <section className="page-section" id="portfolio">
          <div className="container">
            <h2
              className="section-heading"
              style={{
                fontFamily: "Fira Sans Extra Condensed, sans-serif",
                fontSize: "2.5em",
                color: "white",
              }}
            >
              {t("partners.slider_title")}
            </h2>
            <div
              /* mouse hover check */
              onMouseMove={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              /* if mouse is hovering, the 'hovered' class is added */
              className={`image-scroller-container ${
                isHovered ? "hovered" : ""
              }`}
            >
              <div className="group-row">
                <div className={"image-scroller-group"} id="1st-group">
                  <PartnerCard24 imgSrc="Tim.webp" altText="TIM" />
                  <PartnerCard24 imgSrc="Unicredit.webp" altText="Unicredit" />
                  <PartnerCard24
                    imgSrc="Balduina1.webp"
                    altText="Autocentri Balduina"
                  />
                  <PartnerCard24 imgSrc="Pioda.webp" altText="Pioda Imaging" />
                  <PartnerCard24 imgSrc="Enav.webp" altText="Enav Group" />
                  <PartnerCard24 imgSrc="CBCR.webp" altText="CBCR" />
                  <PartnerCard24 imgSrc="VAIA.webp" altText="VAIA" />
                  <PartnerCard24 imgSrc="Deloitte.jpg" altText="Deloitte" />
                  <PartnerCard24 imgSrc="EF.webp" altText="EF" />
                  <PartnerCard24 imgSrc="MyDiet.webp" altText="MyDiet" />
                  <PartnerCard24 imgSrc="Tlon.webp" altText="Tlon" />
                  <PartnerCard24 imgSrc="Copernico.webp" altText="Copernico" />
                  <PartnerCard24 imgSrc="Dias.webp" altText="Dias" />
                  <PartnerCard24 imgSrc="CrikCrok.webp" altText="CrikCrok" />
                  <PartnerCard24 imgSrc="Sanarti.webp" altText="SanArti" />
                  <PartnerCard24 imgSrc="Innocent.webp" altText="Innocent" />
                  <PartnerCard24
                    imgSrc="Redbull.webp"
                    altText="RedBull"
                    id="last-element"
                  />
                </div>
                <div
                  className={"image-scroller-group second-images-group"}
                  id="2nd-group"
                >
                  <PartnerCard24 imgSrc="Marziali.webp" altText="Marziali" />
                  <PartnerCard24
                    imgSrc="RadioSapienza.png"
                    altText="RadioSapienza"
                  />
                  <PartnerCard24
                    imgSrc="Millionaire.webp"
                    altText="Millionaire"
                  />
                  <PartnerCard24 imgSrc="eCo.webp" altText="eCo" />
                  <PartnerCard24
                    imgSrc="RadioKaos.webp"
                    altText="Radio Kaos Italy"
                  />
                  <PartnerCard24
                    imgSrc="Collettivo.webp"
                    altText="Collettivo Viscosa"
                  />
                  <PartnerCard24 imgSrc="Thesis4u.webp" altText="Thesis4u" />
                  <PartnerCard24
                    imgSrc="MentorsNova.webp"
                    altText="Mentors Nova"
                  />
                  <PartnerCard24 imgSrc="Peekaboo.webp" altText="Peekaboo" />
                  <PartnerCard24
                    imgSrc="SFClubSapienza.webp"
                    altText="SF Club Sapienza"
                  />
                  <PartnerCard24 imgSrc="JESAP.webp" altText="JESAP" />
                  <PartnerCard24 imgSrc="WAYouth.webp" altText="WAYouth" />
                  <PartnerCard24 imgSrc="CNR.webp" altText="CNR" />
                  <PartnerCard24 imgSrc="Enea.png" altText="Enea" />
                  <PartnerCard24 imgSrc="Roma.webp" altText="Roma" />
                  <PartnerCard24
                    imgSrc="CE.webp"
                    altText="Commissione Europea"
                  />
                  <PartnerCard24
                    imgSrc="RegioneLazio.webp"
                    altText="Regione Lazio"
                    id="2nd-last-element"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  function mobilePartnersLayout() {
    return (
      <>
        <div className="gradient-div gradient-div-top"></div>
        <div
          className="mobile-content"
          style={{ fontFamily: "Fira Sans Extra Condensed" }}
        >
          <div id="mobile-1st-div" className="mobile-div ct-right">
            <div id="mobile-text-block-1" className="mobile-text-block">
              <h3>{t("partners.opening_st")}</h3>
              <p>
                {t("partners.2nd_st")}
                <span id="imp-txt-1">{t("partners.2nd_st_red")}</span>.<br></br>
                {t("partners.3rd_st")}
              </p>
            </div>
          </div>
          <div id="mobile-2nd-div" className="mobile-div ct-left">
            <div id="mobile-text-block-2" className="mobile-text-block">
              <h3>{t("partners.4th_st")}</h3>
              <h5 id="imp-txt-2">
                <i>{t("partners.5th_st")}</i>
              </h5>
              <p>
                {t("partners.6th_st")}
                <br></br>
                {t("partners.7th_st")}
                <span id="imp-txt-1">{t("partners.7th_st_red")}</span>.
              </p>
              <p>
                {t("partners.8th_st_1")}
                <span id="imp-txt-1">{t("partners.8th_st_red")}</span>
                {t("partners.8th_st_2")}
              </p>
            </div>
          </div>
          <div id="mobile-3rd-div" className="mobile-div ct-left">
            <div id="mobile-text-block-3" className="mobile-text-block">
              <div>
                <h4>{t("partners.9th_st")}</h4>
                <p>{t("partners.10th_st")}</p>
                <p>
                  {t("partners.11th_st_1")}
                  <br></br>
                  {t("partners.11th_st_2")}
                  <span id="imp-txt-1">{t("partners.11th_st_red")}</span>
                  {t("partners.11th_st_3")}
                </p>
              </div>
              <div class="">
                <div>
                  <div>
                    <h2>{t("partners.13th_st")}</h2>
                    <ul>
                      <li>{t("partners.13th_st_el_1")}</li>
                      <li>{t("partners.13th_st_el_2")}</li>
                      <li>{t("partners.13th_st_el_3")}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h2>{t("partners.14th_st")}</h2>
                    <ul>
                      <li>{t("partners.14th_st_el_1")}</li>
                      <li>{t("partners.14th_st_el_2")}</li>
                      <li>{t("partners.14th_st_el_3")}</li>
                      <li>{t("partners.14th_st_el_4")}</li>
                      <li>{t("partners.14th_st_el_5")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile-4th-div" className="mobile-div ct-right">
            <div id="mobile-text-block-4" className="mobile-text-block">
              <h3>{t("partners.stats")}</h3>
              <p>
              {t("partners.events")}
                <ul className="numbers-list">
                  <li className="info-el">
                    <h3 className="info-number">
                      +
                      <CountUp end={3000} duration={2} useEasing={false} />
                    </h3>{" "}
                    {t("partners.people")}
                  </li>
                  <li className="info-el">
                    <h3 className="info-number">
                      +
                      <CountUp end={33000} duration={2} useEasing={false} />
                    </h3>{" "}
                    {t("partners.yt_views")}
                  </li>
                  <li className="info-el">
                    <h3 className="info-number">
                      +
                      <CountUp end={50} duration={2} useEasing={false} />
                    </h3>{" "}
                    {t("partners.partners")}
                  </li>
                  <li className="info-el">
                    <h3 className="info-number">
                      +
                      <CountUp end={300} duration={2} useEasing={false} />
                    </h3>{" "}
                    {t("partners.volunteers")}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="gradient-div gradient-div-bottom"></div>
      </>
    );
  }

  function desktopPartnersLayout() {
    return (
      <div style={{ backgroundColor: "#000" }}>
        {/* first row */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
            width: "100vw",
            backgroundColor: "#000",
            padding:
              windowSize < global.UTILS.BIG_TABLET_WIDTH
                ? "34px 34px 0px 34px"
                : "34px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            id="main-container"
            style={{
              width: "100%",
              height: "90%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${first_box_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* content's div */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    fontSize: "200%",
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.opening_st")}
                </h1>
                <h3
                  style={{
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.2nd_st")}
                  <span id="imp-txt-1">{t("partners.2nd_st_red")}</span>.
                </h3>
                <h3
                  style={{
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.3rd_st")}
                </h3>
              </div>
            </div>

            {/* placeholder div */}
            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
              }}
            ></div>
          </div>
        </section>
        {/* second row */}
        <PartnersCounter />
        {/* third row */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            width: "100vw",
            backgroundColor: "#000",
            padding:
              windowSize < global.UTILS.BIG_TABLET_WIDTH
                ? "34px 34px 0px 34px"
                : "34px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            id="main-container"
            style={{
              width: "100%",
              height: "90%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${second_box_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* content's div */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    fontSize: "200%",
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.4th_st")}
                </h1>
              </div>
            </div>

            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* content's div */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    paddingBottom: "2%",
                    fontSize: "4vh",
                  }}
                >
                  {/*<span id="imp-txt-1">{t("partners.5th_st")}</span>*/}
                  <i>{t("partners.5th_st")}</i>
                </h3>
                <h3
                  style={{
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.6th_st")}
                  <br></br>
                  {t("partners.7th_st")}
                  <span id="imp-txt-1">{t("partners.7th_st_red")}</span>.
                </h3>
                <h3
                  style={{
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.8th_st_1")}
                  <span id="imp-txt-1">{t("partners.8th_st_red")}</span>
                  {t("partners.8th_st_2")}
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* fourth row */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            width: "100vw",
            backgroundColor: "#000",
            padding:
              windowSize < global.UTILS.BIG_TABLET_WIDTH
                ? "34px 34px 0px 34px"
                : "34px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            id="main-container"
            style={{
              width: "100%",
              height: "90%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${third_box_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>

            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* content's div */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    fontSize: "200%",
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.9th_st")}
                </h1>
                <h3
                  style={{
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.10th_st")}
                </h3>
                <h3
                  style={{
                    paddingBottom: "2%",
                  }}
                >
                  {t("partners.11th_st_1")}
                  <br></br>
                  {t("partners.11th_st_2")}
                  <span id="imp-txt-1">{t("partners.11th_st_red")}</span>
                  {t("partners.11th_st_3")}
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* fifth row */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            width: "100vw",
            backgroundColor: "#000",
            padding:
              windowSize < global.UTILS.BIG_TABLET_WIDTH
                ? "34px 34px 0px 34px"
                : "34px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            id="main-container"
            style={{
              width: "100%",
              height: "90%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fourth_box_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* content's div */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                  /*backgroundImage: `url(${volunteers})`,*/
                }}
              >
                <img
                  src={volunteers}
                  alt="TEDxSapienzaU Volunteers Photo"
                  style={{
                    width: "100%",
                    height: "20%",
                    borderRadius: global.UTILS.BENTO_BOX_PADDING,
                  }}
                ></img>
              </div>
            </div>

            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* content's div */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    paddingBottom: "2%",
                    fontSize: "5vh",
                  }}
                >
                  {t("partners.14th_st")}
                </h3>
                <ul>
                  <li>
                    <h3
                      style={{
                        paddingBottom: "2%",
                        fontSize: "3vh",
                      }}
                    >
                      {t("partners.14th_st_el_1")}
                    </h3>
                  </li>
                  <li>
                    <h3
                      style={{
                        paddingBottom: "2%",
                        fontSize: "3vh",
                      }}
                    >
                      {t("partners.14th_st_el_2")}
                    </h3>
                  </li>
                  <li>
                    <h3
                      style={{
                        paddingBottom: "2%",
                        fontSize: "3vh",
                      }}
                    >
                      {t("partners.14th_st_el_3")}
                    </h3>
                  </li>
                  <li>
                    <h3
                      style={{
                        paddingBottom: "2%",
                        fontSize: "3vh",
                      }}
                    >
                      {t("partners.14th_st_el_4")}
                    </h3>
                  </li>
                  <li>
                    <h3
                      style={{
                        paddingBottom: "2%",
                        fontSize: "3vh",
                      }}
                    >
                      {t("partners.14th_st_el_5")}
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function partners24() {
    let scrollDownComponent;
    if (windowSize > global.UTILS.TABLET_WIDTH) {
      scrollDownComponent = desktopPartnersLayout();
    } else {
      scrollDownComponent = mobilePartnersLayout();
    }

    return (
      <>
        {scrollDownComponent}
        {getSponsor2024()}
      </>
    );
  }

  function chooseYear() {
    if (activeYear === 22) return getSponsor2022();
    else if (activeYear === 23) return getSponsor2023();
    else return partners24();
  }

  function showPartners24Desktop() {
    return (
      <>
        {/*<section
          style={{
            backgroundColor: global.COLORS.NERO,
            paddingTop: "5vh",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        ></section>*/}

        {chooseYear()}
      </>
    );
  }

  function showPartners24Mobile() {
    return (
      <>
        <section
          style={{
            backgroundColor: global.COLORS.NERO,
            paddingTop: "5vh",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div
            className="header"
            style={{
              width: "98%",
              height: "80%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          ></div>
        </section>

        {chooseYear()}
      </>
    );
  }

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */
    return showPartners24Desktop();
  } else {
    /**
     * MOBILE
     */
    return showPartners24Mobile();
  }
}
