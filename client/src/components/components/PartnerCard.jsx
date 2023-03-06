import React, { useState, useEffect } from "react";

export default function PartnerCard({ title, imgSrc, linkSite, sponsorType }) {
	return (
		<div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
			<div
				className="portfolio-item"
				style={{
					aspectRatio: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<a className="portfolio-link" href={linkSite}>
					<img
						className="img-fluid"
						src={imgSrc}
						alt="TedxSponsor"
						style={{
							maxWidth:
								sponsorType === "institutional" || sponsorType === "main"
									? "200px"
									: "150px",
						}}
					/>
				</a>
			</div>
		</div>
	);
}
