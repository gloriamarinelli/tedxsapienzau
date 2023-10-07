import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Iframe from "react-iframe";

export default function NewsletterBrevo() {
  const state = useLocation().state;
  const [windowSize, setWindowSize] = useOutletContext();

  return (
    <>
      <div
        className="gradient-background"
        style={{
          backgroundColor: "red",
          textAlign: "left",
          display: "grid",
          height: "40vh",
          color: "#fff",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          placeItems: "center",
          marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5 text-center"
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          Resta aggiornato <br />
          Iscriviti anche tu alla newsletter!{" "}
        </h1>
      </div>

      <Iframe
        width="100%"
        height="500"
        src="https://31dfcf3b.sibforms.com/serve/MUIFANTb2PgDRsFNib3WYsB0XikTNHLNqorfqEr1y3O0yDmb2V_mpbIggi5dgSHaVxdd0hKFu2ulrerVG35KEmlZgr7boTiHk5Un9lPyBHaucqk-KkSev4b0mEzcM7KqfVTmJfrt43ut2jt_JfywGkiZ9yK02Ryyc2k5zjCbLqWiv2_UFWKF5WQScWWJYrjd_xQQjfYzc6Te6S4n"
      ></Iframe>
    </>
  );
}
