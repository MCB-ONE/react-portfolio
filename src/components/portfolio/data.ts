import { v4 } from "uuid";

import IMG1 from "../../assets/images/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolio5.png";
import IMG6 from "../../assets/images/portfolio6.jpg";

interface Project {
	id: string;
	image: string;
	title: string;
	subtitle?: string;
	text: string;
	technologies: string[];
	github: string;
	demo?: string;
}

const data: Project[] = [
	{
		id: v4(),
		image: IMG1,
		title: "Game of Foodies",
		subtitle: " API REST con .NET",
		text: "API REST escrita en C# usando el framework ASP.NET WebAPI. Solución que sigue los principios de la Arquitectura Limpia y los principios del Diseño guiado por el dominio o Domain Driven Design en inglés.",
		github: "https://github.com",
		technologies: ["C#", "API REST", "ASP.NET"],
		demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG2,
		title: "FacturApp",
		subtitle: "Aplicación web Full Stack.",
		text: "Api y SPA para la gestión de facturas. Parte del servidor desarrollada con C# usando ASP.NET WebAPI uso del patrón repositorio o el patrón especificación para una arquitectura limpia. Parte del cliente desarrollada en Angular con características destacables como el uso de RxJS para la gestión del estado global de la aplicación y trabajar con operaciones asíncronas, consumo de Api, filtrado y operaciones CRUD.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG3,
		title: "Open Recruiter",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae adipisci explicabo ipsa officia optio iusto sunt ea similique illum repudiandae modi, vitae officiis debitis omnis corrupti ad dolorem in.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG4,
		title: "ValidApp",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae adipisci explicabo ipsa officia optio iusto sunt ea similique illum repudiandae modi, vitae officiis debitis omnis corrupti ad dolorem in.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG5,
		title: "Fiverr",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae adipisci explicabo ipsa officia optio iusto sunt ea similique illum repudiandae modi, vitae officiis debitis omnis corrupti ad dolorem in.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG6,
		title: "Validation",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae adipisci explicabo ipsa officia optio iusto sunt ea similique illum repudiandae modi, vitae officiis debitis omnis corrupti ad dolorem in.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG6,
		title: "F de Fisioterapia",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae adipisci explicabo ipsa officia optio iusto sunt ea similique illum repudiandae modi, vitae officiis debitis omnis corrupti ad dolorem in.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com",
		demo: "link of the portfolio live demos",
	},
];

export default data;
