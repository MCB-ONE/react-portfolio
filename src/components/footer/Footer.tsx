/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.scss";

import React from "react";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

export function Footer() {
	return (
		<footer className="footer">
			<a href="#" className="footer__logo">
				Toni Salvadó
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Inicio</a>
				</li>
				<li>
					<a href="#about">Presentación</a>
				</li>
				<li>
					<a href="#services">Tecnologías</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contacto</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="#" target="#">
					<RiLinkedinLine />
				</a>
				<a href="#" target="#">
					<FiGithub />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Toni Salvadó. Todos los derechos reservados.</small>
			</div>
		</footer>
	);
}
