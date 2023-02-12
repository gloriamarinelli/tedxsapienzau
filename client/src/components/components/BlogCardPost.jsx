import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogCardPost({
  titolo,
  descrizione,
  image,
  data  
}) {
  return (
    <div className="main-container">
      <div className="post-container">
        <p>{data}</p>
        <hr className="featurette-divider"></hr>
        <h1>{titolo}</h1>
        <p>{descrizione}</p>
        <img
          src={`data:image/*;base64,${image}`}
          alt={titolo}
          className="post-image"
        />
        <hr className="featurette-divider"></hr>
        <div className="post-social-container">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </div>
      </div>
    </div>
  );
}
