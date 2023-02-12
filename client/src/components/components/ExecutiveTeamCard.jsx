import React from "react";

export default function ExecutiveTeamCard({ 
	id, 
	nome, 
	ruolo, 
	image 
}) {
	return (
		<>
			<div className="col-lg-3 mb-4 d-flex justify-content-center">
				<div
					className="portfolio-item"
					style={{
						aspectRatio: 1,
						height: "300px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<a
						className="portfolio-link"
						data-bs-toggle="modal"
						href=""
					>
						<div className="portfolio-hover">
							<div className="portfolio-hover-content">
								<i className="fas fa-plus fa-3x"></i>
							</div>
						</div>
						<img
						src={`data:image/*;base64,${image}`} 
						height="100"
						/>
					</a>
					<div
						className="portfolio-caption"
						style={{
							justifyContent: "center",
						}}
					>
						<div
							className="portfolio-caption-heading"
							style={{
								fontWeight: "bold",
								textAlign: "center",
								fontSize: "20px"
							}}
						>
							{nome}
						</div>

						<div
							className="portfolio-caption-heading"
							style={{
								fontStyle: "italic",
								textAlign: "center",
							}}
						>
							{ruolo}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
