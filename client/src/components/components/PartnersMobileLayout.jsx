import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import global from "../../resources/global.json";

export default function PartnersMobileLayout() {
  const { t } = useTranslation(); // translation variable

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
