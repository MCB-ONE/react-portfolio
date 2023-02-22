import "./portfolio.scss";

import React from "react";

import data from "./data";
import { ReadMore } from "./readMore/ReadMore";

export function Portfolio() {
	return (
		<section id="portfolio">
			<h5 className="subtitle">Trabajos destacados</h5>
			<h2 className="title">Portfolio</h2>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, subtitle, text, technologies, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item__image">
								<img src={image} alt={title} />
							</div>
							<h3 className="portfolio__item__title">{title}</h3>
							<h4 className="portfolio__item__subtitle">{subtitle}</h4>
							<div className="portfolio__item__description read-more">
								<ReadMore>{text}</ReadMore>
							</div>
							<div className="portfolio__item__tags">
								{technologies.map((tech) => {
									return <span key={tech}>{tech}</span>;
								})}
							</div>
							<div className="portfolio__item__cta">
								{github ? (
									<a href={github} className="button" target="_blank" rel="noreferrer">
										Github
									</a>
								) : (
									""
								)}
								{demo ? (
									<a href={demo} className="button button-primary" target="_blank" rel="noreferrer">
										Live Demo
									</a>
								) : (
									""
								)}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}
