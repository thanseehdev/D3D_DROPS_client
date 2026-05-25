export default function MarqueeBanner() {
  const marqueeText = "D3D DROPS • LIMITED EDITION • NO RESTOCK • UNDERGROUND LUXURY • BLOOD & STEEL • ";
  const repeatedText = marqueeText + marqueeText + marqueeText;

  return (
    <div className="bg-accent overflow-hidden py-3 border-y border-accent shadow-[0_0_15px_rgba(177,18,38,0.3)]">
      <div className="animate-marquee whitespace-nowrap flex select-none">
        <span className="font-heading text-sm sm:text-base tracking-[0.35em] text-black font-semibold uppercase pr-4">
          {repeatedText}
        </span>
        <span className="font-heading text-sm sm:text-base tracking-[0.35em] text-black font-semibold uppercase pr-4">
          {repeatedText}
        </span>
        <span className="font-heading text-sm sm:text-base tracking-[0.35em] text-black font-semibold uppercase pr-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
