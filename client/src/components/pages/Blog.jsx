import React from "react";
import "../../resources/styles/blogstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";

export default function Blog() {
	const [blog, setBlog] = useState([]);
	const [windowSize, setWindowSize] = useOutletContext();

	useEffect(() => {
		axios
			.get("http://localhost:8800/blog")
			.then((res, err) => {
				setBlog(res.data.reverse());
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (windowSize > global.UTILS.MOBILE_WIDTH) {
		/**
		 * DESKTOP
		 */
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
			</>
		);
	} else {
		/**
		 * MOBILE
		 */
		return (
			<>
				<div
					className="header-blog"
					style={{
						textAlign: "left",
						color: "white",
						display: "grid",
						//clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
						height: "50vh",
					}}
				>
					<h1
						className="font-weight-bold mt-5"
						style={{
							fontSize: "45px",
							fontWeight: "bold",
							marginLeft: "30px",
						}}
					>
						IDEAS WORTH SPREADING
					</h1>
					<p
						style={{
							fontSize: "25px",
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
			</>
		);
	}
}
