import React, { useState, useEffect } from "react";

export default function PartnerCard({ title, subtitle, imgSrc }) {
	return (
		<div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
			<div
				className="portfolio-item"
				style={{
					aspectRatio: 1,
					width: "190px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<a className="portfolio-link" data-bs-toggle="modal" href="">
					<div className="portfolio-hover">
						<div className="portfolio-hover-content">
							<i className="fas fa-plus fa-3x"></i>
						</div>
					</div>
					<img className="img-fluid" src={imgSrc} alt="..." />
				</a>
				{/* <div className="portfolio-caption">
					<div className="portfolio-caption-heading">{title}</div>
				</div> */}
			</div>
		</div>
	);
}
