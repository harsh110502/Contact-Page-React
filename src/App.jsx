import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Compontes/NavBar";
import ContactHeader from "./Compontes/ContactHeader";
import ContactFrom from "./Compontes/ContactFrom";

function App() {
	return (
		<>
			<NavBar />
			<main className="main_container">
				<ContactHeader />
				<ContactFrom />
			</main>
		</>
	);
}

export default App;
