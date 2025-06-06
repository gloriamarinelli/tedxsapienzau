/* -------------------- React's components import -------------------- */
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
import global from "../../../resources/global.json";
import SponsorCard25 from "../SponsorCard25";
import sponsorsInfo from "./sponsors_info_list.json";

/* -------------------- css files import -------------------- */
import "../../../resources/styles/partnerstyle.css";
import "../../../resources/styles/partnercommunity.css";
import "../../../index.css";

export default function SponsorsList25() {
  const [windowSize] = useOutletContext(); // window's size variable
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const lang_it = "it";

  /* partners filtering depending on "partner_type" */
  const mainPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "main"
  );
  const supportingPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "supporting"
  );
  const smartPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "smart"
  );
  const friendlyPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "friendly"
  );
  const communityPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "community"
  );
  const patrocinioPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "patrocinio"
  );
  const patrocinioEPPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "patrocinio_europe"
  );
  const genericPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "generic"
  );
  const technicalPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "technical"
  );
  const mediaPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "media"
  );
  const gastroPartners = sponsorsInfo.partners.filter(
    (p) => p.partner_type === "gastro"
  );
  const creativePartners = sponsorsInfo.partners.filter(
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

  /* grid group style const */
  const gridGroupStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  const flexStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
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
      <SponsorCard25
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

  return windowSize > global.UTILS.BIG_TABLET_WIDTH ? (
    /* desktop layout */
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
        <div id="main_&_supporting_div" style={gridGroupStyle}>
          <div id="ext_main_div">
            <h2 style={pTypeStyle}>Main Sponsor</h2>
            <div id="int_main_div">{renderPartners(mainPartners)}</div>
          </div>

          <div id="ext_supporting_div">
            <h2 style={pTypeStyle}>Supporting Sponsors</h2>
            <div id="int_supporting_div" style={flexStyle}>
              {renderPartners(supportingPartners)}
            </div>
          </div>
        </div>
        <div id="tech_&_smart_div" style={gridGroupStyle}>
          <div id="ext_technical_div">
            <h2 style={pTypeStyle}>Technical Sponsors</h2>
            <div id="int_technical_div" style={flexStyle}>
              {renderPartners(technicalPartners)}
            </div>
          </div>

          <div id="ext_smart_div">
            <h2 style={pTypeStyle}>Smart Sponsor</h2>
            <div id="int_smart_div">{renderPartners(smartPartners)}</div>
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
        <div id="ext_generic_div">
          <h2 style={pTypeStyle}>Partners</h2>
          <div id="int_generic_div" style={gridStyle}>
            {renderPartners(genericPartners)}
          </div>
        </div>

        <div id="ext_creative_div">
          <h2 style={pTypeStyle}>Creative Partner</h2>
          <div id="int_creative_div">{renderPartners(creativePartners)}</div>
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
  ) : (
    /* tablet + mobile layout */
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
          <h2 style={pTypeStyle}>Main Sponsor</h2>
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
          <h2 style={pTypeStyle}>Smart Sponsor</h2>
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

        <div id="ext_generic_div">
          <h2 style={pTypeStyle}>Partners</h2>
          <div id="int_generic_div" style={gridStyle}>
            {renderPartners(genericPartners)}
          </div>
        </div>

        <div id="ext_creative_div">
          <h2 style={pTypeStyle}>Creative Partner</h2>
          <div id="int_creative_div" style={gridStyle}>
            {renderPartners(creativePartners)}
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
