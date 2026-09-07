import Image from "next/image";
import Appointment from "../Appointment";
import logo from "../../assets/Logo.png";
import ContactDetails from "./ContactDetails";
import OpeningHours from "./OpeningHours";
import SocialLinks from "./SocialLinks";

export default function Footer() {
	return (
		<footer id="contact" className="relative overflow-hidden bg-[#fffdf9] pt-16 text-white">
			<div className="absolute inset-x-0 top-0 h-16 bg-[#e4bb77]" style={{ clipPath: "polygon(0 55%, 10% 90%, 24% 72%, 38% 30%, 50% 18%, 62% 30%, 76% 72%, 90% 90%, 100% 55%, 100% 100%, 0 100%)" }} aria-hidden="true" />
			<div className="absolute inset-x-0 top-7 h-14 bg-[#2d496b]" style={{ clipPath: "polygon(0 25%, 10% 60%, 24% 42%, 38% 0, 50% 0, 62% 0, 76% 42%, 90% 60%, 100% 25%, 100% 100%, 0 100%)" }} aria-hidden="true" />

			<div className="relative z-10 bg-[#2d496b] px-6 pb-8 pt-14 sm:px-10 lg:px-14">
				

				<div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.1fr_1fr_1.1fr] lg:gap-12">
					<Appointment />
					<div className="border-y border-white/10 py-8 text-center lg:border-x lg:border-y-0 lg:px-12">
						<Image src={logo} alt="Big Picture Pediatric Dentistry" width={190} height={120} className="mx-auto h-auto w-[190px] brightness-0 invert" />
						<OpeningHours />
						<SocialLinks />
					</div>
					<ContactDetails />
				</div>
				<div className="mx-auto mt-10 flex max-w-[1180px] justify-between border-t border-white/10 pt-4 text-[10px] text-white/65"><span>© Big Picture Pediatric Dentistry 2026</span><span>Privacy Policy</span></div>
			</div>
		</footer>
	);
}
