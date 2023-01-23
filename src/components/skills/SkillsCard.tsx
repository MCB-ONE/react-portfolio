import "./skillsCard.scss";

import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export function SkillsCard() {
	return (
		<div className="skill">
			<h3>Frontend Technologies</h3>
			<div className="skill__content">
				<article className="skill__details">
					<BsPatchCheckFill className="skill__details-icons" />
					<div>
						<h4>HTML</h4>
						<small className="text-light">Experienced</small>
					</div>
				</article>
				<article className="skill__details">
					<BsPatchCheckFill className="skill__details-icons" />
					<div>
						<h4>CSS</h4>
						<small className="text-light">Experienced</small>
					</div>
				</article>
				<article className="skill__details">
					<BsPatchCheckFill className="skill__details-icons" />
					<div>
						<h4>JavaScript</h4>
						<small className="text-light">Experienced</small>
					</div>
				</article>
				<article className="skill__details">
					<BsPatchCheckFill className="skill__details-icons" />
					<div>
						<h4>BootStrap</h4>
						<small className="text-light">Experienced</small>
					</div>
				</article>
				<article className="skill__details">
					<BsPatchCheckFill className="skill__details-icons" />
					<div>
						<h4>React.Js</h4>
						<small className="text-light">Experienced</small>
					</div>
				</article>
			</div>
		</div>
	);
}
