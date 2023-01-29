import React from "react";

import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";

export function App() {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}
