import "./services.scss";

import React from "react";
import { BsPatchCheck } from "react-icons/bs";

import { Backend } from "./Icons/Backend";
import { Design } from "./Icons/Design";
import { Rwd } from "./Icons/Rwd";

export function Services() {
	return (
		<section id="services">
			<h5 className="subtitle">Tecnologías y servicios</h5>
			<h2 className="title">Habilidades</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<Rwd width={80} />
						<h3>Front-end</h3>
					</div>
					<div className="service__content">
						<p>
							Maquetación web responsive con sensibilidad estética e interacciones de usuario bien
							pensadas y fluidas. Proceso de desarrollo centrado en la reutilización de componentes,
							la gestión de estados globales en aplicaciones complejas o la realización de testing
							entre otras.
						</p>
						<div className="service__content__block">
							<h4>Lenguajes que utilizo</h4>
							<p>HTML5, CSS3, SASS, Javascript y TypeScript</p>
						</div>

						<div className="service__content__block">
							<h4>Frameworks y herramientas</h4>
							<ul className="service__list">
								<li>
									<BsPatchCheck />
									Angular
								</li>
								<li>
									<BsPatchCheck />
									React
								</li>
								<li>
									<BsPatchCheck />
									Redux
								</li>
								<li>
									<BsPatchCheck />
									Fetch, Ajax y JQuery
								</li>
								<li>
									<BsPatchCheck />
									Testing con Jest
								</li>
								<li>
									<BsPatchCheck />
									Metodología BEM
								</li>
								<li>
									<BsPatchCheck />
									Bootstrap y Material UI
								</li>
							</ul>
						</div>
					</div>
				</article>
				{/* END of FRONT */}
				<article className="service">
					<div className="service__head">
						<Backend width={80} />
						<h3>Back-end</h3>
					</div>
					<div className="service__content">
						<p>
							Desarrollo y mantenimiento de API REST seguras con .Net Core 6.Centro mis esfuerzos en
							realizar buenas prácticas de desarrollo y una arquitectura limpia, por capas, modular
							y escalable con la implementación de patrones de diseño.
						</p>
						<div className="service__content__block">
							<h4>Lenguajes que utilizo</h4>
							<p>C#, PHP, MYSQL y GIT</p>
						</div>

						<div className="service__content__block">
							<h4>Frameworks y herramientas</h4>
							<ul className="service__list">
								<li>
									<BsPatchCheck />
									.NET
								</li>
								<li>
									<BsPatchCheck />
									LINQ y Entity Framework
								</li>
								<li>
									<BsPatchCheck />
									Seguridad con JWT
								</li>
								<li>
									<BsPatchCheck />
									DDD (Domain-Driven design)
								</li>
								<li>
									<BsPatchCheck />
									Patrón Repositorio y patrón Especificación
								</li>
								<li>
									<BsPatchCheck />
									Postman
								</li>
								<li>
									<BsPatchCheck />
									Testing unitario y funcional
								</li>
							</ul>
						</div>
					</div>
				</article>
				{/* END of BACK */}
				<article className="service">
					<div className="service__head">
						<Design width={80} />
						<h3>UI/ UX y Diseño</h3>
					</div>
					<div className="service__content">
						<p>
							Uso de software para la creación de interfaces gráficas y el desarrollo de experiencia
							de usuario como Sketch o Adobe XD. Conocimientos de programas de diseño para la
							creación de contenidos digitales, retoque de imagen, creación de ilustraciones o
							logotipos.
						</p>
						<div className="service__content__block">
							<h4>Lenguajes que utilizo</h4>
							<p>HTML5, CSS3, SASS, Javascript y TypeScript</p>
						</div>

						<div className="service__content__block">
							<h4>Frameworks y herramientas</h4>
							<div className="service__list">
								<li>
									<BsPatchCheck />
									Adobe XD
								</li>
								<li>
									<BsPatchCheck />
									Sketch
								</li>
								<li>
									<BsPatchCheck />
									Illustrator
								</li>
								<li>
									<BsPatchCheck />
									Photoshop
								</li>
							</div>
						</div>
					</div>
				</article>
				{/* END of DESIGN */}
			</div>
		</section>
	);
}
