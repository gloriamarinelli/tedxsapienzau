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
    <div
      id="external_div"
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Fira Sans Extra Condensed,  sans-serif",
      }}
    >
      <div
        id="title_div"
        style={{
          color: "white",
          //marginTop: "95px",
        }}
      >
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
          display: "flex",
          //gridTemplateColumns: "repeat(4, 1fr)",
          flexDirection:
            windowSize > global.UTILS.TABLET_WIDTH ? "row" : "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "35px 0",
          height: "auto",
          width: "90%", // 110% to match footer's width
        }}
      >
        {partnersInfo.partners.map((partner) => (
          <PartnerCard24
            key={partner.id}
            name={partner.name}
            css_name={partner.css_name}
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
