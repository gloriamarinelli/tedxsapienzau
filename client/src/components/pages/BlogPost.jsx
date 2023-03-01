import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router";
import { it } from "date-fns/locale";

import global from "../../resources/global.json";

export default function BlogPost() {
	const [blogPost, setBlogPost] = useState([]);
	let { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
		axios
			.get(global.CONNECTION.ENDPOINT + `blog/${id}`)
			.then((res, err) => {
				if (
					res.data === null ||
					res.data === undefined ||
					res.data === {} ||
					res.data === ""
				) {
					navigate("/blog");
				} else {
					setBlogPost(res.data);
				}
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
		blogPost.data,
		blogPost.autore
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
function BlogCardPost(titolo, descrizione, image, data, autore) {
	return (
		<div className="main-container">
			<div className="post-container">
				<div className="d-flex" style={{ fontSize: "18px" }}>
					<p style={{ marginRight: "10px" }}>
						{autore}{" "}
						<FontAwesomeIcon
							icon={faFeatherPointed}
							style={{ marginRight: "10px" }}
						/>
						·
					</p>
					<p>
						{data ? format(new Date(data), "d MMM YYY", { locale: it }) : ""}
					</p>
				</div>
				<hr className="featurette-divider"></hr>
				<h1>{titolo}</h1>
				<p dangerouslySetInnerHTML={{ __html: descrizione }}></p>
				<img
					src={`data:image/*;base64,${image ?? ""}`}
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
