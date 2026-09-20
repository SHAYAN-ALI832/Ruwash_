import { Check } from "lucide-react";
import P1 from '../assets/P2.jpeg';
import Soap from '../assets/soap 3.jpeg';

const POWDER_FEATURES = [
  "Deep cleaning power",
  "Removes tough stains",
  "Safe for hands & clothes",
  "Fresh, long-lasting fragrance",
  "Effective in hard water",
];

const WASH_TABLE = [
  { type: "Normal Wash", water: "Medium", powder: "60 g" },
  { type: "Machine Wash", water: "High", powder: "80 g" },
  { type: "Heavy Soiled Clothes", water: "High", powder: "100 g" },
];

const SOAP_FEATURES = [
  "Gently cleanses the skin",
  "Moisturizes & nourishes",
  "Keeps skin soft & healthy",
  "Radiant, glowing finish",
];

const SOAP_VARIANTS = [
  { label: "Peach", color: "bg-[#FDBA8C]" },
  { label: "Rose", color: "bg-[#F472B6]" },
];

export default function ProductRange() {
  return (
    <section className="bg-[#f0f7ff] py-20 font-['Inter']">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
       {/* Section header */}
<div className="text-center">
  <p className="text-[13px] font-bold uppercase tracking-[2.5px] text-[#0057a8]">
    THE RANGE
  </p>

  <h2 className="mt-3 text-[32px] font-extrabold leading-[1.15] tracking-[-0.8px] text-[#002f50] sm:text-[40px]">
    One name, two everyday<br className="hidden sm:block" /> essentials.
  </h2>

  {/* Wave underline */}
  <svg
    className="mx-auto mt-3 h-[14px] w-[110px]"
    viewBox="0 0 110 14"
    fill="none"
  >
    <path
      d="M2 8C18 2 35 1.5 52 7.5C68 13.5 85 12.5 98 6C103 3.5 106.5 3 108 5"
      stroke="#006dcc"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>

  <p className="mt-4 text-[16px] leading-relaxed text-[#3d5a73]">
    From the wash line to the wash basin — RUWASH covers the full clean.
  </p>
</div>

        {/* ===================== WASHING POWDER CARD ===================== */}
        <div className="mt-14 overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_-12px_rgba(0,70,130,0.12)]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-[#f8fbff] p-8 lg:p-12">
              <img
                src={P1}
                alt="RUWASH Extra Power Stain Removal washing powder"
                className="w-full max-w-[420px] object-contain drop-shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-[13px] font-bold uppercase tracking-[1.8px] text-[#0066cc]">
                Washing Powder
              </p>

              <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-slate-900 sm:text-[32px]">
                Extra Power Stain Removal
              </h3>

              <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">
                Specially formulated to remove tough stains and give your clothes a
                brilliant clean with long-lasting freshness — new, improved formula.
              </p>

              {/* Features */}
              <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {POWDER_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      strokeWidth={2.8}
                      className="mt-0.5 shrink-0 text-[#0066cc]"
                    />
                    <span className="text-[14.5px] font-medium text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Dosage Table */}
              <div className="mt-9 overflow-x-auto">
                <table className="w-full min-w-[380px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-3 pr-4 text-[12px] font-bold uppercase tracking-[1px] text-[#0066cc]">
                        Wash Type
                      </th>
                      <th className="pb-3 pr-4 text-[12px] font-bold uppercase tracking-[1px] text-[#0066cc]">
                        Water Level
                      </th>
                      <th className="pb-3 text-[12px] font-bold uppercase tracking-[1px] text-[#0066cc]">
                        Powder
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WASH_TABLE.map((row, idx) => (
                      <tr
                        key={row.type}
                        className={idx !== WASH_TABLE.length - 1 ? "border-b border-slate-100" : ""}
                      >
                        <td className="py-3.5 pr-4 text-[14.5px] text-slate-700">
                          {row.type}
                        </td>
                        <td className="py-3.5 pr-4 text-[14.5px] text-slate-700">
                          {row.water}
                        </td>
                        <td className="py-3.5 text-[14.5px] font-medium text-slate-800">
                          {row.powder}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Net Weight */}
              <p className="mt-9 text-[26px] font-extrabold text-[#003d7a]">
                1kg{" "}
                <span className="ml-1 text-[13px] font-bold uppercase tracking-[1px] text-slate-500">
                  Net Weight Pack
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ===================== BEAUTY SOAP CARD ===================== */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_-12px_rgba(0,70,130,0.12)]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Details */}
            <div className="order-2 p-8 sm:p-10 lg:order-1 lg:p-12">
              <p className="text-[13px] font-bold uppercase tracking-[1.8px] text-[#e11d72]">
                Beauty Soap
              </p>

              <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-slate-900 sm:text-[32px]">
                Soft, Smooth & Glowing Skin
              </h3>

              <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">
                Enriched with milk protein and rose extract — a gentle, hydrating
                everyday bar for all skin types.
              </p>

              {/* Features */}
              <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {SOAP_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
                      <Check size={12} strokeWidth={3} className="text-[#e11d72]" />
                    </span>
                    <span className="text-[14.5px] font-medium text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Color Variants */}
              <div className="mt-8 flex gap-8">
                {SOAP_VARIANTS.map((variant) => (
                  <div key={variant.label} className="flex flex-col items-center gap-2.5">
                    <span
                      className={`h-10 w-10 rounded-full shadow-md ring-2 ring-white ${variant.color}`}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-slate-600">
                      {variant.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Net Weight */}
              <p className="mt-9 text-[26px] font-extrabold text-[#003d7a]">
                125g{" "}
                <span className="ml-1 text-[13px] font-bold uppercase tracking-[1px] text-slate-500">
                  Net Weight, When Packed
                </span>
              </p>
            </div>

            {/* Product Image */}
            <div className="order-1 flex items-center justify-center bg-[#f8fbff] p-8 lg:order-2 lg:p-12">
              <img
                src={Soap}
                alt="RUWASH beauty soap"
                className="w-full max-w-[380px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}