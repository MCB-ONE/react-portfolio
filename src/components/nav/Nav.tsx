/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.scss";

import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiBriefcase, BiMessageSquareDetail } from "react-icons/bi";

export function Nav() {
	const [activeNav, setActiveNav] = useState("#");

	return (
		<nav className="nav">
			<a
				className={`nav__item ${activeNav === "#" ? "nav__item--active" : ""}`}
				onClick={() => setActiveNav("#")}
				href="#"
			>
				<AiOutlineHome />
			</a>
			<a
				className={`nav__item ${activeNav === "#about" ? "nav__item--active" : ""}`}
				onClick={() => setActiveNav("#about")}
				href="#about"
			>
				<AiOutlineUser />
			</a>
			<a
				className={`nav__item ${activeNav === "#skills" ? "nav__item--active" : ""}`}
				onClick={() => setActiveNav("#skills")}
				href="#skills"
			>
				<BiBook />
			</a>
			<a
				className={`nav__item ${activeNav === "#portfolio" ? "nav__item--active" : ""}`}
				onClick={() => setActiveNav("#portfolio")}
				href="#portfolio"
			>
				<BiBriefcase />
			</a>
			<a
				className={`nav__item ${activeNav === "#contact" ? "nav__item--active" : ""}`}
				onClick={() => setActiveNav("#contact")}
				href="#contact"
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
}
