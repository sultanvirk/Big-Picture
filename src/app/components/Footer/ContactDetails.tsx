import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  { title: "Call us", text: "(346) 230-2811", icon: Phone },
  { title: "Email us", text: "appointments@bigpictureds.com", icon: Mail },
  { title: "Location", text: "17150 El Camino Real\nHouston, TX 77058", icon: MapPin },
] as const;

export default function ContactDetails() {
  return (
    <div className="space-y-5 py-2">
      <h2 className="mb-8 text-lg font-normal uppercase text-white">Contact Us</h2>
      {contactItems.map(({ icon: Icon, title, text }) => (
        <div className="flex items-start gap-3" key={title}>
          <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-[#e4bb77] text-[#e4bb77]">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="whitespace-pre-line">
            <p className="text-lg font-bold uppercase">{title}</p>
            <p className="mt-1 text-lg text-white/80">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
