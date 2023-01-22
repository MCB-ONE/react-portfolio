import React from "react";

import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/portfolio/Porfoio";
import { Skills } from "./components/skills/Skills";

export function App() {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
}
