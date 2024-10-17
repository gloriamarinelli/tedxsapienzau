import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Image from "../images/location3.jpg";
import Image2 from "../images/location2.webp";
import "../../index.css";

import { useTranslation } from "react-i18next";

/**
 * Location page that talks about Sapienza University
 */
export default function Location() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();

  return (
    <>
      <section
        style={{
          marginTop: global.UTILS.NAV_HEIGHT,
          backgroundColor: global.COLORS.NERO,
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5 text-center"
          style={{
            fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "50px" : "30px",
            fontWeight: "bold",
            fontFamily: "Fira Sans Extra Condensed",
            color: "#fff",
            margin: "10px",
          }}
        >
          {t("location.title1")}
        </h1>

        <div
          style={{
            backgroundColor: "#191919",
            borderRadius: "25px",
            width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
            height: windowSize > global.UTILS.MOBILE_WIDTH ? "200px" : "100px",
            margin: "auto",
            padding: "30px",
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition:
              windowSize > global.UTILS.MOBILE_WIDTH
                ? "0px -300px"
                : "0px -600px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#191919",
            borderRadius: "25px",
            width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
            margin: "auto",
            padding: windowSize > global.UTILS.MOBILE_WIDTH ? "30px" : "5px",
            marginTop: "50px",
          }}
        >
          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              marginTop: "20px",
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
              fontFamily: "Fira sans Extra Condensed",
              fontWeight: "400",
            }}
          >
            {t("location.a1")}
            <strong>{t("location.a2")}</strong>
            {t("location.a3")}
            <strong>{t("location.a4")}</strong>
            {t("location.a5")}
            <strong>{t("location.a6")}</strong>
            {t("location.a7")}
            <strong>{t("location.a8")}</strong>
            {t("location.a9")}
            <i>{t("location.a10")}</i>
            {t("location.a11")}
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              marginTop: "20px",
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
              fontFamily: "Fira sans Extra Condensed",
              fontWeight: "400",
            }}
          >
            {t("location.b1")}
            <a
              href="https://www.uniroma1.it/it/pagina/la-storia"
              style={{ color: "#EB0028" }}
            >
              {t("location.b2")}
            </a>
            {t("location.b3")}
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
              fontFamily: "Fira sans Extra Condensed",
              fontWeight: "400",
              marginTop: "20px",
            }}
          >
            {t("location.c1")}
            <a
              href="https://www.uniroma1.it/it/notizia/la-sapienza-nei-ranking"
              style={{ color: "#EB0028" }}
            >
              {t("location.c2")}
            </a>
            {t("location.c3")}
            <strong>{t("location.c4")}</strong> {t("location.c5")}{" "}
            <strong>{t("location.c6")}</strong> {t("location.c7")}
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
              fontFamily: "Fira sans Extra Condensed",
              fontWeight: "400",
              marginTop: "20px",
            }}
          >
            {t("location.d1")}
            <a
              href="https://www.uniroma1.it/it/pagina-strutturale/corsi-e-iscrizioni"
              style={{ color: "#EB0028" }}
            >
              {t("location.d2")}
            </a>
            <strong>{t("location.d3")}</strong>
            {t("location.d4")}
            <strong>{t("location.d5")}</strong>,{t("location.d6")}
            <strong>{t("location.d7")}</strong>
            {t("location.d8")}
            <strong>{t("location.d9")}</strong>
            {t("location.d10")}
            <strong>{t("location.d11")}</strong>
            {t("location.d12")}
            <strong>{t("location.d13")}</strong>
            {t("location.d14")}
            <strong>{t("location.d15")}</strong>
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
              fontFamily: "Fira sans Extra Condensed",
              fontWeight: "400",
              marginTop: "20px",
            }}
          >
            {t("location.e1")}
            <a
              href="https://www.uniroma1.it/it/pagina-strutturale/ricerca-scientifica"
              style={{ color: "#EB0028" }}
            >
              {t("location.e2")}
            </a>{" "}
            {t("location.e3")}
            <strong>{t("location.e4")}</strong> {t("location.e5")}
          </p>

          <p
            className="paragraph"
            style={{
              textAlign: "justify",
              color: "#fff",
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
              fontFamily: "Fira sans Extra Condensed",
              fontWeight: "400",
              marginTop: "20px",
            }}
          >
            {t("location.f1")}
            <a
              href="https://www.uniroma1.it/it/pagina-strutturale/sapienza-sostenibile"
              style={{ color: "#EB0028" }}
            >
              {t("location.f2")}
            </a>{" "}
            {t("location.f3")}
            <strong>{t("location.f4")}</strong>
            {t("location.f5")}
            <a
              href="https://www.uniroma1.it/it/pagina/rapporto-di-sostenibilita"
              style={{ color: "#EB0028" }}
            >
              {t("location.f6")}
            </a>{" "}
            {t("location.f7")}
          </p>
        </div>
        <h1
          className="font-weight-bold mt-5 mb-5 text-center"
          style={{
            fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "50px" : "30px",
            fontWeight: "bold",
            fontFamily: "Fira Sans Extra Condensed",
            color: "#fff",
            margin: "10px",
          }}
        >
          {t("location.title2")}
        </h1>
        <div>
          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
              height:
                windowSize > global.UTILS.MOBILE_WIDTH ? "200px" : "100px",
              margin: "auto",
              padding: "30px",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition:
                windowSize > global.UTILS.MOBILE_WIDTH
                  ? "0px -400px"
                  : "0px -5000px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "90%",
              margin: "auto",
              padding: windowSize > global.UTILS.MOBILE_WIDTH ? "30px" : "5px",
              marginTop: "50px",
            }}
          >
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                color: "#fff",
                fontSize:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
                fontFamily: "Fira sans Extra Condensed",
                fontWeight: "400",

                marginTop: "20px",
              }}
            >
              {t("location.g1")}
              <a
                href="https://www.uniroma1.it/it/pagina/strutture"
                style={{ color: "#EB0028" }}
              >
                {t("location.g2")}
              </a>
              <strong>{t("location.g3")}</strong>{t("location.g4")}
              <strong>{t("location.g5")}</strong>{t("location.g6")}
            </p>
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                color: "#fff",
                fontSize:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
                fontFamily: "Fira sans Extra Condensed",
                fontWeight: "400",
                marginTop: "20px",
              }}
            >
              {t("location.h1")}
              <strong>{t("location.h2")}</strong>
              {t("location.h3")}
              <strong>{t("location.h4")}</strong>{t("location.h5")}
            </p>{" "}
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                color: "#fff",

                marginTop: "20px",
                fontSize:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "20px" : "15px",
                fontFamily: "Fira sans Extra Condensed",
                fontWeight: "400",
              }}
            >
              {t("location.i1")}
              <strong>
              {t("location.i2")}
              </strong>
              {t("location.i3")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
