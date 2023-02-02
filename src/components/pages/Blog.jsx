import React from "react";
import "../../resources/styles/blogstyle.css";
import Image from "../images/blogPOST1.png";
import Image1 from "../images/blog2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Blog() {
  return (
    <>
      <div
        className="header-blog"
        style={{
          textAlign: "left",
          color: "white",
          display: "grid",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          height: "50vh",
        }}
      >
        <h1
          className="font-weight-bold mt-5"
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            marginLeft: "30px",
          }}
        >
          IDEAS WORTH SPREADING
        </h1>
        <p
          style={{
            fontSize: "50px",
            fontStyle: "italic",
            marginLeft: "30px",
          }}
        >
          Le{" "}
          <strong
            style={{
              color: "#EB0028",
            }}
          >
            idee
          </strong>{" "}
          per cambiare il mondo
        </p>
      </div>

      <div class="container">
        <div class="row no-gutters">
          <div class="col-xl-6 col-12 mb-5 mb-xl-0">
            <div class="media media-news">
              <div class="media-img">
              <LazyLoadImage
							src={Image}
							alt="Post"
							width="400"
							height="280"
						/>
              </div>
              <div class="media-body">
                <span class="media-date">24 dic 2022</span>
                <h5 class="mt-3 sep">
                  Natale con TEDxSapienzaU: un albero condiviso e mille idee
                  appese ai rami
                </h5>
                <a
                  href="blog-post-right-sidebar.html"
                  class="btn btn-transparent"
                >
                  View More
                </a>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-12">
            <div class="media media-news">
              <div class="media-img">
              <LazyLoadImage
							src={Image1}
							alt="Post"
							width="400"
							height="280"
						/>
              </div>
              <div class="media-body">
                <span class="media-date">16 dic 2022</span>
                <h5 class="mt-3 sep">
                  {" "}
                  Essere artisti nel mondo degli NFT: l’autenticità restituisce
                  valore ai digital artists
                </h5>
                <a
                  href="blog-post-right-sidebar.html"
                  class="btn btn-transparent"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row no-gutters mt-4">
          <div class="col-xl-6 col-12 mb-5 mb-xl-0">
            <div class="media media-news">
              <div class="media-img">
              <LazyLoadImage
							src={Image1}
							alt="Post"
							width="400"
							height="280"
						/>
              </div>
              <div class="media-body">
                <span class="media-date">09 dic 2022</span>
                <h5 class="mt-3 sep">
                  Progresso: antiche istruzioni per l'uso
                </h5>
                <a
                  href="blog-post-right-sidebar.html"
                  class="btn btn-transparent"
                >
                  View More
                </a>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-12">
            <div class="media media-news">
              <div class="media-img">
              <LazyLoadImage
							src={Image1}
							alt="Post"
							width="400"
							height="280"
						/>
              </div>
              <div class="media-body">
                <span class="media-date">02 dic 2022</span>
                <h5 class="mt-3 sep">
                  ProVocAzione: musica, sensualità ed identità. Volosumarte
                </h5>
                <a
                  href="blog-post-right-sidebar.html"
                  class="btn btn-transparent"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
