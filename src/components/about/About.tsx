import "./about.scss";

import React from "react";

import ME from "../../assets/images/me-about2.jpg";

export function About() {
	return (
		<section id="about">
			<h5 className="subtitle">Sobre mi</h5>
			<h2 className="title">Presentación</h2>

			<div className="container about__container">
				<div className="about-me">
					<div className="about-me__image">
						<img src={ME} alt="Imagen sobre mi" />
					</div>
				</div>
				<div className="about__content">
					<p>
						Desarrollador Web FullStack de Barcelona en contínua formación y en búsqueda de nuevos
						retos. Mis ganas de conocimiento y crecimiento personal me hicieron entrar en el mundo
						de la programación. Primero fue un hobby y con el tiempo se a convertido en mi passión.
					</p>

					<a href="#contact" className="button button--primary">
						Hablemos
					</a>
				</div>
			</div>
		</section>
	);
}
