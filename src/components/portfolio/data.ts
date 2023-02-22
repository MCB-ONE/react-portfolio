import { v4 } from "uuid";

import IMG1 from "../../assets/images/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolio5.jpg";
import IMG6 from "../../assets/images/portfolio6.jpg";

interface Project {
	id: string;
	image: string;
	title: string;
	subtitle: string;
	text: string;
	technologies: string[];
	github?: string;
	demo?: string;
}

const data: Project[] = [
	{
		id: v4(),
		image: IMG2,
		title: "FacturApp",
		subtitle: "Aplicación Web Full-stack",
		text: "Api Rest y web SPA para la gestión de facturas. Parte del servidor desarrollada con C# usando ASP.NET WebAPI uso del patrón repositorio o el patrón especificación para una arquitectura limpia. Parte del cliente desarrollada en Angular con características destacables como el uso de RxJS para la gestión del estado global de la aplicación y trabajar con operaciones asíncronas, consumo de Api, filtrado y operaciones CRUD.",
		technologies: ["C#", "API REST", "ASP.NET", "ANGULAR", "SCSS", "NGRX"],
		github: "https://github.com/MCB-ONE/WebApp-facturacion",
		// demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG1,
		title: "Game of Foodies",
		subtitle: " API REST con .NET",
		text: "API REST escrita en C# usando el framework ASP.NET WebAPI. Solución que sigue los principios de la Arquitectura Limpia y los principios del Diseño guiado por el dominio o Domain Driven Design en inglés.",
		github: "https://github.com/MCB-ONE/NetCleanArquitectureDDD",
		technologies: ["C#", "API REST", "ASP.NET"],
		// demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG3,
		title: "Open Recruiter",
		subtitle: "SPA con React",
		text: "Aplicación web SPA para la gestión de procesos de selección de personal desarrollada en React. Sistema de autenticación y autorización (RBAC), consumo de API con operaciones CRUD, gestión del estado global de la aplicación con Redux, representación de datos en tablas con funcionalidades de filtrado local y desde la API",
		technologies: ["React", "Redux Toolkit", "Bootstrap", "SASS", "API REST"],
		github: "https://github.com/MCB-ONE/open-recuriter",
		// demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG4,
		title: "Clon parcial de Fiverr",
		subtitle: "SPA con React.",
		text: "Réplica de la página de inicio de Fiverr en la cual los usuarios registrados pueden buscar servicios de freelancers filtrando por categorías. Sistema de autenticación con local storage, consumo de API para listar los resultados y uso de Material UI para crear tema personalizado.​",
		technologies: ["React", "Redux", "API REST", "SCSS", "Material UI"],
		github: "https://github.com/MCB-ONE/proyecto-fiverr-OB",
		// demo: "link of the portfolio live demos",
	},
	{
		id: v4(),
		image: IMG5,
		title: "F de Fisioterapia",
		subtitle: "Web estática corporativa.",
		text: "Proyecto real para una clínica que ofrece servicios fisioterapéuticos. Adaptación de template de pago a la imagen corporativa del cliente. Animaciones extra añadidas para generar mayor dinamismo en la navegación y configuración del archivo PHP para la gestión y validación de el sistema de correo electrónico.",
		technologies: ["HTML5", "CSS", "JavaScript", "PHP"],
		demo: "https://www.fdefisioterapia.com/",
	},
	{
		id: v4(),
		image: IMG6,
		title: "Pay API",
		subtitle: "Maquetación web responsive.",
		text: "Maquetación de las versiones para smartphone, tablet y escritorio del Figma proporcionado en uno de los retos de frontendmentor.io, una web que ofrece diferentes retos para desarrolladores Front-end.",
		technologies: ["HTML5", "CSS", "Figma"],
	},
	// {
	// 	id: v4(),
	// 	image: IMG5,
	// 	title: "Street Burners",
	// 	subtitle: "Simulación e-commerce en JS.",
	// 	text: "Proyecto que simula una tienda de ropa online. Diseño responsive de interfaz gráfica, creación de contendidos digitales, funcionalidades en JavaSript como filtrado de productos por categorías, simulación de carrito de compra con actualización en tiempo real y posibilidad de editarlo antes de comprar.",
	// 	technologies: ["HTML5", "CSS", "JavaScript", "Illustrator", "Photoshop"],
	// },
	// {
	// 	id: v4(),
	// 	image: IMG5,
	// 	title: "Planet burger",
	// 	subtitle: "Diseño de contenidos digitales.",
	// 	text: "Creación y diseño de imagen corporativa y elementos gráficos para web de Hamburguesas. Definición de elementos esenciales que definen la marca y su producto,  diseño de logotipo, esquema de color y tipografía asociados a ellos. Creación de diferentes mockups para usarlos como elementos gráficos en su página web.",
	// 	technologies: ["Illustrator", "Photoshop"],
	// },
];

export default data;
