import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import brandIcon from "../../assets/Brandicon.png";
import doctorImage from "../../assets/doc.png";
import { H2 } from "../ui/typography";

export default function DoctorSection() {
  return (
    <section
      id="parents"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-r from-[#426b9d] to-[#79a9e8] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <Image
        src={brandIcon}
        alt=""
        aria-hidden="true"
        className="absolute right-[8%] top-12 w-24 opacity-15 sm:w-32 lg:w-40"
      />

      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1fr_430px] lg:gap-20">
        <div className="max-w-[500px]">
          <Image
            src={brandIcon}
            alt=""
            aria-hidden="true"
            className="mb-5 h-10 w-10 opacity-90"
          />
          <p className="font-satisfy text-3xl text-[#e4bb77] sm:text-4xl">
            Meet The Doctor
          </p>
          <H2 className="mt-3 text-4xl text-white sm:text-5xl">
            Dr. Jason Brock
          </H2>

          <div className="mt-5 space-y-4 text-sm leading-5 text-white/90 sm:text-[15px]">
            <p>
              Dr. Brock grew up outside of Pittsburgh, Pennsylvania. Although
              his father was a dentist, he decided to study film-making in
              college and explore his passion for the arts. After earning a
              Master of Fine Arts in film production and spending five years in
              Hollywood, he decided to pursue a career that would allow him to
              make a positive difference in people&apos;s lives.
            </p>
            <p>
              He attended the New York University School of Dentistry, where he
              received the prestigious NYU Award for Ethics. During dental
              school, he was active in many organizations, including the
              American Student Dental Association, and he was a founding member
              of the NYU Peer Review Board. Dr. Brock completed his residency in
              pediatric dentistry at UT Houston School of Dentistry and he feels
              blessed to call Clear Lake his home.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#about-details"
              className="flex items-center gap-2 rounded-full bg-[#e4bb77] py-2 pl-5 pr-2 text-xs font-semibold uppercase text-white shadow-md transition-transform hover:scale-[1.03]"
            >
              Read more about doctor
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fffdf9] text-[#426b9d]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#team"
              className="flex items-center gap-3 text-xs font-semibold uppercase text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white/80 bg-[#fffdf9] text-[#426b9d]">
                <ArrowRight className="h-4 w-4" />
              </span>
              Meet the team
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="rounded-[12px] border border-white/80 bg-white p-0.5 shadow-xl">
            <Image
              src={doctorImage}
              alt="Dr. Jason Brock"
              width={doctorImage.width}
              height={doctorImage.height}
              sizes="(max-width: 1023px) 90vw, 430px"
              className="h-auto w-full rounded-[10px]"
            />
          </div>
          
            {/* Your comment bubble with glass effect */}
            <div
                className="absolute -bottom-4 left-[-48px] max-w-[245px] rounded-[4px] border border-white/25 bg-gradient-to-br from-white/20 via-white/10 to-[#2b425d]/45 px-5 py-5 text-center text-xs leading-4 text-white shadow-2xl backdrop-blur-xl backdrop-saturate-150 sm:left-[-55px]"
            >
              <span className="mb-2 block text-2xl leading-3">&ldquo;</span>
              We are a caring and compassionate group, and we take pride in
              delivering quality oral healthcare to children in a safe
              environment.
            </div>
          
        </div>
      </div>
    </section>
  );
}
