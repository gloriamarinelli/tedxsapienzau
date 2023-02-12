import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import BlogCardPost from "../components/BlogCardPost";
import { useParams } from "react-router";

export default function BlogPost() {
	const [blogPost, setBlogPost] = useState([]);

	let { id } = useParams();
	console.log(id);

	useEffect(() => {
		axios
			.get(`http://localhost:8800/blog/${id}`)
			.then((res, err) => {
				setBlogPost(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	console.log(blogPost);

	// eslint-disable-next-line no-lone-blocks

	return BlogCardPost(
		blogPost.titolo,
		blogPost.descrizione,
		blogPost.image,
		blogPost.data
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
function BlogCardPost(titolo, descrizione, image, data) {
	return (
		<div className="main-container">
			<div className="post-container">
				<p>{data}</p>
				<hr className="featurette-divider"></hr>
				<h1>{titolo}</h1>
				<p>{descrizione}</p>
				<img
					src={`data:image/*;base64,${image}`}
					alt={titolo}
					className="post-image"
				/>
				<hr className="featurette-divider"></hr>
				<div className="post-social-container">
					<FontAwesomeIcon icon={faFacebookF} size="lg" />
					<FontAwesomeIcon icon={faTwitter} size="lg" />
					<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
				</div>
			</div>
		</div>
	);
}
