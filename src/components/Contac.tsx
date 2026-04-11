import React, { useState } from "react";
import "../App.css";

const Contac: React.FC = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		// Here you would typically handle sending the form data
	};

	return (
		<div className="contact-page">
			<h2>Contact Us</h2>
			{submitted ? (
				<p>Thank you for reaching out! We'll get back to you soon.</p>
			) : (
				<form onSubmit={handleSubmit} className="contact-form">
					<label>
						Name:
						<input type="text" name="name" value={form.name} onChange={handleChange} required />
					</label>
					<label>
						Email:
						<input type="email" name="email" value={form.email} onChange={handleChange} required />
					</label>
					<label>
						Message:
						<textarea name="message" value={form.message} onChange={handleChange} required />
					</label>
					<button type="submit">Send</button>
				</form>
			)}
			<div className="contact-socials contact-socials-bottom">
				<a
					href="https://wa.me/your-number"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
					className="contact-icon"
				>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="16" cy="16" r="16" fill="#25D366" />
						<path d="M22.5 18.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.42.72.25 1.28.4 1.72.51.72.18 1.38.15 1.9.09.58-.07 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.11-.27-.18-.57-.33z" fill="#fff"/>
					</svg>
				</a><br />
				<a
					href="https://linkedin.com/in/your-profile"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					className="contact-icon"
				>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="16" cy="16" r="16" fill="#0077B5" />
						<path d="M12.5 22h-2.5v-8h2.5v8zm-1.25-9.14c-.83 0-1.5-.68-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .82-.67 1.5-1.5 1.5zm10.25 9.14h-2.5v-4c0-.95-.34-1.6-1.18-1.6-.64 0-1.02.43-1.19.85-.06.15-.08.36-.08.57v4.18h-2.5s.03-6.79 0-7.5h2.5v1.06c.33-.51.92-1.24 2.24-1.24 1.64 0 2.86 1.07 2.86 3.37v4.31z" fill="#fff"/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Contac;
