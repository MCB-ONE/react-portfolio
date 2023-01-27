import { TagCloud as ReactTagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import React from "react";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

export const TagCloud = () => (
	<ReactTagCloud
		options={(w: Window & typeof globalThis): TagCloudOptions => ({
			radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
			maxSpeed: "fast",
		})}
		onClickOptions={{ passive: true }}
	>
		{[
			"VSCode",
			"TypeScript",
			"React",
			"Preact",
			"Parcel",
			"Jest",
			"Next",
			"ESLint",
			"Framer Motion",
			"Three.js",
		]}
	</ReactTagCloud>
);
