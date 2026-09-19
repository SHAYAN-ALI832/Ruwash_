import { Droplet, Clock, Heart, Waves, Wind, ArrowLeft } from "lucide-react";
import Soap from '../assets/Soap1.jpeg';

const FEATURES = [
  {
    icon: Droplet,
    title: "Deep Cleaning Power",
    description:
      "A builder-and-surfactant formula that works into fabric to lift dirt, not just mask it.",
  },
  {
    icon: Clock,
    title: "Tough on Stains",
    description:
      "The new improved formula targets set-in stains so colour and shine come back, wash after wash.",
  },
  {
    icon: Heart,
    title: "Safe for Hands & Clothes",
    description:
      "Gentle enough for daily hand-washing, tough enough for the family's heaviest loads.",
  },
  {
    icon: Waves,
    title: "Effective in Hard Water",
    description:
      "Sequestrants keep the formula performing across Pakistan's varying water conditions.",
  },
  {
    icon: Wind,
    title: "Fresh, Long-Lasting Scent",
    description:
      "A light floral fragrance that lingers in the fabric long after the clothes have dried.",
  },
];

export default function WhyRuwash() {
  return (
    <section className="bg-white py-20 font-['Inter']">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <p className="text-[13px] font-bold uppercase tracking-[2.2px] text-[#0057a8]">
          WHY RUWASH
        </p>

        <h2 className="mt-3 max-w-[580px] text-[32px] font-extrabold leading-[1.15] tracking-[-0.6px] text-[#002f50] sm:text-[40px]">
          Built for the way Pakistani<br className="hidden sm:block" />
          homes actually wash.
        </h2>

        {/* Wave underline */}
        <svg
          className="mt-3 h-[14px] w-[160px]"
          viewBox="0 0 160 14"
          fill="none"
        >
          <path
            d="M2 9C25 2.5 50 1.5 75 8C100 14.5 125 13 145 6.5C152 3.5 156 3 158 5"
            stroke="#006dcc"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-gradient-to-b from-[#f0f7ff] to-white p-6 shadow-[0_4px_20px_-4px_rgba(0,70,130,0.06)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00519b]">
                <Icon size={20} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="mt-5 text-[20px] font-sans font-bold text-[#002f50]">
                {title}
              </h3>
              <p className="mt-2 text-[16px] font-sans  leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}

          {/* Made & Packed in Pakistan card */}
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-b from-[#f0f7ff] to-white p-6 shadow-[0_4px_20px_-4px_rgba(0,70,130,0.06)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00519b]">
              <span className="text-[15px] font-bold text-white">A</span>
            </div>
            <h3 className="mt-5 text-[16px] font-bold text-[#002f50]">
              Made &amp; Packed in Pakistan
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
              Produced by ARS Enterprise in Mardan, KP — quality checked
              before it reaches your home.
            </p>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="relative mt-16 overflow-hidden rounded-[28px]">
          <img
            src={Soap}
            alt="RUWASH beauty soap — soft, smooth & glowing skin"
            className="h-full min-h-[340px] w-full object-cover object-center"
          />

          {/* Dark gradient overlay (left side) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/90 via-[#1a0a2e]/55 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:max-w-xl">
            <p className="text-[12px] font-bold uppercase tracking-[1.8px] text-[#f9a8d4]">
              Beauty Soap · New Improved Formula
            </p>

            <h3 className="mt-3 text-[28px] font-extrabold leading-[1.2] text-white sm:text-[34px]">
              Khalis narmi, qudrati<br />chamak.
            </h3>

            <p className="mt-1 text-[15px] text-white/80" dir="rtl">
              خالص نرمی، قدرتی چمک
            </p>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/85">
              Enriched with milk protein and rose extract, for skin that
              feels as good as it looks — every single day.
            </p>

            <button className="mt-7 w-fit rounded-xl bg-[#00519b] px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#003f7b]">
              Ask About Stockists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}