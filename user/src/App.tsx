import "./App.less";
import { Routes, Route } from "react-router-dom";
import Authenticate from "./pages/Authenticate";
import Home from "./pages/Home";
function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='authenticate' element={<Authenticate />} />
			</Routes>
		</div>
	);
}

export default App;
