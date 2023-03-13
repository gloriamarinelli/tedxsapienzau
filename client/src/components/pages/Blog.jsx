import React, { useContext } from "react";
import "../../resources/styles/blogstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import { Pagination } from "react-bootstrap";

export default function Blog() {
	const [blog, setBlog] = useState([]);
	const [blogSize, setBlogSize] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [windowSize, setWindowSize] = useOutletContext();
	const [isLoading, setIsLoading] = useState(true);

	const { currentUser } = useContext(AuthContext);

	const pageSize = 5;
	const clearDbIncrement = 10;
	const clearDbMagic = 2;

	useEffect(() => {
		axios
			.get(global.CONNECTION.ENDPOINT + "blog/count")
			.then((res) => {
				setBlogSize(res.data[0].posts);
				getCurrentPagePosts();
				setIsLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		setIsLoading(true);
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
				setIsLoading(false);
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
						setCurrentPage(number);
						window.scrollTo(0, 300);
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
				<div
					className="header-blog"
					style={{
						textAlign: "left",
						color: "white",
						display: "grid",
						clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
						height: "50vh",
						marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
					<div
						style={{
							height: "200px",
							width: "90%",
							margin: "auto",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div className="spinner"></div>
					</div>
				)}
				{!isLoading && getButtons()}
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
						height: "50vh",
						marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
				{getButtons()}
			</>
		);
	}
}
