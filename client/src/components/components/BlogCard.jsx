import React, { useEffect } from "react";
import "../../resources/styles/blogstyle.css";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import { it } from "date-fns/locale";

export default function BlogCard({ id, titolo, image, data }) {
	return (
		<div className="container">
			<div className="row no-gutters">
				<div className="col-xl-6 col-12 mb-5 mb-xl-0">
					<div className="media media-news">
						<div className="media-img">
							<div
								style={{
									background: `url(data:image/*;base64,${image ?? ""})`,
									width: "400px",
									height: "300px",
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
								alt={titolo}
							></div>
						</div>
						<div className="media-body">
							<span className="media-date">
								{data
									? format(new Date(data), "d MMM YYY", { locale: it })
									: ""}
							</span>
							<h5 className="mt-3">{titolo}</h5>
							<Link className="link" to={`/blog/${id}`}>
								<button className="button">View More</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
