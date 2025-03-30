/* -------------------- React's components import -------------------- */
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
import global from "../../../resources/global.json";
import PartnerCard24 from "../PartnerCard24";
import partnersInfo from "./partners_info_list.json";

/* -------------------- css files import -------------------- */
import "../../../resources/styles/partnerstyle.css";
import "../../../resources/styles/partnercommunity.css";
import "../../../index.css";

export default function PartnersList24() {
  const [windowSize] = useOutletContext(); // window's size variable
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const lang_it = "it";

  /* partners filtering depending on "partner_type" */
  const mainPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "main"
  );
  const supportingPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "supporting"
  );
  const smartPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "smart"
  );
  const friendlyPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "friendly"
  );
  const communityPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "community"
  );
  const patrocinioPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "patrocinio"
  );
  const patrocinioEPPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "patrocinio_ep"
  );
  const genericPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "generic"
  );
  const technicalPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "technical"
  );

  /* grid style const */
  const mainGridStyle = {
    marginTop: "30px",
    display: windowSize > global.UTILS.BIG_TABLET_WIDTH ? "flex" : "grid", // desktop view
    gridTemplateColumns:
      windowSize > global.UTILS.TABLET_WIDTH
        ? "repeat(2, 1fr)" // tablet view (2 columns)
        : "repeat(1, 1fr)", // smartphone view (1 column)
    gap:
      windowSize > global.UTILS.BIG_TABLET_WIDTH
        ? "100px" // desktop view
        : windowSize > global.UTILS.TABLET_WIDTH
        ? "50px" // tablet view
        : "30px", // smartphone view
    justifyContent: "center",
  };

  /* grid style const */
  const secondaryGridStyle = {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns:
      windowSize > global.UTILS.BIG_TABLET_WIDTH
        ? "repeat(5, 1fr)" // desktop view ( columns)
        : windowSize > global.UTILS.TABLET_WIDTH
        ? "repeat(2, 1fr)" // tablet view (2 columns)
        : "repeat(1, 1fr)", // smartphone view (1 column)
    gap:
      windowSize > global.UTILS.BIG_TABLET_WIDTH
        ? "100px" // desktop view
        : windowSize > global.UTILS.TABLET_WIDTH
        ? "50px" // tablet view
        : "30px", // smartphone view
    justifyContent: "center",
  };

  /* sections title style const */
  const pTypeStyle = {
    color: "white",
    marginTop: "70px",
    fontSize: windowSize > global.UTILS.TABLET_WIDTH ? "50px" : "6vw",
  };

  /* group div flex style const */
  const groupDivFlexStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: windowSize > global.UTILS.BIG_TABLET_WIDTH ? "100px" : "",
    justifyContent: "center",
  };

  /* group div grid style const */
  const groupDivmainGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    marginTop: "30px",
  };

  /* generate partners card */
  const renderPartners = (partners) =>
    partners.map((partner) => (
      <PartnerCard24
        key={partner.id}
        name={partner.name}
        imgName={partner.imgName}
        descr={
          currentLanguage === lang_it ? partner.descr_it : partner.descr_en
        }
        partner_type={partner.partner_type}
        wb_link={partner.wb_link}
      />
    ));

  return (
    <div id="external_div">
      <div id="title_div">
        <h1
          className="font-weight-bold headerTitle"
          style={{
            fontSize: windowSize > global.UTILS.TABLET_WIDTH ? "120px" : "12vw",
            textTransform: "uppercase",
          }}
        >
          Sponsors
        </h1>
      </div>
      <div id="list_div">
        <div id="main_&_supporting_&_tech" style={groupDivFlexStyle}>
          <div id="ext_main_div">
            <h2 style={pTypeStyle}>Main Sponsors</h2>
            <div id="int_main_div" style={mainGridStyle}>
              {renderPartners(mainPartners)}
            </div>
          </div>

          <div id="ext_supporting_div">
            <h2 style={pTypeStyle}>Supporting Sponsors</h2>
            <div id="int_supporting_div" style={mainGridStyle}>
              {renderPartners(supportingPartners)}
            </div>
          </div>

          <div id="ext_technical_div">
            <h2 style={pTypeStyle}>Technical Sponsors</h2>
            <div id="int_technical_div" style={mainGridStyle}>
              {renderPartners(technicalPartners)}
            </div>
          </div>
        </div>

        <div id="smart_&_friendly" style={groupDivFlexStyle}>
          <div id="ext_smart_div">
            <h2 style={pTypeStyle}>Smart Sponsors</h2>
            <div id="int_smart_div" style={mainGridStyle}>
              {renderPartners(smartPartners)}
            </div>
          </div>

          <div id="ext_friendly_div">
            <h2 style={pTypeStyle}>Friendly Sponsors</h2>
            <div id="int_friendly_div" style={mainGridStyle}>
              {renderPartners(friendlyPartners)}
            </div>
          </div>
        </div>

        <div id="others" style={groupDivFlexStyle}>
          <div id="ext_generic_div">
            <h2 style={pTypeStyle}>Partners</h2>
            <div id="int_generic_div" style={secondaryGridStyle}>
              {renderPartners(genericPartners)}
            </div>
          </div>

          <div id="ext_community_div">
            <h2 style={pTypeStyle}>Community Partners</h2>
            <div id="int_community_div" style={secondaryGridStyle}>
              {renderPartners(communityPartners)}
            </div>
          </div>

          <div id="ext_patrocinio_div">
            <h2 style={pTypeStyle}>{t("partners_list.patrocinio_div")}</h2>
            <div id="int_patrocinio_div" style={secondaryGridStyle}>
              {renderPartners(patrocinioPartners)}
            </div>
          </div>

          <div id="ext_patrocinioEP_div">
            <h2 style={pTypeStyle}>{t("partners_list.patrocinioEP_div")}</h2>
            <div id="int_patrocinioEP_div" style={secondaryGridStyle}>
              {renderPartners(patrocinioEPPartners)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
