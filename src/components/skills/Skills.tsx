import "./skills.scss";

import React from "react";

import { SkillsCard } from "./SkillsCard";

export function Skills() {
	return (
		<section id="experience">
			<h5 className="subtitle">Técnologias que conozco</h5>
			<h2 className="title">Mis Skills</h2>
			<div className="container experience__container">
				<SkillsCard />
				<SkillsCard />
			</div>
		</section>
	);
}
