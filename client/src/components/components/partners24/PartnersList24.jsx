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
  const currentLanguage = i18n.language;
  const lang_it = "it";

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
          Partners
        </h1>
      </div>
      <div
        id="partners_div"
        style={{
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
        }}
      >
        {partnersInfo.partners.map((partner) => (
          <PartnerCard24
            key={partner.id}
            name={partner.name}
            imgName={partner.imgName}
            descr={
              currentLanguage == lang_it ? partner.descr_it : partner.descr_en
            }
          />
        ))}
      </div>
    </div>
  );
}
