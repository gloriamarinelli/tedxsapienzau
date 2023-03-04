import React, { useState, useEffect } from "react";
import Navbar from "./components/components/Navbar";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import MissionandVision from "./components/pages/MissionandVision";
import ErrorPage from "./components/pages/ErrorPage";
import Partners from "./components/pages/Partners";
import Blog from "./components/pages/Blog";
import Join from "./components/pages/Join";
import Team2023 from "./components/pages/Team2023";
import Team2022 from "./components/pages/Team2022";
import Edizione2022 from "./components/pages/Edizione2022";
import Edizione2023 from "./components/pages/Edizione2023";
import Statuto from "./components/pages/Statuto";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import BlogPost from "./components/pages/BlogPost";
import Write from "./components/pages/Write";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import { AuthContextProvider } from "./components/context/authContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeManager />,
		errorElement: (
			<>
				<Navbar />
				<ErrorPage />
				<Footer />
			</>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/tedxsapienzau",
				element: <Home />,
			},
			{
				path: "/partners",
				element: <Partners />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/blog/:id",
				element: <BlogPost />,
			},
			{
				path: "/join",
				element: <Join />,
			},
			{
				path: "/mission&vision",
				element: <MissionandVision />,
			},
			{
				path: "/team2022",
				element: <Team2022 />,
			},
			{
				path: "/team2023",
				element: <Team2023 />,
			},
			{
				path: "/edizione2022",
				element: <Edizione2022 />,
			},
			{
				path: "/edizione2023",
				element: <Edizione2023 />,
			},
			{
				path: "/write",
				element: <Write />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/statuto",
				element: <Statuto />,
			},
			{
				path: "/privacypolicy",
				element: <PrivacyPolicy />,
			},
		],
	},
]);

function HomeManager() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, []);

	const handleResize = () => {
		setWindowSize(window.innerWidth);
	};

	return (
		<>
			<Navbar />
			<Outlet context={[windowSize, setWindowSize]} />
			<Footer />
		</>
	);
}

function App() {
	return (
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	);
}

export default App;
