import React, { useContext, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import "../../resources/styles/blogstyle.css";

const Write = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.title || "");
	const [title, setTitle] = useState(state?.desc || "");
	const [file, setFile] = useState(null);
	const [author, setAuthor] = useState("");
	const [base64Image, setBase64Image] = useState(null);
	const { currentUser, currentToken } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser) {
			navigate("/");
		}
	}, []);

	useEffect(() => {
		imageToBase64(file).then((res) => setBase64Image(res));
	}, [file]);

	const handleClick = async (e) => {
		e.preventDefault();

		if (file) {
			if (value == "" || title == "") {
				alert("Compila tutti i campi prima di pubblicare l'articolo!");
				return;
			}

			imageToBase64(file).then((res) => {
				console.log(res);
				axios
					.post("http://localhost:8800/blog", {
						title: title,
						description: value,
						autore: author,
						image: res,
						date: new Date(),
					})
					.then((res, err) => {
						console.log(res);
						navigate("/blog");
					})
					.catch((err) => console.error(err));
			});
		} else {
			alert("Aggiungi una foto all'articolo!");
		}
	};

	return (
		<div className="container main-container mt-5 mb-5">
			<div className="content-container">
				<label htmlFor="title" style={{ fontSize: "30px" }}>
					Titolo
				</label>
				<input
					id="title"
					type="text"
					placeholder="Scrivi qui il titolo"
					onChange={(e) => setTitle(e.target.value)}
					className="mb-3"
					style={{ width: "100%" }}
				/>
				<div className="editor-container">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
						style={{ height: "400px", marginBottom: "30px" }}
					/>
				</div>
			</div>
			<div className="menu-container">
				<h3>Completa l'articolo</h3>
				<input
					className="file mb-4"
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				{base64Image ? (
					<img src={`data:image/*;base64,${base64Image}`} width="300px" />
				) : (
					<></>
				)}
				<label htmlFor="author">Autore</label>
				<input
					id="author"
					type="text"
					name="author"
					onChange={(e) => setAuthor(e.target.value)}
					className="mb-5"
				/>
				<div className="buttons">
					<button className="button" onClick={handleClick}>
						Publish
					</button>
				</div>
			</div>
		</div>
	);
};

export default Write;

async function imageToBase64(file) {
	if (file)
		return new Promise((res) => {
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result
					.replace("data:", "")
					.replace(/^.+,/, "");
				res(base64String);
			};
			reader.readAsDataURL(file);
		});
}
