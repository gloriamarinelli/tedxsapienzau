import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogCardPost from "../components/BlogCardPost";

export default function BlogPost() {
  const [blog, setBlog] = useState([]);  
  
  useEffect(() => {
    axios
      .get(`http://localhost:8800/blog/${blog.id}`)
      .then((res, err) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [blog.id]);

  // eslint-disable-next-line no-lone-blocks
  {
    blog.map((blog) => {
      const { id, titolo, descrizione, image, data } = blog;
      let base64StringImage = Buffer.from(image, "binary").toString("base64");
      return (
        <BlogCardPost
          key={id}
          titolo={titolo}
          descrizione={descrizione}
          image={base64StringImage}
          data={data}
        />
      );      
    });
  }
}
