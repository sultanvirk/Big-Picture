import { createElement, type ComponentType } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type SocialIconComponent = ComponentType<{ className?: string }>;

const socialLinks = [
  { label: "Facebook", Icon: FaFacebookF as unknown as SocialIconComponent },
  { label: "X", Icon: FaXTwitter as unknown as SocialIconComponent },
  { label: "Instagram", Icon: FaInstagram as unknown as SocialIconComponent },
  { label: "LinkedIn", Icon: FaLinkedinIn as unknown as SocialIconComponent },
];

export default function SocialLinks() {
  return (
    <nav className="mt-4 flex justify-center gap-3" aria-label="Footer social links">
      {socialLinks.map(({ label, Icon }) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          aria-label={label}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e4bb77] text-white transition-colors hover:bg-[#f0cc91]"
        >
          {createElement(Icon, { className: "h-3.5 w-3.5" })}
        </a>
      ))}
    </nav>
  );
}
