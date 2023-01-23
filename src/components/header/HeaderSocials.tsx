import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function HeaderSocials() {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/toni-salvad%C3%B3-rubio/"
				target="_blank"
				rel="noreferrer"
			>
				<AiFillLinkedin />
			</a>
			<a href="https://github.com/MCB-ONE" target="_blank" rel="noreferrer">
				<AiFillGithub />
			</a>
		</div>
	);
}
