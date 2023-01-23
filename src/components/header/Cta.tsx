import React from "react";

export function Cta() {
	return (
		<div className="header__cta">
			<a href="../../assets/images/cv.pdf" download className="button">
				Descargar CV
			</a>
			<a href="#contact" className="button button--primary">
				Contactar
			</a>
		</div>
	);
}
