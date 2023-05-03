import React from "react";

export default function PartnerCard23({ imgSrc, text, sponsorType, link }) {
	return (
		<>
			<div
				className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div className="container mb-5">
					<div className="card-pro">
						<a className="but" href={link} target="_blank" rel="noreferrer">
							<div className="card-projects">
								<input type="checkbox" className="btn1" />
								<div className="overlay">
									<p>
										<strong>{text}</strong>
									</p>
								</div>
								<img src={`/images/partners23/${imgSrc}`} alt="TEDx Sponsor" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
