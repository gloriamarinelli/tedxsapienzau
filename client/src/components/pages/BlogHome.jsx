import React, { useContext } from "react";
import "../../resources/styles/blogstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import { Pagination } from "react-bootstrap";

export default function Blog({ withTitle = true }) {
  const [blog, setBlog] = useState([]);
  const [blogSize, setBlogSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowSize, setWindowSize] = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const pageSize = 4;
  const clearDbIncrement = 10;
  const clearDbMagic = 2;

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "blog/count")
      .then((res) => {
        setBlogSize(res.data[0].posts);
        getCurrentPagePosts();
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getCurrentPagePosts();
  }, [currentPage, blogSize]);

  const getCurrentPagePosts = () => {
    if (blogSize === 0) return;
    let start = blogSize - pageSize * currentPage + clearDbMagic;
    let end = blogSize - pageSize * (currentPage - 1) + clearDbMagic;
    axios
      .get(
        global.CONNECTION.ENDPOINT +
          `blog?start=${start * clearDbIncrement}&end=${end * clearDbIncrement}`
      )
      .then((res) => {
        setBlog(res.data.reverse());
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div style={{ backgroundColor: "#000" }}>
          <section>
            <h1
              style={{
                color: "#FFF",
                fontFamily: "Fira Sans Extra Condensed",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                display: "flex",
                padding: "60px",
                fontSize: "6vh",
              }}
            >
              BLOG
            </h1>
          </section>
          <section>
            {!isLoading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {blog.map((blog) => {
                  const { id, titolo, image, data } = blog;
                  return (
                    <BlogCard
                      key={id}
                      titolo={titolo}
                      image={image}
                      data={data}
                      id={id}
                    />
                  );
                })}
              </div>
            ) : (
              <div class="blog-card">
                <div class="meta">
                  <div
                    class="photo shimmer"
                    style={{
                      background: "lightgrey",
                      width: "350px",
                      height: "250px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    alt={"loading"}
                  ></div>
                </div>
                <div class="description">
                  <h4
                    style={{
                      fontFamily: "GothamBold",
                    }}
                  >
                    Loading...
                  </h4>
                </div>
              </div>
            )}
            {!isLoading}
          </section>
        </div>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        {!isLoading ? (
          blog.map((blog) => {
            const { id, titolo, image, data } = blog;
            return (
              <BlogCard
                key={id}
                titolo={titolo}
                image={image}
                data={data}
                id={id}
              />
            );
          })
        ) : (
          <div class="blog-card">
            <div class="meta">
              <div
                class="photo shimmer"
                style={{
                  background: "lightgrey",
                  width: "100%",
                  height: "250px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                alt={"loading"}
              ></div>
            </div>
            <div class="description">
              <h4
                style={{
                  fontFamily: "GothamBold",
                }}
              >
                Loading...
              </h4>
            </div>
          </div>
        )}
      </>
    );
  }
}
