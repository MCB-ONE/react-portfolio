import "./portfolio.scss";

import React from "react";

import IMG1 from "../../assets/images/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolio5.png";
import IMG6 from "../../assets/images/portfolio6.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Portfolio 1 item name",
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: 2,
		image: IMG2,
		title: "Portfolio 2 item name",
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: 3,
		image: IMG3,
		title: "Portfolio 3 item name",
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: 4,
		image: IMG4,
		title: "Portfolio 4 item name",
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: 5,
		image: IMG5,
		title: "Portfolio 5 item name",
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: 6,
		image: IMG6,
		title: "Portfolio 6 item name",
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
];

export function Portfolio() {
	return (
		<section id="portfolio">
			<h5 className="subtitle">My Recent Work</h5>
			<h2 className="title">Portfolio</h2>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item__image">
								<img src={image} alt={title} />
							</div>
							<h3>This is a portfolio item title</h3>
							<div className="portfolio__item__cta">
								<a href={github} className="btn" target="_blank" rel="noreferrer">
									Github
								</a>
								<a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}
