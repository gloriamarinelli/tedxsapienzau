import React, { useContext, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import global from "../../resources/global.json";
import "react-quill/dist/quill.snow.css";
import "../../resources/styles/blogstyle.css";

const Write = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.title || "");
	const [title, setTitle] = useState(state?.desc || "");
	const [file, setFile] = useState(null);
	const [author, setAuthor] = useState("");
	const [base64Image, setBase64Image] = useState(null);
	const { currentUser, currentToken, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentToken) {
			navigate("/login");
		} else {
			let decoded = JSON.parse(atob(currentToken.split(".")[1]));
			if (decoded.exp * 1000 < Date.now()) {
				console.log("Token Expired");
				logout();
			}
		}
	}, []);

	useEffect(() => {
		if (!currentToken) navigate("/login");
	}, [currentToken]);

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
				axios
					.post(
						global.CONNECTION.ENDPOINT + "blog",
						{
							title: title,
							description: value,
							autore: author,
							image: res,
							date: new Date(),
						},
						{ headers: { Authorization: `Bearer ${currentToken}` } }
					)
					.then((res, err) => {
						console.log(res);
						navigate("/blog");
					})
					.catch((err) => {
						const status = err.response.status;
						if (status === 401) {
							//forse da fixare sequenza eventi
							logout();
							navigate("/login");
						}
					});
			});
		} else {
			alert("Aggiungi una foto all'articolo!");
		}
	};

	const modules = {
		toolbar: [
			[{ font: [] }],
			[{ size: ["small", false, "large", "huge"] }],
			["bold", "italic", "underline"],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ align: [] }],
			[{ color: [] }, { background: [] }],
			["link"],
			["clean"],
		],
	};

	const formats = [
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"list",
		"bullet",
		"align",
		"color",
		"background",
		"link",
	];

	return (
		<div
			className="container main-container mb-5"
			style={{ marginTop: "100px" }}
		>
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
						theme="snow"
						modules={modules}
						formats={formats}
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
