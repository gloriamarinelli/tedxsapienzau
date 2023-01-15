import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Partners from "./components/pages/Partners";
import Blog from "./components/pages/Blog";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		),
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
				path: "/partners",
				element: <Partners />,
			},
			{
				path: "/partners",
				element: <Blog />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
