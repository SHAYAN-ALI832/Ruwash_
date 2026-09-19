import Marquee from "../sections/marqueebar.jsx";
import Ruwashlogo from "../assets/Ruwas logo.jpeg";

const FEATURES = [
  "Brighter Whites",
  "Tough on Stains",
  "Fresh Fragrance",
  "Hard Water Ready",
];

export default function RuwashHero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[568px] overflow-hidden bg-[#f2f8fe] font-sans font-medium"
      >
        {/* Background dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(74,144,226,0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "160px 110px",
            backgroundPosition: "10px 15px",
          }}
        />

        {/* Extra small decorative dots */}
        <span className="absolute left-[25px] top-[50px] h-[3px] w-[3px] rounded-full bg-blue-300" />
        <span className="absolute left-[138px] top-[15px] h-[3px] w-[3px] rounded-full bg-blue-200" />
        <span className="absolute left-[320px] top-[27px] h-[4px] w-[4px] rounded-full bg-blue-200" />
        <span className="absolute left-[477px] top-[16px] h-[3px] w-[3px] rounded-full bg-blue-200" />
        <span className="absolute right-[270px] top-[15px] h-[3px] w-[3px] rounded-full bg-blue-200" />
        <span className="absolute right-[20px] top-[80px] h-[3px] w-[3px] rounded-full bg-blue-200" />

        {/* Decorative bubbles */}
        <div className="absolute left-[80px] top-[62px] h-[26px] w-[26px] rounded-full bg-gradient-to-br from-white to-[#acd7f4] shadow-inner" />
        <div className="absolute left-[620px] top-[152px] h-[17px] w-[17px] rounded-full bg-gradient-to-br from-white to-[#a9d5ef] shadow-inner" />
        <div className="absolute left-[699px] top-[458px] h-[15px] w-[15px] rounded-full bg-gradient-to-br from-white to-[#acd8f3] shadow-inner" />
        <div className="absolute left-[108px] top-[398px] h-[20px] w-[20px] rounded-full bg-gradient-to-br from-white to-[#b5dcf5] shadow-inner" />

        {/* Main content */}
        <div className="relative mx-auto flex min-h-[568px] max-w-[1346px] flex-col items-center px-6 py-16 sm:px-10 lg:flex-row lg:px-[116px] lg:py-0">
          
          {/* LEFT */}
          <div className="w-full lg:w-[54%]">
            {/* Small heading - exact match */}
            <p className="mb-[17px] text-[11px] font-bold uppercase tracking-[2.5px] text-[#0057a8]">
              ARS ENTERPRISE · MADE IN PAKISTAN
            </p>

            {/* Main heading */}
            <h1 className="max-w-[540px] text-[48px] font-black leading-[1.12] tracking-[-1.8px] text-[#002f50] sm:text-[52px]">
              Deep clean that{" "}
              <span className="relative inline-block text-[#005fc4]">
                shows,
                {/* Better matched wave underline */}
                <svg
                  className="absolute -bottom-[70px] left-0 h-[14px] w-[168px]"
                  viewBox="0 0 168 14"
                  fill="none"
                >
                  <path
                    d="M2 9C22 2.5 45 1.5 68 8.5C90 15.5 112 14.5 134 7C147 2.5 157 2 166 6"
                    stroke="#006dcc"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              freshness that{" "}
              <span className="text-[#005fc4]">stays.</span>
            </h1>

            {/* Description */}
            <p className="mt-[32px] max-w-[505px] text-[17px] leading-[1.75] text-[#55636d]">
              RUWASH makes washing powder and beauty soap built for real
              Pakistani households — tough on stains, gentle on hands, and
              effective even in hard water.
            </p>

            {/* Feature pills */}
            <div className="mt-[25px] flex flex-wrap gap-[10px]">
              {FEATURES.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-[#dce7f0] bg-white px-[15px] py-[8px] text-[13px] font-semibold text-[#07569b] shadow-[0_3px_10px_rgba(0,65,120,0.08)]"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Buttons - no arrow icon (matches design) */}
            <div className="mt-[34px] flex items-center gap-[13px]">
              <a
                href="#products"
                className="inline-flex h-[49px] items-center rounded-[12px] bg-[#00519b] px-[27px] text-[14px] font-bold text-white shadow-[0_5px_12px_rgba(0,70,130,0.15)] transition hover:bg-[#003f7b]"
              >
                Explore Products
              </a>

              <a
                href="#contact"
                className="inline-flex h-[49px] items-center rounded-[12px] border border-[#00519b] bg-white px-[27px] text-[14px] font-bold text-[#00519b] transition hover:bg-blue-50"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT — desktop image */}
          <div className="absolute right-[11.5%] top-[91px] hidden lg:block">
            <div className="relative h-[420px] w-[420px]">
              <img
                src={Ruwashlogo}
                alt="RUWASH washing powder"
                className="h-full w-full rounded-full object-cover shadow-[0_20px_35px_rgba(0,65,110,0.20)]"
              />

              {/* Stat card - better positioned */}
              <div className="absolute -bottom-[2px] -left-[48px] flex h-[74px] w-[192px] items-center rounded-[15px] bg-white px-[17px] shadow-[0_10px_25px_rgba(0,60,100,0.15)]">
                <div className="w-[70px]">
                  <p className="text-[20px] font-extrabold leading-none text-[#0054a0]">
                    2
                  </p>
                  <p className="mt-[8px] text-[9px] font-semibold uppercase tracking-[0.5px] text-[#42617a]">
                    Product Lines
                  </p>
                </div>

                <div className="mx-[10px] h-[36px] w-px bg-[#dce6ee]" />

                <div className="w-[70px]">
                  <p className="text-[20px] font-extrabold leading-none text-[#0054a0]">
                    100%
                  </p>
                  <p className="mt-[8px] text-[9px] font-semibold uppercase tracking-[0.5px] text-[#42617a]">
                    Made Local
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / tablet image */}
          <div className="mt-10 flex w-full justify-center lg:hidden">
            <div className="relative h-[320px] w-[320px]">
              <img
                src={Ruwashlogo}
                alt="RUWASH washing powder"
                className="h-full w-full rounded-full object-cover shadow-2xl"
              />

              <div className="absolute -bottom-5 left-0 flex rounded-2xl bg-white px-5 py-4 shadow-xl">
                <div>
                  <p className="text-lg font-bold text-blue-800">2</p>
                  <p className="text-[10px] uppercase text-slate-500">
                    Product Lines
                  </p>
                </div>

                <div className="mx-4 h-8 w-px bg-slate-200" />

                <div>
                  <p className="text-lg font-bold text-blue-800">100%</p>
                  <p className="text-[10px] uppercase text-slate-500">
                    Made Local
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Marquee />
      </section>
    </>
  );
}