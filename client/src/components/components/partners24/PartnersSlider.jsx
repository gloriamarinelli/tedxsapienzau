import React, { useEffect } from "react";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
import global from "../../../resources/global.json";
import "../../../resources/styles/partnersslider.css";
import partnersInfo from "./partners_info_slider.json";

export default function PartnersSlider() {
  const { t } = useTranslation(); // translation variable
  const [windowSize] = useOutletContext(); // window's size variable

  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return windowSize > global.UTILS.TABLET_WIDTH ? (
    <>
      {/* ------------------------ desktop slider ------------------------ */}
      <section
        className="page-section"
        id="portfolio"
        style={{ backgroundColor: global.COLORS.NERO }}
      >
        <div style={{ margin: "0 2.5vw" }}>
          <h2
            className="section-heading"
            style={{
              fontFamily: global.UTILS.FONT_FAMILY,
              fontSize: "2.5em",
              color: "white",
            }}
          >
            {t("partners.slider_title")}
          </h2>
          <div class="logos">
            <div class="logos-slide">
              {partnersInfo.partners.map((partner) => (
                <div key={partner.id} className="desktop_logo_div">
                  <img
                    src={partner.logo_desktop}
                    alt={`${partner.name} Logo`}
                    className="desktop_logo_img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <>
      {/* ------------------------ mobile slider ------------------------ */}
      <section
        className="page-section"
        id="portfolio"
        style={{ backgroundColor: global.COLORS.NERO }}
      >
        <div className="container">
          <h2
            className="section-heading"
            style={{
              fontFamily: global.UTILS.FONT_FAMILY,
              fontSize: "2.5em",
              color: "white",
            }}
          >
            {t("partners.slider_title")}
          </h2>
          <div class="logos">
            <div class="logos-slide">
              {partnersInfo.partners.map((partner) => (
                <div key={partner.id} className="mobile_logo_div">
                  <img
                    src={partner.logo_mobile}
                    alt={`${partner.name} Logo`}
                    className="mobile_logo_img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
