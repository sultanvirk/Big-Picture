"use client";

import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import { createElement, useEffect, useState, type ComponentType } from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";
import logo from "../../assets/Logo.png";

type SocialIcon = ComponentType<{ className?: string }>;
type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

const FacebookIcon = FaFacebookF as unknown as SocialIcon;
const XTwitterIcon = FaXTwitter as unknown as SocialIcon;
const InstagramIcon = FaInstagram as unknown as SocialIcon;
const LinkedinIcon = FaLinkedinIn as unknown as SocialIcon;

const socialLinks = [
	{ label: "Facebook", href: "#facebook", icon: FacebookIcon },
	{ label: "X", href: "#twitter", icon: XTwitterIcon },
	{ label: "Instagram", href: "#instagram", icon: InstagramIcon },
	{ label: "LinkedIn", href: "#linkedin", icon: LinkedinIcon },
];

const secondaryLinks = [
	{ label: "Blog", href: "#blog" },
	{ label: "Membership", href: "#membership" },
	{ label: "Contact", href: "#contact" },
];

const navItems: NavItem[] = [
	{ label: "Home", href: "#home" },
	{ label: "About Us", href: "#about" },
	{ label: "Pediatric Dentistry", href: "#services", dropdown: [{ label: "Our approach", href: "#services" }, { label: "First visits", href: "#services" }, { label: "Meet the doctor", href: "#parents" }] },
	{ label: "Services", href: "#services", dropdown: [{ label: "Preventive care", href: "#services" }, { label: "Restorative dentistry", href: "#services" }, { label: "Emergency care", href: "#appointment" }] },
	{ label: "For Parents", href: "#parents", dropdown: [{ label: "New patient forms", href: "#appointment" }, { label: "Insurance and payments", href: "#contact" }, { label: "Parent resources", href: "#parents" }] },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!menuOpen) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", closeOnEscape);

		return () => {
			document.body.style.overflow = "";
			document.removeEventListener("keydown", closeOnEscape);
		};
	}, [menuOpen]);

	return (
		<header className="font-kanit relative z-20 bg-[#fffdf9] text-[#1a3657] shadow-sm">
			<div className="flex h-10 items-center justify-between bg-[#fffdf9] px-4 text-[#426b9d] lg:h-9 lg:bg-[#80b1f0] lg:px-5 lg:text-white sm:px-8 lg:px-9 2xl:h-10 2xl:px-12">
				<span className="flex items-center gap-2 text-xs font-normal lg:text-lg">
					<PhoneCall className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
					<span className="hidden lg:inline">
					CALL US TODAY:{" "}
					</span>
					<a className="ml-1 font-semibold" href="tel:3462302811">
						(346) 230-2811
					</a>
				</span>

				<div className="hidden items-center gap-5 lg:flex" aria-label="Social media links">
					{socialLinks.map(({ label, href, icon: Icon }) => (
						<a key={label} href={href} aria-label={label} className="transition-colors hover:text-[#1a3657]">
							{createElement(Icon, { className: "h-3.5 w-3.5" })}
						</a>
					))}
				</div>
			</div>

			<div className="relative flex h-0 min-h-0 w-full items-center justify-between gap-4 px-4 sm:px-8 lg:h-auto lg:min-h-[68px] lg:px-9 2xl:min-h-[76px] 2xl:px-12">
				<div className="lg:hidden">
					<button
						type="button"
						aria-expanded={menuOpen}
						aria-controls="mobile-navigation"
						aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
						onClick={() => setMenuOpen((open) => !open)}
						className="absolute right-0 top-[-30px] z-50 text-[#1a3657] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a45f]"
					>
						{menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
					</button>

					<div className={`fixed inset-0 z-40 bg-[#2B425D]/35 transition-opacity duration-300 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`} aria-hidden="true" onClick={() => setMenuOpen(false)} />
					<nav
						id="mobile-navigation"
						aria-label="Mobile navigation"
						className={`fixed right-0 top-0 z-40 h-[100dvh] w-[min(20rem,calc(100vw-1rem))] overflow-y-auto bg-[#FFFCF7] px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
					>
						{navItems.map((item) => (
							<div key={item.label}>
								<a href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-[#2B425D]/10 py-3 text-sm font-normal uppercase text-[#2B425D]">{item.label}</a>
								{item.dropdown?.map((child) => (
									<a key={child.label} href={child.href} onClick={() => setMenuOpen(false)} className="block py-2 pl-4 text-xs text-[#426b9d]">{child.label}</a>
								))}
							</div>
						))}
					</nav>
				</div>
				<nav className="hidden items-center gap-5 lg:flex 2xl:gap-7" aria-label="Primary navigation">
					{navItems.map((item) => (
						<div
							key={item.label}
							className="group relative"
						>
							<a
								href={item.href}
								className="flex items-center gap-1 whitespace-nowrap text-lg font-normal uppercase transition-colors hover:text-[#d4a45f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a45f]"
								aria-haspopup={item.dropdown ? "menu" : undefined}
							>
								{item.label}
								{item.dropdown && <ChevronDown className="h-2.5 w-2.5 text-[#d8ae6d]" />}
							</a>
							{item.dropdown && (
								<div className="invisible absolute left-0 top-full z-30 w-56 translate-y-2 rounded-sm bg-[#fffdf9] py-2 text-left opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100" role="menu">
									{item.dropdown.map((child) => (
										<a key={child.label} href={child.href} className="block px-4 py-2 text-sm font-normal normal-case text-[#1a3657] transition-colors hover:bg-[#eef5fd] hover:text-[#d4a45f] focus:bg-[#eef5fd] focus:outline-none" role="menuitem">
											{child.label}
										</a>
									))}
								</div>
							)}
						</div>
					))}
				</nav>

				<a href="#home" className="absolute left-1/2 top-[-40px] z-10 flex h-10 w-24 -translate-x-1/2 items-start justify-center lg:-top-9 lg:h-[130px] lg:w-[220px] 2xl:-top-10 2xl:h-[146px] 2xl:w-[250px]">
					<span className="absolute inset-0 hidden rounded-b-[34px] bg-[#fffdf9] shadow-sm lg:block 2xl:rounded-b-[40px]" aria-hidden="true" />
					<Image
						src={logo}
						alt="Big Picture Pediatric Dentistry"
						width={190}
						height={120}
						priority
						className="relative z-10 h-auto w-[82px] lg:w-[190px] 2xl:w-[215px]"
					/>
				</a>

				<div className="ml-auto hidden items-center gap-6 lg:flex 2xl:gap-9">
				<nav className="hidden items-center gap-5 lg:flex 2xl:gap-7" aria-label="Secondary navigation">
					{secondaryLinks.map(({ label, href }) => (
						<a key={label} href={href} className="text-lg font-normal uppercase transition-colors hover:text-[#d4a45f]">{label}</a>
					))}
					</nav>

					<a href="#appointment" className="flex items-center gap-2 rounded-full bg-[#e4bb77] py-2 pl-4 pr-2 text-lg font-normal uppercase text-white shadow-md transition-transform hover:scale-[1.02]">
						Request an appointment
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fffdf9] text-[#426b9d]">
							<ChevronDown className="h-3.5 w-3.5 -rotate-45" />
						</span>
					</a>
				</div>
			</div>
		</header>
	);
}
