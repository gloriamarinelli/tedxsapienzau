import React from "react";
import "../../resources/styles/blogstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/blog")
      .then((res, err) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

      {blog.map((blog) => {
        const { id, titolo, descrizione, image, data } = blog;
        console.log(titolo, data, image);
        return (
          <div class="container">
            <div class="row no-gutters" key={blog.id}>
              <div class="col-xl-6 col-12 mb-5 mb-xl-0">
                <div class="col-xl-6 col-12">
                  <div class="media media-news">
                    <div class="media-img">
                      <img src={blog.image} width="400" height="280" />
                    </div>
                    <div class="media-body">
                      <span class="media-date">{blog.data}</span>
                      <h5 class="mt-3 sep">
                      {blog.titolo}
                      </h5>
                      <p to={`/blog/${blog.id}`}>
                        <button className="button">View More</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
