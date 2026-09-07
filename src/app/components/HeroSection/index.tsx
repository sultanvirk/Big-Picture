import { ArrowUpRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import brandIcon from "../../assets/Brandicon.png";
import heroImage from "../../assets/hero.png";
import { H1 } from "../ui/typography";

export default function HeroSection() {
	return (
		<section id="home" className="relative flex min-h-[calc(100svh-40px)] items-center justify-center overflow-x-hidden overflow-y-visible bg-[#426b9d] text-white sm:min-h-[650px] lg:min-h-[calc(100vh-105px)] 2xl:min-h-[calc(100vh-116px)]">
			<Image
				src={heroImage}
				alt=""
				fill
				priority
				sizes="100vw"
				quality={82}
				className="object-cover object-[center_42%]"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[#193452]/55" aria-hidden="true" />

			<div className="relative z-10 mx-auto flex -translate-y-2 max-w-5xl flex-col items-center px-5 pt-8 text-center sm:-translate-y-10 sm:pt-20 2xl:-translate-y-14 2xl:max-w-6xl 2xl:pt-24">
				<p className="font-satisfy text-[16px] leading-tight text-[#e7bc77] sm:text-[29px] 2xl:text-[34px]">Loved By Kids And Parents Alike</p>
				<H1 className="mt-3 max-w-4xl text-balance text-[25px] uppercase leading-[1.03] tracking-tight sm:mt-4 sm:text-[52px] lg:text-[58px] 2xl:max-w-5xl 2xl:text-[72px] text-[#FFFCF7]">
					Big Picture
					<br />
					Pediatric Dentistry
				</H1>
				<p className="mt-3 max-w-[280px] text-pretty text-[11px] leading-4 text-white/95 sm:mt-5 sm:max-w-2xl sm:text-[15px] sm:leading-6 2xl:max-w-3xl 2xl:text-[18px] 2xl:leading-7">
					Proudly caring for smiles in and around Houston, Clear Lake, League City, and Friendswood, TX.
				</p>

				<div className="mt-4 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row 2xl:mt-8 2xl:gap-4">
					<a href="#appointment" className="flex items-center gap-2 rounded-full bg-[#e4bb77] py-2 pl-4 pr-2 text-[9px] font-bold uppercase text-white shadow-lg transition-transform hover:scale-[1.03] sm:pl-5 sm:text-[10px] 2xl:py-3 2xl:pl-6 2xl:text-[12px]">
						Request an appointment
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fffdf9] text-[#426b9d]"><ArrowUpRight className="h-3.5 w-3.5" /></span>
					</a>
					<a href="tel:3462302811" className="flex items-center gap-2 rounded-full border border-white/80 py-2 pl-2 pr-4 text-[9px] font-bold uppercase text-white transition-colors hover:bg-white/10 sm:text-[10px] 2xl:py-3 2xl:pr-5 2xl:text-[12px]">
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e4bb77] text-white"><PhoneCall className="h-3.5 w-3.5" /></span>
						Call us: (346) 230-2811
					</a>
				</div>
			</div>

			<div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-12 w-full lg:hidden" aria-hidden="true">
				<div className="absolute inset-0 bg-[#FFFCF7]" style={{ clipPath: "polygon(0 30%, 16% 12%, 32% 28%, 50% 52%, 68% 28%, 84% 12%, 100% 30%, 100% 100%, 0 100%)" }} />
				<div className="absolute inset-x-0 bottom-0 h-8 bg-[#5f8fc8]" style={{ clipPath: "polygon(0 35%, 16% 17%, 32% 33%, 50% 57%, 68% 33%, 84% 17%, 100% 35%, 100% 100%, 0 100%)" }} />
				<div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#80b1f0] bg-[#80b1f0] shadow-[0_0_0_5px_rgba(43,66,93,0.2)]">
					<Image src={brandIcon} alt="" width={71} height={71} className="h-full w-full rounded-full" />
				</div>
			</div>
		</section>
	);
}
