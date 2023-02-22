import "./readMore.scss";

import React, { useState } from "react";

interface Props {
	children: string;
}

export function ReadMore(props: Props) {
	const [readMoreShown, setReadMoreShown] = useState(false);

	const toggleButton = () => {
		setReadMoreShown((prevState) => !prevState);
	};

	const splitText = (text: string) => {
		const res = text.split(". ");

		return res[0];
	};

	return (
		<div className="read-more">
			{readMoreShown ? props.children : props.children.substring(0, 100)}
			<button onClick={toggleButton} className="read-more__button">
				{readMoreShown ? "Leer menos" : "Leer más"}
			</button>
		</div>
	);
}
