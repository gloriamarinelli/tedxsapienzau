export default function Blog() {
return(
<>
	<div
				className="header"
				style={{
					padding: "10px",
					backgroundImage:
						"linear-gradient(to left,	rgb(230, 43, 30),rgba(0, 0, 255, 0.5))",
					textAlign: "center",
					color: "black",
					clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
					height: "40vh",
					display: "grid",
					placeItems: "center",
				}}
			>
				<h1
					className="font-weight-bold mt-5 mb-5"
					style={{
						fontSize: "90px",
						fontWeight: "bold",
					}}
				>
					BLOG
				</h1>
			</div>
	
	</>

)



}


