import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function CombinedSections() {
  const tips = [
    {
      title: "How Much Powder to Use?",
      description: "Learn the ideal scoop measurement for full loads vs quick washes to save money.",
    },
    {
      title: "Ultimate Stain Removal",
      description: "Quick tricks to remove grease, tea, and ink stains using Ruwash.",
    },
    {
      title: "Keeping Colors Bright",
      description: "Best practices for washing colored clothes without fading.",
    },
  ];

  const testimonials = [
    {
      quote: "Removed tough tea stains from my kids' uniforms instantly. Highly recommended!",
      author: "Fatima A.",
    },
    {
      quote: "The Rs. 50 pack is super convenient. Smells fantastic and cleans really well.",
      author: "Tariq M.",
    },
    {
      quote: "Gentle on hands and great quality for the price. Ruwash is now our main detergent.",
      author: "Saima K.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 flex flex-col font-sans">
      
      {/* 1. Why Families Trust Ruwash Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-white border-b border-slate-100 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text & Small Cards */}
          <div className="flex flex-col items-start text-left">
            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 flex items-center gap-1.5 border border-blue-100 shadow-sm">
              <span>MADE IN PAKISTAN</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Families Trust Ruwash
            </h2>

            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Ruwash was formulated to bring world-class laundry performance to local Pakistani homes at prices that make sense. Our high-efficiency formula is crafted with quality-certified ingredients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center shadow-sm">
                <h4 className="text-blue-600 font-extrabold text-2xl mb-1">100%</h4>
                <p className="text-slate-500 text-xs font-medium">Quality Certified</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center shadow-sm">
                <h4 className="text-blue-600 font-extrabold text-xl mb-1">Top Grade</h4>
                <p className="text-slate-500 text-xs font-medium">Fabric Safety</p>
              </div>
            </div>
          </div>

          {/* Right Quote Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#eef6fc] border border-blue-100/60 w-full max-w-lg p-8 md:p-12 rounded-3xl shadow-sm flex items-center justify-center text-center">
              <p className="text-slate-700 italic font-medium text-base md:text-lg leading-relaxed">
                &ldquo;Crafted with national pride, delivering pristine cleanliness to every household.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Laundry Tips & Guides Section */}
      <section className="w-full py-20 px-6 md:px-16 flex flex-col items-center justify-center border-b border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Laundry Tips & Guides
          </h2>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 flex flex-col items-start text-left"
            >
              <h3 className="text-slate-900 font-bold text-lg mb-3">
                {tip.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. What Our Customers Say Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-white flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            What Our Customers Say
          </h2>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 flex flex-col items-start text-left"
            >
              {/* Star Rating Icons */}
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-base" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 italic text-sm md:text-base leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <span className="text-slate-900 font-bold text-sm mt-auto">
                - {item.author}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}