import React, { useEffect } from "react";
import "../../resources/styles/blogstyle.css";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import { it } from "date-fns/locale";

export default function BlogCard({ id, titolo, image, data }) {
	return (
		<>
			<div class="blog-card">
				<div class="meta">
					<div
						class="photo"
						style={{
							background: `url(data:image/*;base64,${image ?? ""})`,
							width: "350px",
							height: "250px",
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
						alt={titolo}
					></div>
					<ul class="details">
						<li class="date">
							<span className="media-date">
								{data
									? format(new Date(data), "d MMM YYY", { locale: it })
									: ""}
							</span>
						</li>
					</ul>
				</div>
				<div class="description">
					<h4
						style={{
							fontFamily: "GothamBold",
						}}
					>
						{titolo}
					</h4>
					<p class="link">
						<a className="link" href={`/blog/${id}`}>
							<button className="button">View More</button>
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
