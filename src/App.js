import Navbar from "./components/components/Navbar";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Partners from "./components/pages/Partners";
import Blog from "./components/pages/Blog";
import Join from "./components/pages/Join";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/join",
				element: <Join />,
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
