import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router";
import { it } from "date-fns/locale";

import global from "../../resources/global.json";

export default function BlogPost() {
  const [blogPost, setBlogPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(global.CONNECTION.ENDPOINT + `blog/${id}`)
      .then((res, err) => {
        if (
          res.data === null ||
          res.data === undefined ||
          res.data === {} ||
          res.data === ""
        ) {
          navigate("/blog");
        } else {
          setBlogPost(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // eslint-disable-next-line no-lone-blocks

  if (isLoading) {
    return (
      <div
        style={{ marginTop: global.UTILS.NAV_HEIGHT, backgroundColor: "#000" }}
      >
        <div className="main-container">
          <div
            className="post-container"
            style={{ marginTop: "70px", height: "100vh" }}
          >
            <div className="rectangle large shimmer"></div>
            <div className="rectangle medium shimmer"></div>
            <div className="rectangle small shimmer"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return BlogCardPost(
      blogPost.titolo,
      blogPost.descrizione,
      blogPost.image,
      blogPost.data,
      blogPost.autore
    );
  }
}

/**
 *
 * @param {String} titolo
 * @param {String} descrizione
 * @param {String} image
 * @param {Date} data
 * @returns Carta container del blog post
 */
function BlogCardPost(titolo, descrizione, image, data, autore) {
  return (
    <div
      className="main-container"
      style={{ marginTop: global.UTILS.NAV_HEIGHT, backgroundColor: "#000" }}
    >
      <div className="post-container">
        <div className="d-flex" style={{ fontSize: "18px", flexWrap: "wrap" }}>
          <p style={{ marginRight: "10px" }}>
            {autore}{" "}
            <FontAwesomeIcon
              icon={faFeatherPointed}
              style={{ marginRight: "10px" }}
            />
            ·
          </p>
          <p>
            {data ? format(new Date(data), "d MMM YYY", { locale: it }) : ""}
          </p>
        </div>
        <hr className="featurette-divider"></hr>
        <h1>{titolo}</h1>
        <p dangerouslySetInnerHTML={{ __html: descrizione }}></p>
        <img
          src={`data:image/*;base64,${image ?? ""}`}
          alt={titolo}
          className="post-image"
        />
        <hr className="featurette-divider"></hr>
      </div>
    </div>
  );
}
