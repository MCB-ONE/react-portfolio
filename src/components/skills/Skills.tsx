import "./skills.scss";

import React from "react";

import { SkillsCard } from "./SkillsCard";

export type Skill = {
	name: string;
	logo: string | null;
};

export type CardProps = {
	title: string;
	list: Skill[];
};
export function Skills() {
	const frontCard: CardProps = {
		title: "Tecnologías Frontend",
		list: [
			{
				name: "HTML",
				logo: null,
			},
			{
				name: "CSS",
				logo: null,
			},
			{
				name: "SASS",
				logo: null,
			},
			{
				name: "Javascript",
				logo: null,
			},
			{
				name: "Typescript",
				logo: null,
			},
		],
	};

	return (
		<section id="experience">
			<h5 className="subtitle">Técnologias que conozco</h5>
			<h2 className="title">Mis Skills</h2>
			<div className="container experience__container">
				<SkillsCard data={frontCard} />
				<SkillsCard data={frontCard} />
			</div>
		</section>
	);
}
