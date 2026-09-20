import {
  FaTiktok,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const LINK_COLUMNS = [
  {
    heading: "Product",
    links: ["Washing Powder", "Beauty Soap"],
  },
  {
    heading: "Company",
    links: ["Why Ruwash", "Contact"],
  },
];

const SOCIAL_LINKS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ruwash5?_r=1&_t=ZS-99IpJOSgKbV",
    icon: FaTiktok,
    className: "bg-black hover:bg-white hover:text-black",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19QTBnJCaw/",
    icon: FaFacebookF,
    className: "bg-[#1877F2] hover:bg-white hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ruwash530?igsi=MXFscDEzMzJlYnQ2bg==",
    icon: FaInstagram,
    className:
      "bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] hover:bg-white hover:text-[#E1306C]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <p className="text-2xl font-extrabold tracking-tight text-white">
              RUWASH
            </p>

            <p className="mt-3 text-sm leading-relaxed text-sky-200">
              Washing powder &amp; beauty soap by ARS Enterprise. Packed and
              marketed in Swabi, Khyber Pakhtunkhwa.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-400">
                Follow Us
              </p>

              <div className="mt-4 flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-1 ${social.className}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {LINK_COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="text-xs font-bold uppercase tracking-wide text-sky-400">
                  {column.heading}
                </p>

                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#home"
                        className="text-sm text-sky-200 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-sky-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 ARS Enterprise — RUWASH. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made in Pakistan
            <span aria-hidden="true">🇵🇰</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

