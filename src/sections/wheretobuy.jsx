import React from 'react';
import { FaMapPin } from 'react-icons/fa';

export default function OrderAndDistributionSection() {
  const locations = [
    "Metro Mart & Local Stores",
    "Wholesale Markets Nationwide",
    "Direct Online WhatsApp Delivery"
  ];

  return (
    <div className="w-full bg-[#eef6fc] flex flex-col font-sans">
      
      {/* 1. Where to Buy & Become a Distributor Section */}
      <section className="w-full py-20 px-6 md:px-16 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Info Area */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Where to Buy
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Available in major retail stores across top cities including Lahore, Karachi, Islamabad, and Mardan.
            </p>

            <div className="flex flex-col gap-4 w-full">
              {locations.map((loc, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-800 font-medium text-base">
                  <span className="text-red-500 text-lg">
                    <FaMapPin />
                  </span>
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Distributor Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white border border-slate-100 w-full max-w-lg p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/60 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Become a Distributor
              </h3>

              <div className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm placeholder-slate-400 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm placeholder-slate-400 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm placeholder-slate-400 bg-white"
                  />
                </div>

                <button className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer text-sm">
                  Submit Distributor Request
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Direct Order Form Section */}
      <section className="w-full py-20 px-6 md:px-16 flex items-center justify-center bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-2xl w-full bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 flex flex-col items-center text-center">
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
            Direct Order Form
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mb-8">
            Fill this form to order instantly via WhatsApp manual confirmation
          </p>

          <form className="w-full flex flex-col gap-5 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  SELECT PACK SIZE
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-white">
                  <option>Ruwash Washing Powder (Rs. 50 Pack)</option>
                  <option>Ruwash Washing Powder (Standard Pack)</option>
                  <option>Ruwash Washing Powder (Family Pack)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  QUANTITY
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                CITY
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                COMPLETE ADDRESS
              </label>
              <textarea
                rows={3}
                placeholder=""
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 text-sm bg-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#00ba34] hover:bg-[#00a02d] text-white font-medium py-3.5 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-sm"
            >
              <span>Submit Order via WhatsApp</span>
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}