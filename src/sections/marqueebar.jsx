const ITEMS = [
  "Fresh Long-Lasting Fragrance",
  "Effective in Hard Water",
  "Safe for Hands & Clothes",
  "Brighter Whites",
  "Tough on Stains",
];

export default function MarqueeBar() {
  return (
    <div className="w-full overflow-hidden bg-blue-900 py-3">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 22s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="marquee-track flex w-max items-center">
        {/* render the list twice, back to back, for a seamless loop */}
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-6 text-sm font-bold uppercase tracking-wide text-white"
          >
            {item}
            <span className="ml-6 text-sky-400">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}