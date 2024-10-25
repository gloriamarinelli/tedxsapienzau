import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../resources/styles/partnersslider.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";

export default function PartnersSliderDesktop() {
  const { t } = useTranslation(); // translation variable
  const [windowSize] = useOutletContext(); // window's size variable

  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <>
      <section
        className="page-section"
        id="portfolio"
        style={{ backgroundColor: global.COLORS.NERO }}
      >
        <div style={{ margin: "0 2.5vw" }}>
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
          <div class="logos">
            <div class="logos-slide">
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/tim.webp"}
                  alt="Tim Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/unicredit.webp"}
                  alt="Unicredit Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/balduina.webp"}
                  alt="Autocentri Balduina Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/pioda.webp"}
                  alt="Pioda Imaging Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/enav.webp"}
                  alt="Enav Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/cbcr.webp"}
                  alt="CBCR Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/vaia.webp"}
                  alt="Vaia Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/deloitte.webp"}
                  alt="Deloitte Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/ef.webp"}
                  alt="Education First Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/mydiet.webp"}
                  alt="MyDiet Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/tlon.webp"}
                  alt="Tlon Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/copernico.webp"}
                  alt="Copernico Facility Management Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/dias.webp"}
                  alt="Dias Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/cc.webp"}
                  alt="CrikCrok Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/sanarti.webp"}
                  alt="Sanarti Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/innocent.webp"}
                  alt="Innocent Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/redbull.webp"}
                  alt="Redbull Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/marziali.webp"}
                  alt="Marziali Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/radio_sap.webp"}
                  alt="Radio Sapienza Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/millionaire.webp"}
                  alt="Millionaire Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/eco.webp"}
                  alt="eCo Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/radiokaos.webp"}
                  alt="Radio Kaos Italy Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/viscosa.webp"}
                  alt="Collettivo Viscosa Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/thesis4u.webp"}
                  alt="Thesis4U Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/mn.webp"}
                  alt="MentorsNova Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/peekaboo.webp"}
                  alt="Peekaboo Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/sfcs.webp"}
                  alt="SFClub Sapienza Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/jesap.webp"}
                  alt="JESAP Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/wayouth.webp"}
                  alt="WAYouth Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/cnr.png"}
                  alt="CNR Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/enea.webp"}
                  alt="Enea Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/roma.webp"}
                  alt="Roma City Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/ce.webp"}
                  alt="European Commission Logo"
                ></img>
              </div>
              <div className="logo_div">
                <img
                  className="logo_img"
                  src={"/images/partners24/desktop/rl.webp"}
                  alt="Lazio Region Logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
