import Image, { type StaticImageData } from "next/image";
import academy from "../../assets/Academy.png";
import abpd from "../../assets/ABPD.png";
import ada from "../../assets/ADA.png";
import tda from "../../assets/TDA.png";

type AccreditationLogo = {
  image: StaticImageData;
  alt: string;
};

const logos: AccreditationLogo[] = [
  { image: academy, alt: "American Academy of Pediatric Dentistry" },
  { image: abpd, alt: "American Board of Pediatric Dentistry" },
  { image: ada, alt: "American Dental Association" },
  { image: tda, alt: "Texas Dental Association" },
];

export default function AccreditationLogos() {
  return (
    <section className="bg-[#fffdf9] px-5 py-8 sm:px-8 sm:py-10 lg:py-12" aria-label="Professional accreditations">
      <div className="mx-auto grid max-w-[900px] grid-cols-4 items-center gap-3 sm:gap-8 lg:gap-16 py-24">
        {logos.map(({ image, alt }) => (
          <Image
            key={alt}
            src={image}
            alt={alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 639px) 35vw, 150px"
            className="mx-auto h-auto w-full max-w-[82px] object-contain sm:max-w-[135px] lg:max-w-[150px]"
          />
        ))}
      </div>
    </section>
  );
}
