/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import "./contact.scss";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

type FormValues = {
	nombre: string;
	email: string;
	mensaje: string;
};

export function Contact() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>();

	const [contactNumber, setContactNumber] = useState("000000");
	const [statusMessage, setStatusMessage] = useState("Mensaje");

	const generateContactNumber = () => {
		const numStr = `000000${(Math.random() * 1000000) | 0}`;
		setContactNumber(numStr.substring(numStr.length - 6));
	};

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const form = document.querySelector("#contact-form") as HTMLFormElement;
		const statusMessageElement = document.querySelector(".status-message") as HTMLFormElement;
		generateContactNumber();

		emailjs
			.sendForm("service_vtobc0f", "template_pajavkb", "#contact-form", "Tn2K2FHB7ZTpMmJgd")
			.then(
				function (response) {
					//TODO añadir pop up para el mensaje
					setStatusMessage("Mensaje envíado!");
					statusMessageElement.className = "status-message success";
					setTimeout(() => {
						statusMessageElement.className = "status-message";
					}, 5000);
					form.reset();
				},
				function (error) {
					//TODO añadir pop up para el mensaje
					setStatusMessage(
						"¡Ha habido un fallo en el envío del mensaje! Por favor vuelva a probarlo más tarde."
					);
					statusMessageElement.className = "status-message failure";
					form.reset();
					setTimeout(() => {
						statusMessageElement.className = "status-message";
					}, 5000);
				}
			);
	};

	return (
		<section id="contact">
			<h5 className="subtitle">Mandame un mensaje</h5>
			<h2 className="title">Contacto</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMail className="contact__option__icon" />
						<h4>Email</h4>
						<a href="mailto:toni.salvado.rubio@gemail.com">Mándame un mensaje</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option__icon" />
						<h4>LinkedIn</h4>
						<a
							href="https://www.linkedin.com/in/toni-salvad%C3%B3-rubio/"
							target="_blank"
							rel="noreferrer"
						>
							Mándame un mensaje
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option__icon" />
						<h4>WhatsApp</h4>
						<a
							href="https://api.whatsapp.com/send.phone=+34600031940"
							target="_blank"
							rel="noreferrer"
						>
							Mándame un mensaje
						</a>
					</article>
				</div>

				{/* END OF CONTACT OPTION */}

				<form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
					<input type="hidden" name="contact_number" value={contactNumber} />
					<input
						placeholder="Nombre Completo"
						{...register("nombre", { required: true, minLength: 3, maxLength: 50 })}
					/>
					{errors.nombre?.type === "required" && (
						<p className="error">*Ha de introducir su nombre</p>
					)}
					<input
						placeholder="Email"
						type="email"
						{...register("email", {
							required: true,
							pattern:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
					/>
					{errors.email?.type === "required" && (
						<p className="error">*Ha de introducir su email </p>
					)}
					{errors.email?.type === "pattern" && (
						<p className="error">*Ha de introducir un email válido </p>
					)}
					<textarea rows={7} placeholder="Escriba su mensaje..." {...register("mensaje")} />
					<p className="status-message">{statusMessage}</p>
					<button type="submit" className="button button--primary">
						Enviar mensaje
					</button>
				</form>
			</div>
		</section>
	);
}
