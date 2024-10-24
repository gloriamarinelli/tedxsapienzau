import React from "react";

export default function PartnerCard24({ imgSrc, altText }) {
  return (
    <>
      <div className="partner_card_24_div">
        <img
          className="partner_card_24_img"
          src={`/images/partners24/${imgSrc}`}
          alt={altText}
        ></img>
      </div>
    </>
  );
}
