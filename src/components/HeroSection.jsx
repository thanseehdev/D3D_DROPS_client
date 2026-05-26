export default function HeroSection() {
  const scrollToCollection = () => {
    document
      .getElementById('collection')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Background Image */}
      <img
        src="/hero.png"
        className="
          absolute inset-0 w-full h-full z-0
          object-cover
          object-[center_12%]
          sm:object-[center_15%]
          md:object-[center_18%]
          lg:object-[center_20%]
          brightness-[0.7]
          scale-[1.02]
        "
        alt="Streetwear background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-background z-[1]" />

      {/* Red Glow Orb */}
      <div
        className="
          absolute z-[1] rounded-full pointer-events-none
          w-[260px] h-[260px]
          sm:w-[320px] sm:h-[320px]
          md:w-[420px] md:h-[420px]
          blur-[70px] sm:blur-[80px]
          opacity-80
        "
        style={{
          background:
            'radial-gradient(circle, rgba(177, 18, 38, 0.4) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Bottom Fog */}
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-52 md:h-64 bg-gradient-to-t from-background to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center">

        {/* Main Heading */}
        <h1
          className="
            font-heading font-bold uppercase leading-[0.9]
            tracking-[0.05em] sm:tracking-[0.08em]
            text-offwhite
            mt-6 mb-3
            select-none
          "
          style={{
            fontSize: 'clamp(42px, 12vw, 130px)',
            textShadow: '0 0 60px rgba(177, 18, 38, 0.55)',
          }}
        >
          WEAR THE
          <br />
          <span style={{ color: '#B11226' }}>DARKNESS</span>
        </h1>

        {/* Tagline */}
        <p
          className="
            font-body uppercase font-medium opacity-85
            text-[8px]
            sm:text-[10px]
            md:text-xs
            tracking-[0.25em]
            sm:tracking-[0.4em]
            md:tracking-[0.45em]
            text-silver
            mt-2 sm:mt-4
            mb-8 sm:mb-10
            max-w-[90%] sm:max-w-lg
            leading-relaxed
          "
        >
          real wear • real people • real culture
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          
          {/* Primary Button */}
        <button
  onClick={scrollToCollection}
  className="
    group relative overflow-hidden
    w-full sm:w-auto
    min-w-[220px]
    bg-black border border-accent
    text-offwhite
    font-heading uppercase
    tracking-[0.15em] sm:tracking-[0.2em]
    px-6 sm:px-8
    py-3.5 sm:py-4
    text-xs sm:text-sm
    transition-all duration-300
    cursor-pointer
    hover:shadow-[0_0_25px_#B11226]
  "
>
  {/* Red flowing background */}
  <span
    className="
      absolute inset-0
      bg-accent
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-out
      z-0
    "
  ></span>

  {/* Button Text */}
  <span className="relative z-10">
    VIEW COLLECTION
  </span>
</button>

          {/* Secondary Button */}
          <a
            href="#collection"
            onClick={(e) => {
              e.preventDefault();
              scrollToCollection();
            }}
            className="
              w-full sm:w-auto
              min-w-[220px]
              text-center
              bg-transparent
              border border-silver/40
              text-silver
              font-heading uppercase
              tracking-[0.15em] sm:tracking-[0.2em]
              px-6 sm:px-8
              py-3.5 sm:py-4
              text-xs sm:text-sm
              hover:bg-silver/10
              hover:shadow-[0_0_15px_rgba(192,192,192,0.3)]
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            THE DROPS
          </a>
        </div>
      </div>
    </section>
  );
}
