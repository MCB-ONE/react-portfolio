import "./skillsCard.scss";

import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import { CardProps } from "./Skills";

export function SkillsCard(props: { data: CardProps }) {
	const { title, list } = props.data;

	return (
		<div className="skill">
			<h3>{title}</h3>
			<div className="skill__content">
				{list.map((item) => (
					<article className="skill__details">
						<BsPatchCheckFill className="skill__details-icons" />
						<div>
							<h4>{item.name}</h4>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
