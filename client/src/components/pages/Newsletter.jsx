import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Table from "react-bootstrap/Table";

const Newsletter = () => {
	const [newsletter, setNewsletter] = useState([]);
	const [isAdmin, setIsAdmin] = useState(false);
	const navigate = useNavigate();
	const state = useLocation().state;
	const { currentUser, currentToken, logout, isUserLoggedIn } =
		useContext(AuthContext);

	useEffect(() => {
		if (
			localStorage.getItem("token") === null ||
			localStorage.getItem("token") === undefined ||
			localStorage.getItem("token") === "null"
		) {
			return;
		} else {
			const checkIsUserLoggedIn = async () => {
				const status = await isUserLoggedIn(localStorage.getItem("token"));
				return status;
			};

			let status = checkIsUserLoggedIn().catch((err) => console.log(err));
			status.then((res) => {
				if (res.status === 200) {
					console.log(res);
					setIsAdmin(true);
				} else {
					console.log(res);
					logout();
				}
			});
		}
	}, []);

	useEffect(() => {
		axios
			.get(global.CONNECTION.ENDPOINT + "newsletter")
			.then((res, err) => {
				setNewsletter(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<div
				className="header-write"
				style={{
					backgroundColor: "RGBA(25, 135, 84,0.5)",
					padding: "10px",
					textAlign: "center",
					color: "black",
					display: "grid",
					height: "20vh",
					marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
				}}
			>
				<h1
					className="font-weight-bold mt-5"
					style={{
						fontSize: "40px",
						marginLeft: "30px",
					}}
				>
					ISCRITTI ALLA NEWSLETTER
				</h1>
			</div>

			<div className="mb-5 mt-2" style={{ marginLeft: "50px" }}>
				<Table striped bordered hover size="sm">
					<tr
						style={{
							color: global.COLORS.ROSSO_TED,
							fontFamily: "GothamBold",
							fontSize: "25px",
							height: "50px",
						}}
					>
						<th>Email</th>
						<th>Time</th>
					</tr>

					{newsletter.map((newsletter) => {
						const { id, email, time } = newsletter;
						return (
							<tr
								key={id}
								style={{
									fontFamily: "GothamBook",
									fontSize: "20px",
									height: "50px",
								}}
							>
								<td>{email}</td>
								<td>{time}</td>
							</tr>
						);
					})}
				</Table>
			</div>
		</>
	);
};

export default Newsletter;
