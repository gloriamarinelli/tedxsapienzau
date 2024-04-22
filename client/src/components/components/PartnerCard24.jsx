import React from "react";

export default function PartnerCard24({ imgSrc, altText, divClassName }) {
  return (
    <>
      <div className={`image-scroller-img ${divClassName}`}>
        <img
          className={"img-slider"}
          src={`/images/partners24/${imgSrc}`}
          alt={altText}
        ></img>
      </div>
    </>
  );
}
