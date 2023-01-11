import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
//import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Footer />
			<Home />
			<About />
		</div>
	);
}

export default App;
