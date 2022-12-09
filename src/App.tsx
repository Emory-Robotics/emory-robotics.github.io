import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Consititution from './pages/constitution/Constitution';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import Sponsors from './pages/sponsors/Sponsors';

function App() {
	return (
		<HashRouter>

			<div className="w-full h-full flex flex-col items-center justify-center box-border">
				<div className="max-w-5xl w-full h-full md:p-8 p-2 box-border">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/sponsors" element={<Sponsors />} />
						<Route path="/about" element={<About />} />
						<Route path="/events" element={<Events />} />
						<Route path="/constitution" element={<Consititution />} />
					</Routes>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
