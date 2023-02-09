import React from "react";
import "../../resources/styles/blogstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blog, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/posts")
      .then((res, err) => {
        console.log(res);
        setPosts(JSON.stringify(res.data, null, 2));
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
		</>
	);
};

export default Blog;
