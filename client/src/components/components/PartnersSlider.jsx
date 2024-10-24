import React, { useEffect } from "react";
import PartnerCard24 from "./PartnerCard24";
import { useTranslation } from "react-i18next";
import "../../resources/styles/partnersslider.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";

export default function PartnersSlider() {
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
          <div class="logos">
            <div class="logos-slide">
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
              <PartnerCard24 imgSrc="Redbull.webp" altText="RedBull" />
              <PartnerCard24 imgSrc="Marziali.webp" altText="Marziali" />
              <PartnerCard24
                imgSrc="RadioSapienza.png"
                altText="RadioSapienza"
              />
              <PartnerCard24 imgSrc="Millionaire.webp" altText="Millionaire" />
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
              <PartnerCard24 imgSrc="MentorsNova.webp" altText="Mentors Nova" />
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
              <PartnerCard24 imgSrc="CE.webp" altText="Commissione Europea" />
              <PartnerCard24
                imgSrc="RegioneLazio.webp"
                altText="Regione Lazio"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
