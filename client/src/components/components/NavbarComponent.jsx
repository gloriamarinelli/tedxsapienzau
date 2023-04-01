import React, { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTiktok,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Image from "../images/logo-black.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavbarComponent(props) {
	const [expanded, setExpanded] = useState(false);
	const { currentUser, currentToken } = useContext(AuthContext);
	const { logout } = useContext(AuthContext);
	const [windowSize, setWindowSize] = useState(props.windowSize);

	const navRef = useRef();

	return (
		<>
			<div className="Navbar">
				{/**
				 * SOCIAL HEADER
				 */}
				<nav>
					<div
						style={{
							height: global.UTILS.SOCIAL_NAV_HEIGHT,
							width: "100vw",
							display: "flex",
							backgroundColor: "#000",
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<div className="container-xl nav justify-content-end">
							<ul className="nav d-flex align-items-center justify-content-end">
								<li className="nav-item">
									<a
										className="nav-link"
										aria-current="page"
										href="https://www.facebook.com/tedxsapienzau/"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											style={{ color: "white" }}
											icon={faFacebook}
											size="xl"
										/>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											style={{ color: "white" }}
											icon={faLinkedin}
											size="xl"
										/>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.instagram.com/tedxsapienzau/"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											style={{ color: "white" }}
											icon={faInstagram}
											size="xl"
										/>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											style={{ color: "white" }}
											icon={faTiktok}
											size="lg"
										/>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											style={{ color: "white" }}
											icon={faYoutube}
											size="lg"
										/>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#footer">
										<FontAwesomeIcon
											icon={faEnvelope}
											style={{ color: "white" }}
											size="xl"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				{/**
				 * NAVBAR
				 */}

				<Navbar
					ref={navRef}
					className="navbar navbar-white bg-white static-top"
					expand={"lg"}
					expanded={expanded}
					style={{
						fontFamily: "GothamBold",
						position: "absolute",
						zIndex: 99,
						width: "100vw",
					}}
				>
					<Container>
						<Link to="/">
							<LazyLoadImage src={Image} alt="LogoTedx" width="" height="40" />
						</Link>
						<Navbar.Toggle
							aria-controls="basic-navbar-nav"
							onClick={() => setExpanded(expanded ? false : "expanded")}
						/>
						<Navbar.Collapse>
							<ul
								className={`navbar-nav ms-auto ${
									windowSize < global.UTILS.TABLET_WIDTH && "pt-2"
								}`}
							>
								{/*
								<li className="nav-item">
									<Link to="/awards" onClick={() => setExpanded(false)}>
										<button
											type="button"
											className="btn"
											style={{
												backgroundColor: global.COLORS.ROSSO_TED,
												fontWeight: "bold",
												color: "#fff",
											}}
										>
											Awards
										</button>
									</Link>
								</li>
								*/}

								<li className="nav-item">
									<Link to="/awards" onClick={() => setExpanded(false)}>
										<button
											type="button"
											className="btn"
											style={{
												backgroundColor: global.COLORS.ROSSO_TED,
												fontWeight: "bold",
												color: "#fff",
											}}
										>
											Awards
										</button>
									</Link>
								</li>

								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle text-bg-light"
										data-bs-toggle="dropdown"
										role="button"
										aria-expanded="false"
									>
										Edizioni
									</a>
									<ul className="dropdown-menu">
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/edizione2023"
												onClick={() => setExpanded(false)}
											>
												Edizione 2023
											</Link>
										</li>
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/edizione2022"
												onClick={() => setExpanded(false)}
											>
												Edizione 2022
											</Link>
										</li>
									</ul>
								</li>

								<li className="nav-item">
									<Link
										className="nav-link text-bg-light"
										to="/blog"
										onClick={() => setExpanded(false)}
									>
										Blog
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link text-bg-light"
										to="/partners"
										onClick={() => setExpanded(false)}
									>
										Partners
									</Link>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle text-bg-light"
										data-bs-toggle="dropdown"
										href="#"
										role="button"
										aria-expanded="false"
									>
										Team
									</a>
									<ul className="dropdown-menu">
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/team2023"
												onClick={() => setExpanded(false)}
											>
												Team 2023
											</Link>
										</li>
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/team2022"
												onClick={() => setExpanded(false)}
											>
												Team 2022
											</Link>
										</li>
									</ul>
								</li>

								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle text-bg-light"
										data-bs-toggle="dropdown"
										href="/location"
										role="button"
										aria-expanded="false"
									>
										About us
									</a>
									<ul className="dropdown-menu">
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/mission&vision"
												onClick={() => setExpanded(false)}
											>
												Mission & Vision
											</Link>
										</li>
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/location"
												onClick={() => setExpanded(false)}
											>
												Location
											</Link>
										</li>
										{/*
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/"
												onClick={() => setExpanded(false)}
											>
												History
											</Link>
										</li>
										
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/"
												onClick={() => setExpanded(false)}
											>
												Sustainability
											</Link>
										</li>
										*/}
									</ul>
								</li>

								{currentToken && (
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle bg-success text-white"
											data-bs-toggle="dropdown"
											href=""
											role="button"
											aria-expanded="false"
										>
											Menù Admin
										</a>
										<ul className="dropdown-menu">
											<li>
												<Link
													className="nav-link bg-success text-white"
													to="/write"
													onClick={() => setExpanded(false)}
												>
													Scrivi
												</Link>
											</li>
											<li>
												<Link
													className="nav-link bg-success text-white"
													to="/newsletter"
													onClick={() => setExpanded(false)}
												>
													Newsletter
												</Link>
											</li>
											<li>
												<Link
													className="nav-link bg-success text-white"
													type="submit"
													onClick={logout}
													to="/login"
												>
													Logout
												</Link>
											</li>
										</ul>
									</li>
								)}
							</ul>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</>
	);
}
