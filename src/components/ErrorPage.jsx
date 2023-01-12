import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1>Oops!</h1>
			<p>
				Qualcosa è andato storto, non riusciamo a trovare la pagina che
				hai richiesto
			</p>
			<Link to="/home">Torna alla home</Link>
		</div>
	);
}
