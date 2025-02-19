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
          flexDirection:
            windowSize > global.UTILS.TABLET_WIDTH ? "row" : "column",
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
