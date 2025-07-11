import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import { Pagination } from "react-bootstrap";
import backgroundBlog from "../../components/images/header_blog23.webp";

import "../../resources/styles/blogstyle.css";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [blogSize, setBlogSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowSize] = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);

  useContext(AuthContext);

  const pageSize = 6;
  const clearDbIncrement = 1;
  const clearDbMagic = 0;

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "blog/count")
      .then((res) => {
        console.log("Blog count response:", res.data);
        setBlogSize(res.data[0].posts);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (blogSize > 0) {
      getCurrentPagePosts();
    }
  }, [currentPage, blogSize]);

  const getCurrentPagePosts = () => {
    if (blogSize === 0) return;
    let start = blogSize - pageSize * currentPage + clearDbMagic;
    let end = blogSize - pageSize * (currentPage - 1) + clearDbMagic;

    console.log("Fetching posts from", start, "to", end);

    setIsLoading(true);
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
        setIsLoading(false);
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
              padding: "25px",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              placeItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="headerTitleSection"
              style={{
                padding: global.UTILS.BENTO_BOX_PADDING,
              }}
            >
              <h1 className="font-weight-bold headerTitle">BLOG</h1>
              <p className="headerSubTitle">Ideas change everything</p>
            </div>
          </section>
          <section>
            {!isLoading ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[...Array(Math.ceil(blog.length / 3))].map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      gap: "150px",
                      margin: "auto",
                    }}
                  >
                    {[...Array(3)].map((_, colIndex) => {
                      const cardIndex = rowIndex * 3 + colIndex;
                      const blogItem = blog[cardIndex];
                      return blogItem ? (
                        <div
                          key={blogItem.id}
                          style={{ flex: 1, margin: "0 10px" }}
                        >
                          <BlogCard
                            titolo={blogItem.titolo}
                            image={blogItem.image}
                            data={blogItem.data}
                            id={blogItem.id}
                          />
                        </div>
                      ) : null;
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "150px",
                }}
              >
                {[...Array(3)].map((_) => {
                  return (
                    <div style={{ backgroundColor: "#000" }}>
                      <div className="blog-card">
                        <div className="meta">
                          <div
                            className="photo shimmer"
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
                        <div className="description">
                          <div className="rectangle medium shimmer"></div>
                          <div className="rectangle small shimmer"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {!isLoading && getButtons()}
          </section>
          <section></section>
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
              padding: "25px",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              placeItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="headerTitleSectionMobile"
              style={{
                padding: global.UTILS.BENTO_BOX_PADDING,
              }}
            >
              <h1 className="font-weight-bold headerTitleMobile">BLOG</h1>
              <p className="headerSubTitle">Ideas change everything</p>
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
            <div className="blog-card">
              <div className="meta">
                <div
                  className="photo shimmer"
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
              <div className="description">
                <h4
                  style={{
                    fontFamily: "Fira Sans Extra Condensed",
                    color: "white",
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
