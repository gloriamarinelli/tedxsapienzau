import React, { useRef } from "react";
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

	useEffect(() => {
		axios
			.get(`http://localhost:8800/blog/${id}`)
			.then((res, err) => {
				setBlogPost(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

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
	console.log("IMAGE = ", image);
	let base64Image;
	if (image) {
		base64Image = Buffer.from(image, "binary").toString("base64");
		console.log(base64Image);
	}

	return (
		<div className="main-container">
			<div className="post-container">
				<p>{data}</p>
				<hr className="featurette-divider"></hr>
				<h1>{titolo}</h1>
				<p dangerouslySetInnerHTML={{ __html: descrizione }}></p>
				<img
					src={`data:image/*;base64,${base64Image}`}
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
