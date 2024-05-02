import { ROUTES } from "@/app/config/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function Browser() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<>Page Not found</>} />
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
