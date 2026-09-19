import { MapPin, Phone, Mail } from "lucide-react";

const CAUTIONS = [
  "Keep out of reach of children.",
  "Avoid contact with eyes.",
  "If contact occurs, rinse thoroughly with water.",
  "Store in a cool and dry place.",
];

export default function TransparencyAndContact() {
  return (
    <>
      {/* Transparency section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Transparency
          </p>

          <h2 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            What&apos;s inside, and how to use it safely.
          </h2>

          <svg
            className="mt-3 h-5 w-48 text-blue-500" // Increased height and width classes
            viewBox="0 0 140 16"                     // Expanded viewBox coordinate bounds
            fill="none"
          >
            <path
              d="M2 10c18-9 35-9 53 0s35 9 53 0c16-5 24-2 30 0" // Slightly extended path curve
              stroke="currentColor"
              strokeWidth="4"                                   // Thicker stroke for more prominence
              strokeLinecap="round"
            />
          </svg>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Ingredients */}
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Washing Powder — Ingredients
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Builders, Surfactants, Sequestrants, Enzymes, Optical
                Brighteners, Fragrance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border-2 border-slate-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                  Made in Pakistan
                </span>
                <span className="rounded-full border-2 border-slate-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                  Keep Your City Clean
                </span>
              </div>
            </div>

            {/* Caution */}
            <div>
              <h3 className="text-base font-bold text-slate-900">Caution</h3>
              <ul className="mt-3 space-y-2.5">
                {CAUTIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    <span className="text-sm leading-relaxed text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch section */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Find Ruwash, or reach ARS Enterprise directly.
            </h2>
            <svg
              className="mt-3 h-5 w-48 text-blue-500" // Increased height and width classes
              viewBox="0 0 140 16"                     // Expanded viewBox coordinate bounds
              fill="none"
            >
              <path
                d="M2 10c18-9 35-9 53 0s35 9 53 0c16-5 24-2 30 0" // Slightly extended path curve
                stroke="currentColor"
                strokeWidth="4"                                   // Thicker stroke for more prominence
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-4 max-w-md text-slate-600">
              Questions about stockists, bulk orders, or the product line?
              The team based in Mardan is happy to help.
            </p>
          </div>

          {/* Contact card */}
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <p
              dir="rtl"
              className="text-right text-lg font-semibold text-blue-800"
            >
              صاف ستھرا لباس، صحت مند خاندان
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    ARS Enterprise
                  </p>
                  <p className="text-sm text-slate-600">
                    Mardan Swabi Road, Behind HBL, Opposite to WAPDA Office
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    0319 5270137 / 0341 2366868
                  </p>
                  <p className="text-sm text-slate-600">
                    Call for orders &amp; stockist enquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    umairraziq111@gmail.com
                  </p>
                  <p className="text-sm text-slate-600">
                    Email for enquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}