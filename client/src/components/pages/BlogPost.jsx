import React, { useState, useEffect } from "react";
import axios from "axios";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router";
import { it } from "date-fns/locale";
import global from "../../resources/global.json";

export default function BlogPost() {
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(global.CONNECTION.ENDPOINT + `blog/${id}`)
      .then((res) => {
        if (!res.data) {
          // Controlla se il dato è valido
          navigate("/blog");
        } else {
          setBlogPost(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id, navigate]);

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
  }

  return (
    <BlogCardPost
      titolo={blogPost.titolo}
      descrizione={blogPost.descrizione}
      image={blogPost.image}
      data={blogPost.data}
      autore={blogPost.autore}
    />
  );
}

/**
 *
 * @param {String} titolo
 * @param {String} descrizione
 * @param {String} image
 * @param {Date} data
 * @returns Carta container del blog post
 */
function BlogCardPost({ titolo, descrizione, image, data, autore }) {
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
