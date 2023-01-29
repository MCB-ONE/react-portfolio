import "./header.scss";

import React from "react";
import { BsArrowDown, BsMouse } from "react-icons/bs";

import ME from "../../assets/images/me2.png";
import { Cta } from "./Cta";
import { HeaderSocials } from "./HeaderSocials";

export function Header() {
	return (
		<header>
			<div className="container header__container">
				<h5 className="subtitle">Bienvenido soy</h5>
				<h1 className="title">Toni Salvadó</h1>
				<h5 className="subtitle text-light">Desarrollador web de Barcelona</h5>
				<Cta />
				<HeaderSocials />
				<div className="header__me">
					<img src={ME} alt="yo" />
				</div>
				<a href="#contact" className="scroll-down">
					<BsMouse />
					<BsArrowDown className="scroll-down__cta" />
				</a>
			</div>
		</header>
	);
}
