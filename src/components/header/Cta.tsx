import React from "react";

export function Cta() {
	return (
		<div className="header__cta">
			<a
				href="https://www.tonione.es/static/media/CV_Antonio_Salvadó.pdf"
				download
				className="button"
			>
				Descargar CV
			</a>
			<a href="#contact" className="button button--primary">
				Contactar
			</a>
		</div>
	);
}
