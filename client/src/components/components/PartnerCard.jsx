import React, { useState, useEffect } from "react";

export default function PartnerCard({ title, imgSrc, linkSite }) {
	return (
		<div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
			<div
				className="portfolio-item"
				style={{
					aspectRatio: 1,
					width: "200px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<a className="portfolio-link" href={linkSite}>					
					<img className="img-fluid" src={imgSrc} alt="TedxSponsor"/>
				</a>				
			</div>
		</div>
	);
}
