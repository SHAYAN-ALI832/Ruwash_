import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
export default function ContactAndFooter() {
  const [openFaq, setOpenFaq] = useState(null);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order directly via WhatsApp or by filling out the form on our website."
    },
    {
      question: "What areas do you deliver to?",
      answer: "We deliver to all major cities across Pakistan including Lahore, Karachi, Islamabad, and Mardan."
    },
    {
      question: "Can I place a bulk or wholesale order?",
      answer: "Yes, we accept wholesale orders. Please contact us via WhatsApp for bulk pricing."
    },
    {
      question: "Which pack sizes are available?",
      answer: "We have 1kg and 2kg packs for Washing Powder, and a 150g pack of 3 for our Beauty Soap."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* FAQ Section */}
      <section className="w-full py-20 px-6 md:px-16 flex flex-col items-center justify-center bg-white">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white cursor-pointer hover:border-slate-300 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-5 flex items-center justify-between">
                  <h4 className="text-slate-800 font-bold text-sm md:text-base">
                    {faq.question}
                  </h4>
                  <FaChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </div>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#111827] text-white pt-16 pb-8 px-6 md:px-16 border-t border-slate-800 relative">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-wide uppercase">
              RUWASH
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Keep clothes clean, smelling great and skin soft with Ruwash. Experience premium laundry care at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center text-left">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-base mb-2">Quick Links</h4>
              <a href="#home" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Home</a>
              <a href="#products" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Products</a>
              <a href="#about" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">About Us</a>
              <a href="#where-to-buy" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Where to Buy</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-base mb-2">Contact Us</h4>
              <p className="text-slate-400 text-sm">contact@ruwash.com.pk</p>
              <p className="text-slate-400 text-sm">Phone: +92 300 0000000</p>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl w-full mx-auto border-t border-slate-800 pt-8 flex items-center justify-center">
          <p className="text-slate-500 text-xs">
            © 2024 Ruwash. All rights reserved.
          </p>
        </div>

        {/* Sticky WhatsApp Button (Fixed to bottom right of screen) */}
        <a 
          href={`https://wa.me/${whatsappNumber}||+92 335 9126741`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-5 rounded-full shadow-lg shadow-green-900/30 flex items-center gap-2 transition-all hover:scale-105 z-50 cursor-pointer"
        >
          <FaWhatsapp className="text-xl" />
          <span className="text-sm">Order on WhatsApp</span>
        </a>

      </footer>
    </div>
  );
}
