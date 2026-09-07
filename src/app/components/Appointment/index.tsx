"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

type FormValues = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	service: string;
	message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	service: "",
	message: "",
};

function validate(values: FormValues): FormErrors {
	const errors: FormErrors = {};
	if (!values.firstName.trim()) errors.firstName = "First name is required.";
	if (!values.lastName.trim()) errors.lastName = "Last name is required.";
	if (!values.phone.trim()) errors.phone = "Phone number is required.";
	if (!values.email.trim()) errors.email = "Email address is required.";
	else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address.";
	if (!values.service) errors.service = "Please select a service.";
	if (!values.message.trim()) errors.message = "Please tell us how we can help.";
	return errors;
}

export default function Appointment() {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState<FormErrors>({});
	const [submitted, setSubmitted] = useState(false);

	function updateField(field: keyof FormValues, value: string) {
		setValues((current) => ({ ...current, [field]: value }));
		setErrors((current) => ({ ...current, [field]: undefined }));
		setSubmitted(false);
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length === 0) setSubmitted(true);
	}

	return (
		<div id="appointment" className="max-w-[540px]">
			<p className="font-satisfy text-3xl leading-none text-[#e4bb77]">Don&apos;t Be A Stranger</p>
			<h2 className="mt-2 text-lg font-semibold uppercase leading-none text-white">Request an appointment</h2>

			<form className="mt-3 space-y-2" noValidate onSubmit={handleSubmit}>
				<div className="grid gap-2 sm:grid-cols-2">
					<Field label="First name" error={errors.firstName}>
						<input id="first-name" name="firstName" required value={values.firstName} onChange={(event) => updateField("firstName", event.target.value)} aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "first-name-error" : undefined} placeholder="Full name" />
					</Field>
					<Field label="Last name" error={errors.lastName}>
						<input id="last-name" name="lastName" required value={values.lastName} onChange={(event) => updateField("lastName", event.target.value)} aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? "last-name-error" : undefined} placeholder="Last name" />
					</Field>
					<Field label="Phone" error={errors.phone}>
						<input id="phone" name="phone" required type="tel" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="Phone" />
					</Field>
					<Field label="Email" error={errors.email}>
						<input id="email" name="email" required type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="Email" />
					</Field>
				</div>
				<Field label="Service" error={errors.service}>
					<select id="service" name="service" required value={values.service} onChange={(event) => updateField("service", event.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
						<option value="">Which service are you interested in?</option>
						<option>New patient visit</option>
						<option>Cleaning and checkup</option>
						<option>Emergency dental care</option>
						<option>Other question</option>
					</select>
				</Field>
				<Field label="Message" error={errors.message}>
					<textarea id="message" name="message" required value={values.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Message" rows={4} />
				</Field>
				<div className="flex items-center gap-3 pt-2">
					<button type="submit" className="flex items-center gap-2 rounded-full bg-[#e4bb77] py-2 pl-5 pr-2 text-xs font-semibold uppercase text-white shadow-md transition-transform hover:scale-[1.03]">
						Submit form
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fffdf9] text-[#426b9d]"><ArrowUpRight className="h-4 w-4" /></span>
					</button>
					{submitted && <p className="text-xs text-[#dff7e5]" role="status">Thanks. We&apos;ll be in touch soon.</p>}
				</div>
			</form>
		</div>
	);
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
	return (
		<label className="block text-left text-[11px] text-white [&_input]:h-[55px] [&_input]:w-full [&_input]:rounded-[5px] [&_input]:border-0 [&_input]:bg-white [&_input]:px-3 [&_input]:text-[18px] [&_input]:text-[#334155] [&_input]:outline-none [&_input]:placeholder:text-[#64748b] [&_select]:h-[55px] [&_select]:w-full [&_select]:rounded-[5px] [&_select]:border-0 [&_select]:bg-white [&_select]:px-3 [&_select]:text-[18px] [&_select]:text-[#334155] [&_select]:outline-none [&_textarea]:h-[199px] [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:rounded-[5px] [&_textarea]:border-0 [&_textarea]:bg-white [&_textarea]:px-3 [&_textarea]:py-2 [&_textarea]:text-[18px] [&_textarea]:text-[#334155] [&_textarea]:outline-none [&_textarea]:placeholder:text-[#64748b]">
			<span className="sr-only">{label}</span>
			{children}
			{error && <span id={`${label.toLowerCase().replace(" ", "-")}-error`} className="mt-0.5 block text-[10px] text-[#ffd5d5]" role="alert">{error}</span>}
		</label>
	);
}
