import React, { useContext } from "react";
import "../../resources/styles/blogstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import { Pagination } from "react-bootstrap";
import backgroundBlog from "../../components/images/header_blog23.webp";

export default function Blog({ withTitle = true }) {
  const [blog, setBlog] = useState([]);
  const [blogSize, setBlogSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowSize, setWindowSize] = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const pageSize = 12;
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

  const getButtons = () => {
    let items = [];

    for (let number = 1; number <= Math.ceil(blogSize / pageSize); number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => {
            window.scrollTo(0, 0);
            setCurrentPage(number);
            setIsLoading(true);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "20px 0 0 0 ",
          background: "#000",
        }}
      >
        <Pagination>{items}</Pagination>
      </div>
    );
  };

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div style={{ backgroundColor: "#000" }}>
          <section
            style={{
              marginTop: global.UTILS.NAV_HEIGHT,
              backgroundColor: global.COLORS.NERO,
              padding: "10px",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              placeItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "99%",
                height: "90%",
                padding: global.UTILS.BENTO_BOX_PADDING,
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                backgroundImage: `url(${backgroundBlog})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",

                textAlign: "left",
              }}
            >
              <h1
                className="font-weight-bold mt-5 mb-5"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: global.COLORS.BIANCO,
                }}
              >
                IDEAS WORTH SPREADING
              </h1>
              <h5
                className="fira-sans"
                style={{
                  textAlign: "left",
                  fontSize: "4vh",
                  fontWeight: 300,
                  maxWidth: "30ch",
                  color: "#FFFFFF",
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
              </h5>
            </div>
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
            {!isLoading && getButtons()}
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
        <div style={{ backgroundColor: "#000" }}>
          <section
            style={{
              marginTop: global.UTILS.NAV_HEIGHT,
              backgroundColor: global.COLORS.NERO,
              padding: "10px",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              placeItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "99%",
                height: "90%",
                padding: global.UTILS.BENTO_BOX_PADDING,
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                backgroundImage: `url(${backgroundBlog})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",

                textAlign: "left",
              }}
            >
              <h1
                className="font-weight-bold mt-5 mb-5"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: global.COLORS.BIANCO,
                }}
              >
                IDEAS WORTH SPREADING
              </h1>
              <h5
                className="fira-sans"
                style={{
                  textAlign: "left",
                  fontSize: "4vh",
                  fontWeight: 300,
                  maxWidth: "30ch",
                  color: "#FFFFFF",
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
              </h5>
            </div>
          </section>
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
          {getButtons()}
        </div>
      </>
    );
  }
}
