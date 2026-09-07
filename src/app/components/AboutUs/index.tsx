import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import aboutUs1 from "../../assets/aboutus1.png";
import aboutUs2 from "../../assets/aboutus2.png";
import aboutUs3 from "../../assets/aboutus3.png";
import aboutUs4 from "../../assets/aboutus4.png";
import aboutUs5 from "../../assets/aboutus5.png";
import { H2, Paragraph } from "../ui/typography";

const galleryImages = [
	{ image: aboutUs1, alt: "Dentist caring for a young patient", className: "-rotate-2" },
	{ image: aboutUs2, alt: "Child visiting the dentist", className: "translate-y-8 -rotate-1" },
	{ image: aboutUs3, alt: "Happy child at Big Picture Pediatric Dentistry", className: "translate-y-[58px]" },
	{ image: aboutUs4, alt: "Dentist helping a child", className: "translate-y-8 rotate-1" },
	{ image: aboutUs5, alt: "Pediatric dentist treating a patient", className: "rotate-2" },
];

export default function AboutUs() {
	return (
		<section
	id="about"
	className="relative overflow-hidden bg-[#fffdf9] px-5 pb-28 pt-28 text-center text-[#426b9d] sm:px-8 lg:px-8 lg:pb-36 lg:pt-32"
>
	<div id="services" className="scroll-mt-24" aria-hidden="true" />
	<div className="relative z-10 mx-auto w-full">

		<p className="font-satisfy text-3xl text-[#e4bb77] sm:text-4xl">
			About Us
		</p>

		<H2 className="mt-3 lg:text-[42px]">
			Pediatric Dentist In{" "}
			<span className="text-[#5f8fc8]">
				Houston, TX
			</span>
		</H2>

		<Paragraph className="mx-auto mt-4 max-w-[980px] text-xs leading-[1.45] sm:text-sm">
			At our office serving Clear Lake and Houston, our welcoming team
			at Big Picture Pediatric Dentistry provides a patient experience
			that goes beyond dentistry. With a practice, communication
			approach and an accommodation every step of the way, Dr. Jason
			Brock and our entire team deliver educational dental care for
			lifelong oral health. Your child will feel excited to be involved
			in taking care of their own smile and as a parent, you will feel
			confident knowing that your little one will receive the highest
			quality of service while accommodating your budget, lifestyle,
			and individual needs.
		</Paragraph>

		{/* Gallery */}
		<div className="mx-auto mt-9 flex w-full max-w-none items-start justify-center gap-1 lg:mt-10 lg:gap-2">

			{galleryImages.map(({ image, alt, className }) => (
				<div key={alt} className={`w-[18%] shrink-0 ${className}`}>
					<Image src={image} alt={alt} sizes="(max-width: 639px) 46vw, 20vw" className="block w-full rounded-[9px] object-cover" />
				</div>
			))}

		</div>

		{/* Button */}
		<a
			href="#about-details"
			className="mx-auto -mt-[62px] flex w-fit items-center gap-3 rounded-full bg-[#e4bb77] py-2 pl-5 pr-2 text-xs font-semibold uppercase text-white shadow-md transition-transform hover:scale-[1.03]"
		>
			Read more about us

			<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fffdf9] text-[#426b9d]">
				<ArrowUpRight className="h-4 w-4" />
			</span>
		</a>

	</div>

</section>
	);
}
