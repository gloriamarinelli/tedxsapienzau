import React from "react";

export default function PartnerCard24({ imgSrc, altText, id }) {
  return (
    <>
      <div id={`${id}`} className="image-scroller-div" >
        <img
          className={"img-slider"}
          src={`/images/partners24/${imgSrc}`}
          alt={altText}
        ></img>
      </div>
    </>
  );
}
