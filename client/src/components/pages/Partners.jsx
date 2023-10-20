import React, { useRef, useState } from "react";
import PartnerCard22 from "../components/PartnerCard22";
import PartnerCard23 from "../components/PartnerCard23";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { Link } from "react-router-dom";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";
import PartnerCardCommunity from "../components/PartnerCardCommunity";

export default function Partners() {
  const [activeYear, setActiveYear] = useState(23);
  const [windowSize, setWindowSize] = useOutletContext();
  const button2022 = useRef();
  const button2023 = useRef();

  function getSponsor2022() {
    return (
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="">
            <h2
              className="section-heading"
              style={{
                fontFamily: "GothamBold",
                fontSize: "2.5em",
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
              fontFamily: "GothamBold",
              fontSize: "2.5em",
            }}
          >
            Main Sponsors
          </h2>
          <div className="row">
            <PartnerCard22
              imgSrc="https://upload.wikimedia.org/wikipedia/it/thumb/c/cc/UniCredit_logo.svg/1200px-UniCredit_logo.svg.png"
              sponsorType={"main"}
            />
            <PartnerCard22
              imgSrc="https://makerfairerome.eu/wp-content/uploads/2020/07/Logo_tricolore_eni.jpg"
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
              fontFamily: "GothamBold",
              fontSize: "2em",
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
              imgSrc="https://www.autocentribalduina.com/static/img/pict3512.jpg"
              sponsorType={"supporting"}
            />
          </div>

          <h2
            className="section-heading"
            style={{
              fontFamily: "GothamBold",
              fontSize: "2em",
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
              fontFamily: "GothamBold",
              fontSize: "2em",
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
            <div className="">
              <h2
                className="section-heading"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "2.5em",
                }}
              >
                Main Sponsors
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="Eni.webp"
                  text="Eni è una società dell'energia con oltre 32.000 persone in 62 Paesi. La sua strategia mira a raggiungere l'obiettivo delle zero emissioni nette al 2050 e a fornire prodotti decarbonizzati, coniugando sostenibilità ambientale e finanziaria, puntando su una leadership tecnologica costruita in anni di ricerca e innovazione."
                  link="https://www.eni.com/it-IT/home.html"
                  sponsorType={"main"}
                />

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

              <div className="row">
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
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "2em",
                }}
              >
                Smart Sponsor
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="Deloitte.jpg"
                  text=""
                  link="https://www2.deloitte.com/it/it.html"
                  sponsorType={"smart"}
                />
                <PartnerCard23
                  imgSrc="MyDiet.webp"
                  text=""
                  link="https://mydietroma.it/"
                  sponsorType={"smart"}
                />{" "}
                <PartnerCard23
                  imgSrc="VAIA.webp"
                  text="VAIA nasce come reazione alla tempesta che nel 2018 ha messo in ginocchio le Dolomiti. Un modello di business sostenibile, che mette al centro il territorio e le comunità che lo vivono. Design in legno e oggetti pensati per riconnettere l'uomo alla natura, con azioni concrete per ridare vita alle foreste e per tutelare i ghiacciai."
                  link="https://www.vaiawood.eu/"
                  sponsorType={"smart"}
                />
                {/*
                <PartnerCard23
                  imgSrc="https://thumbs.dreamstime.com/b/logo-generico-91911275.jpg"
                  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate."
                  sponsorType={"smart"}
                />*/}
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "2em",
                }}
              >
                Friendly Sponsor
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="Copernico.webp"
                  link="https://copernicofm.com/"
                  text=""
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="CrikCrok.webp"
                  link="https://crikcrok.it/"
                  text=""
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Sanarti.webp"
                  link="http://www.sanarti.it/"
                  text="SanArti è il Fondo di Assistenza Sanitaria Integrativa dell'Artigianato. Fondato da Confartigianato, CNA, Casartigiani, C.L.A.A.I., CGIL, CISL e UIL sostiene, integralmente o quasi, i costi degli iscritti per visite, esami, fare prevenzione, cure odontoiatriche, in caso di ricovero e molto altro."
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Dias.webp"
                  text="Libreria Dias, punto di riferimento per gli studenti degli atenei romani da oltre 40 anni, offre un vasto assortimento di libri universitari in un ambiente accogliente e vivace che stimola la curiosità. Grazie alla gentilezza e preparazione, lo staff svolge un ruolo guida con affidabilità."
                  link="https://www.libreriadias.com/"
                  sponsorType={"friendly"}
                />
                <PartnerCard23
                  imgSrc="Tlon.webp"
                  text="Tlon è un progetto di divulgazione culturale e filosofica che è al tempo stesso  casa editrice, libreria e teatro. Il loro focus sono i giovani studenti delle scuole e delle università a cui offrono anche corsi di formazione per la fioritura personale e il lifelong learning. Molto attivi sui social, hanno anche una rubrica fissa su vanity fair."
                  link="https://shop.tlon.it/segnalibro/"
                  sponsorType={"friendly"}
                />{" "}
                <PartnerCard23
                  imgSrc="Innocent.webp"
                  text="Ciao, noi siamo innocent. Facciamo smoothie e succhi di frutta realizzati con ingredienti naturali e nient'altro, doniamo il 10% dei nostri profitti in beneficenza e ci impegniamo affinché le nostri emissioni siano sempre più vicine a zero. Ah, siamo anche molto fieri di essere una B-Corp."
                  link="https://www.innocentdrinks.it"
                  sponsorType={"friendly"}
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "2em",
                }}
              >
                Community Partners
              </h2>
              <div className="row">
                <PartnerCardCommunity
                  imgSrc="SFClubSapienza.webp"
                  link="https://startingfinance.com/cerca-club/"
                />
                <PartnerCardCommunity imgSrc="MentorsNova.webp" />
                <PartnerCardCommunity
                  imgSrc="Thesis4u.webp"
                  link="https://thesisforyou.com/"
                />
                <PartnerCardCommunity
                  imgSrc="JESAP.webp"
                  link="https://jesap.it/"
                />
                <PartnerCardCommunity
                  imgSrc="Peekaboo.webp"
                  link="https://www.peekaboovision.com/"
                />
                <PartnerCardCommunity
                  imgSrc="WAYouth.webp"
                  link="https://wayouth.it/#project"
                />
              </div>

              <h2
                className="section-heading"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "2em",
                }}
              >
                Con il patrocinio di
              </h2>
              <div className="row">
                <PartnerCard23
                  imgSrc="CNR.webp"
                  text=""
                  link="https://www.cnr.it/"
                  sponsorType={"patrocinio"}
                />
                <PartnerCard23
                  imgSrc="Enea.png"
                  text="Agenzia nazionale per le nuove tecnologie, l'energia e lo sviluppo sconomico sostenibile"
                  link="https://www.enea.it/it"
                  sponsorType={"patrocinio"}
                />
                <PartnerCard23
                  imgSrc="Roma.webp"
                  text=""
                  link="https://www.comune.roma.it/web/it/assessorato-agricoltura-ambiente-e-ciclo-dei-rifiuti.page"
                  sponsorType={"patrocinio"}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  function chooseYear() {
    if (activeYear === 22) return getSponsor2022();
    else return getSponsor2023();
  }

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div
          className="header gradient-background"
          style={{
            padding: "10px",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "40vh",
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
            PARTNERS
          </h1>
        </div>

        <section
          className="mt-5 mb-5 d-flex justify-content-between"
          style={{
            width: "95vw",
            margin: "auto",
            fontFamily: "GothamBold",
          }}
        >
          <h3
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
              display: "flex",
            }}
          >
            Chi ci ha supportato:
            <div
              ref={button2023}
              className="year-button underlined"
              type="button"
              style={{ marginLeft: "30px" }}
              onClick={() => {
                console.log("click");
                button2022.current.classList.remove("underlined");
                button2023.current.classList.add("underlined");
                setActiveYear(23);
              }}
            >
              2023
            </div>
            <div
              ref={button2022}
              className="year-button"
              type="button"
              style={{ marginLeft: "30px" }}
              onClick={() => {
                console.log("click");
                button2023.current.classList.remove("underlined");
                button2022.current.classList.add("underlined");
                setActiveYear(22);
              }}
            >
              2022
            </div>
          </h3>

          <Link to="/join">
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: global.COLORS.ROSSO_TED,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Vuoi supportarci?
            </button>
          </Link>
        </section>

        {chooseYear()}
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="header gradient-background"
          style={{
            padding: "10px",
            color: "#fff",
            height: "30vh",
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
            PARTNERS
          </h1>
        </div>

        <section
          className="mt-3 mb-5"
          style={{
            width: "95vw",
            margin: "auto",
            fontFamily: "GothamBold",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left",
              color: "black",
              display: "flex",
            }}
          >
            Chi ci ha supportato:
          </h3>
          <div style={{ display: "flex" }}>
            <div
              ref={button2023}
              className="year-button underlined"
              type="button"
              style={{
                marginRight: "30px",
                cursor: "initial",
                fontSize: "30px",
              }}
              onClick={() => {
                console.log("click");
                button2022.current.classList.remove("underlined");
                button2023.current.classList.add("underlined");
                setActiveYear(23);
              }}
            >
              2023
            </div>
            <div
              ref={button2022}
              className="year-button"
              type="button"
              style={{ marginRight: "30px", fontSize: "30px" }}
              onClick={() => {
                console.log("click");
                button2023.current.classList.remove("underlined");
                button2022.current.classList.add("underlined");
                setActiveYear(22);
              }}
            >
              2022
            </div>
          </div>
        </section>

        {chooseYear()}
      </>
    );
  }
}
