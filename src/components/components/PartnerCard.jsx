import React, { useState, useEffect } from "react";

export default function PartnerCard({ title, subtitle, imgSrc }) {
	return (
		<div class="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
			<div
				class="portfolio-item"
				style={{
					aspectRatio: 1,
					width: "200px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<a class="portfolio-link" data-bs-toggle="modal" href="">
					<div class="portfolio-hover">
						<div class="portfolio-hover-content">
							<i class="fas fa-plus fa-3x"></i>
						</div>
					</div>
					<img class="img-fluid" src={imgSrc} alt="..." />
				</a>
				<div class="portfolio-caption">
					<div class="portfolio-caption-heading">{title}</div>
					
				</div>
			</div>
		</div>
	);
}
