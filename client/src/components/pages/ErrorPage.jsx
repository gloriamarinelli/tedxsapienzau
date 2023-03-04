import React from "react";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";

export default function ErrorPage() {
  /**
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
   
     * DESKTOP
     */
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5vw",
          flexWrap: "wrap",
        }}
      >
        <svg
          style={{ flex: "0 1 450px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0, 0, 410, 164"
        >
          <path
            d="M43 54H2V16h127v38H88v109H43zM311.976 125l18.584.126c28.145 0 32.259-22.814 32.259-36.595 0-9.233-3.187-34.531-35.851-34.531h-14.992v71zM267 16h74.858C390.731 16 408 52.172 408 89.15c0 45.022-23.819 73.85-74.968 73.85H267V16z"
            fill="#EB0028"
          ></path>
          <path
            d="M136 16h124v38h-78v18h78v35h-78v18h78v38H136z"
            stroke="#CCC"
            strokeWidth="1"
            strokeDasharray="4,6"
            fill="none"
          ></path>
        </svg>
        <div>
          <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>404</h1>
          <p style={{ fontSize: "20px", maxWidth: "20ch" }}>
            Sembra che questa pagina non esista{" "}
          </p>
          <Link
            to="/"
            style={{
              padding: "10px 20px",
              backgroundColor: global.COLORS.ROSSO_TED,
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </>
  );
}
