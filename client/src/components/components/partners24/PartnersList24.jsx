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
    (p) => p.partner_type === "patrocinio_europe"
  );
  const genericPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "generic"
  );
  const technicalPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "technical"
  );
  const mediaPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "media"
  );
  const gastroPartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "gastro"
  );
  const creativePartners = partnersInfo.partners.filter(
    (p) => p.partner_type === "creative"
  );

  /* grid style const */
  const gridStyle = {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns:
      windowSize > global.UTILS.BIG_TABLET_WIDTH
        ? "repeat(4, 1fr)" // desktop view (4 columns)
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
        <div id="ext_main_div">
          <h2 style={pTypeStyle}>Main Sponsors</h2>
          <div id="int_main_div" style={gridStyle}>
            {renderPartners(mainPartners)}
          </div>
        </div>

        <div id="ext_supporting_div">
          <h2 style={pTypeStyle}>Supporting Sponsors</h2>
          <div id="int_supporting_div" style={gridStyle}>
            {renderPartners(supportingPartners)}
          </div>
        </div>

        <div id="ext_technical_div">
          <h2 style={pTypeStyle}>Technical Sponsors</h2>
          <div id="int_technical_div" style={gridStyle}>
            {renderPartners(technicalPartners)}
          </div>
        </div>

        <div id="ext_smart_div">
          <h2 style={pTypeStyle}>Smart Sponsors</h2>
          <div id="int_smart_div" style={gridStyle}>
            {renderPartners(smartPartners)}
          </div>
        </div>

        <div id="ext_gastro_div">
          <h2 style={pTypeStyle}>Gastronomic Sponsor</h2>
          <div id="int_gastro_div" style={gridStyle}>
            {renderPartners(gastroPartners)}
          </div>
        </div>

        <div id="ext_friendly_div">
          <h2 style={pTypeStyle}>Friendly Sponsors</h2>
          <div id="int_friendly_div" style={gridStyle}>
            {renderPartners(friendlyPartners)}
          </div>
        </div>

        <div id="ext_media_div">
          <h2 style={pTypeStyle}>Media Sponsors</h2>
          <div id="int_media_div" style={gridStyle}>
            {renderPartners(mediaPartners)}
          </div>
        </div>

        <div id="ext_creative_div">
          <h2 style={pTypeStyle}>Creative Sponsor</h2>
          <div id="int_creative_div" style={gridStyle}>
            {renderPartners(creativePartners)}
          </div>
        </div>

        <div id="ext_generic_div">
          <h2 style={pTypeStyle}>Partners</h2>
          <div id="int_generic_div" style={gridStyle}>
            {renderPartners(genericPartners)}
          </div>
        </div>

        <div id="ext_community_div">
          <h2 style={pTypeStyle}>Community Partners</h2>
          <div id="int_community_div" style={gridStyle}>
            {renderPartners(communityPartners)}
          </div>
        </div>

        <div id="ext_patrocinio_div">
          <h2 style={pTypeStyle}>{t("partners_list.patrocinio_div")}</h2>
          <div id="int_patrocinio_div" style={gridStyle}>
            {renderPartners(patrocinioPartners)}
          </div>
        </div>

        <div id="ext_patrocinioEP_div">
          <h2 style={pTypeStyle}>{t("partners_list.patrocinioEP_div")}</h2>
          <div id="int_patrocinioEP_div" style={gridStyle}>
            {renderPartners(patrocinioEPPartners)}
          </div>
        </div>
      </div>
    </div>
  );
}
