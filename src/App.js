import Converter from "@pages/Converter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Converter />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
