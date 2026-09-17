import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import logo from '../assets/image.png';

export default function LandingPage() {
  const features = [
    {
      title: "Stain Removal",
      description: "Tackles tough spots effortlessly.",
    },
    {
      title: "Fresh Fragrance",
      description: "Peach & Rose scents that stay all day.",
    },
    {
      title: "Value for Money",
      description: "Premium quality starting at just Rs. 50.",
    },
    {
      title: "Skin-Safe Formula",
      description: "Gentle materials to protect your hands.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#eef6fc] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        
        {/* Background Decoration */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              Powerful clean, trusted everywhere
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.08] mb-5">
              Dago ki fikar
              <span className="block text-blue-600">
                chor do!
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed">
              Experience the ultimate stain-removal technology paired with
              long-lasting fresh fragrance. Safe for clothes, gentle on hands.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">

              {/* Order Now */}
              <button
                className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Order Now
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp */}
              <button
                className="w-full sm:w-auto bg-[#00ba34] hover:bg-[#00a02d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                Buy on WhatsApp
              </button>

            </div>

            {/* Small Trust Text */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mt-7 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-blue-600" />
                Easy to use
              </span>

              <span className="flex items-center gap-1.5">
                <FiCheck className="text-blue-600" />
                Fresh fragrance
              </span>

              <span className="flex items-center gap-1.5">
                <FiCheck className="text-blue-600" />
                Affordable
              </span>
            </div>

          </div>

          {/* ===== RIGHT PRODUCT ===== */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">

            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-blue-300/30 rounded-full blur-3xl" />
            </div>

            {/* Product Card */}
            <div className="relative bg-white w-full max-w-[320px] sm:max-w-[380px] md:max-w-[430px] lg:max-w-[470px] aspect-square rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-slate-300/60 border border-white flex items-center justify-center p-8 sm:p-10 md:p-12 overflow-hidden">

              {/* Card Decoration */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-blue-50 rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-blue-50 rounded-full" />

              {/* Product Image */}
              <img
                src={logo}
                alt="Dago cleaning product"
                className="relative z-10 w-full h-full max-h-[300px] sm:max-h-[340px] md:max-h-[380px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Badge */}
              <div className="absolute z-20 top-4 right-4 sm:top-6 sm:right-6 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl shadow-lg">
                <p className="text-[10px] sm:text-xs font-medium">
                  Starting from
                </p>
                <p className="text-base sm:text-lg font-extrabold">
                  Rs. 50
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="relative bg-white w-full py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-slate-100">

        <div className="max-w-7xl mx-auto">

          {/* Feature Heading */}
          <div className="text-center mb-10 md:mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
              Why choose us
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Cleaning made simple
            </h2>

            <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Powerful cleaning performance with a fresh fragrance and
              affordable price.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center mb-5 text-blue-600 group-hover:text-white transition-all duration-300">
                  <FiCheck className="text-xl stroke-[2.5]" />
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-lg mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

