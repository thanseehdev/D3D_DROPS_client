export default function MarqueeBanner() {
  const marqueeText =
    'D3D DROPS • LIMITED EDITION • NO RESTOCK • UNDERGROUND LUXURY • BLOOD & STEEL • ';

  const repeatedText = marqueeText + marqueeText + marqueeText;

  return (
    <div
      className="
        relative
        bg-accent
        overflow-hidden
        py-2.5 sm:py-3 md:py-4
        border-y border-accent
        shadow-[0_0_15px_rgba(177,18,38,0.3)]
      "
    >
      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none z-[1]" />

      {/* Marquee Track */}
      <div
        className="
          animate-marquee
          whitespace-nowrap
          flex
          items-center
          select-none
          min-w-max
          relative
          z-[2]
        "
      >
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className="
              font-heading
              uppercase
              font-semibold
              text-black
              shrink-0
              
              text-[10px]
              sm:text-sm
              md:text-base
              
              tracking-[0.18em]
              sm:tracking-[0.28em]
              md:tracking-[0.35em]

              px-3 sm:px-4 md:px-5
              
              leading-none
            "
          >
            {repeatedText}
          </span>
        ))}
      </div>
    </div>
  );
}
