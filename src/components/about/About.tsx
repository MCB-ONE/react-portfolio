import "./about.scss";

import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/images/me-about2.jpg";

export function About() {
	return (
		<section id="about">
			<h5 className="subtitle">Get To Know</h5>
			<h2 className="title">About Me</h2>

			<div className="container about__container">
				<div className="about-me">
					<div className="about-me__image">
						<img src={ME} alt="Imagen sobre mi" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__cards__item">
							<FaAward className="about__cards__item__icon" />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>
						<article className="about__cards__item">
							<FiUsers className="about__cards__item__icon" />
							<h5>Clients</h5>
							<small>200+ WorldWide</small>
						</article>
						<article className="about__cards__item">
							<VscFolderLibrary className="about__cards__item__icon" />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan maximus
						justo, nec tincidunt nibh porttitor vel. Donec volutpat odio nibh, sed maximus mauris
						porttitor quis. Aenean vehicula posuere enim vel rhoncus. Curabitur ac leo quam.
					</p>

					<a href="#contact" className="button button--primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}
