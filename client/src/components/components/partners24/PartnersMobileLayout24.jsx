import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import global from "../../../resources/global.json";
import PartnersSlider from "./PartnersSlider";
import PartnersList24 from "./PartnersList24";

/* -------------------- images import -------------------- */
import first_box_bg from "../../images/partners/mobile/2.webp";
import second_box_bg from "../../images/partners/mobile/3.webp";
import third_box_bg from "../../images/partners/mobile/4.webp";
import fourth_box_bg from "../../images/partners/mobile/5.webp";

export default function PartnersMobileLayout24() {
  const { t } = useTranslation(); // translation variable

  return (
    <>
      <section
        style={{
          backgroundColor: global.COLORS.NERO,
          // paddingTop: "5vh", ***IMPORTANTE*** da ripristinare nel caso in cui la "PartnersList24" non sia presente!
          fontFamily: global.UTILS.FONT_FAMILY,
          placeItems: "center",
          display: "grid",
        }}
      >
        <div
          className="header"
          style={{
            width: "98%",
            height: "80%",
            paddingLeft: global.UTILS.BENTO_BOX_PADDING,
            paddingRight: global.UTILS.BENTO_BOX_PADDING,
            paddingBottom: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        ></div>
      </section>
      <PartnersList24 />
      <div
        id="top-gradient"
        style={{
          height: "100px",
          width: "100%",
          backgroundImage: "linear-gradient(to bottom, black, #191919)",
        }}
      ></div>
      <div
        className="mobile-content"
        style={{ fontFamily: "Fira Sans Extra Condensed" }}
      >
        <div
          id="mobile-1st-div"
          className="mobile-div"
          style={{
            justifyContent: "right",
            backgroundImage: `url(${first_box_bg})`,
          }}
        >
          <div
            className="mobile-text-block"
            style={{ textAlign: "right", width: "50%" }}
          >
            <h3>{t("partners.opening_st")}</h3>
            <p>
              {t("partners.2nd_st")}
              <span className="red-txt">{t("partners.2nd_st_red")}</span>.
              <br></br>
              {t("partners.3rd_st")}
            </p>
          </div>
        </div>
        <div
          className="mobile-div"
          style={{
            justifyContent: "left",
            backgroundImage: `url(${second_box_bg})`,
          }}
        >
          <div
            className="mobile-text-block"
            style={{ textAlign: "left", width: "60%" }}
          >
            <h3>{t("partners.4th_st")}</h3>
            <h5 className="red-txt">
              <i>{t("partners.5th_st")}</i>
            </h5>
            <p>
              {t("partners.6th_st")}
              <br></br>
              {t("partners.7th_st")}
              <span className="red-txt">{t("partners.7th_st_red")}</span>.
            </p>
            <p>
              {t("partners.8th_st_1")}
              <span className="red-txt">{t("partners.8th_st_red")}</span>
              {t("partners.8th_st_2")}
            </p>
          </div>
        </div>
        <div
          className="mobile-div"
          style={{
            justifyContent: "left",
            backgroundImage: `url(${third_box_bg})`,
            backgroundPosition: "right",
          }}
        >
          <div
            className="mobile-text-block"
            style={{ textAlign: "left", width: "60%" }}
          >
            <div>
              <h4>{t("partners.9th_st")}</h4>
              <p>{t("partners.10th_st")}</p>
              <p>
                {t("partners.11th_st_1")}
                <br></br>
                {t("partners.11th_st_2")}
                <span className="red-txt">{t("partners.11th_st_red")}</span>
                {t("partners.11th_st_3")}
              </p>
            </div>
            <div>
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
                  <button
                    style={{
                      borderRadius: "10px",
                      border: "none",
                      backgroundColor: global.COLORS.ROSSO_TED,
                    }}
                  >
                    <a
                      href="mailto:tedx.sapienzau@uniroma1.it"
                      style={{
                        fontFamily: global.UTILS.FONT_FAMILY,
                        fontWeight: "bold",
                        textDecoration: "none",
                        color: "white",
                        padding: "50px",
                      }}
                    >
                      {t("partners.14th_st_el_6")}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mobile-div"
          style={{
            justifyContent: "right",
            backgroundImage: `url(${fourth_box_bg})`,
          }}
        >
          <div
            className="mobile-text-block"
            style={{ textAlign: "right", width: "60%" }}
          >
            <h3>{t("partners.stats")}</h3>
            <p>{t("partners.events")}</p>
            <ul style={{ listStyleType: "none" }}>
              <li className="info-list-element">
                <h3 className="info-list-number">
                  +
                  <CountUp end={3000} duration={2} useEasing={false} />
                </h3>{" "}
                {t("partners.people")}
              </li>
              <li className="info-list-element">
                <h3 className="info-list-number">
                  +
                  <CountUp end={33000} duration={2} useEasing={false} />
                </h3>{" "}
                {t("partners.yt_views")}
              </li>
              <li className="info-list-element">
                <h3 className="info-list-number">
                  +
                  <CountUp end={50} duration={2} useEasing={false} />
                </h3>{" "}
                {t("partners.partners")}
              </li>
              <li className="info-list-element">
                <h3 className="info-list-number">
                  +
                  <CountUp end={300} duration={2} useEasing={false} />
                </h3>{" "}
                {t("partners.volunteers")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="bottom-gradient"
        style={{
          height: "100px",
          width: "100%",
          backgroundImage: "linear-gradient(to bottom, #191919, black)",
        }}
      ></div>
      <PartnersSlider />
    </>
  );
}
