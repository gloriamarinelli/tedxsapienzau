import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Partners from "./components/Partners";

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
		errorElement: <ErrorPage />,
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
