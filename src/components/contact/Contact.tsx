/* eslint-disable @typescript-eslint/no-misused-promises */
import "./contact.scss";

import React from "react";
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
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		// eslint-disable-next-line no-console
		console.log(data);
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

				<form onSubmit={handleSubmit(onSubmit)}>
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
					<button type="submit" className="button button--primary">
						Enviar mensaje
					</button>
				</form>
			</div>
		</section>
	);
}
