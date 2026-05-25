export default function HeroSection() {
  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Unsplash Streetwear Banner */}
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.7]"
        alt="Streetwear background"
      />

      {/* Dark Overlay with smooth transitions to black and background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-[1]" />

      {/* Blood Red Radial Glow Orb */}
      <div
        className="absolute z-[1] w-[400px] h-[400px] rounded-full filter blur-[80px] pointer-events-none opacity-85"
        style={{
          background: 'radial-gradient(circle, rgba(177, 18, 38, 0.4) 0%, transparent 70%)',
          left: 'calc(50% - 200px)',
          top: 'calc(50% - 200px)',
        }}
      />

      {/* Fog Overlay at the bottom of the section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-[2]" />

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        

        {/* Main Heading */}
        <h1
          className="font-heading leading-none tracking-[0.08em] text-offwhite mt-6 mb-2 select-none uppercase font-bold"
          style={{
            fontSize: 'clamp(56px, 11vw, 130px)',
            textShadow: '0 0 60px rgba(177, 18, 38, 0.55)',
          }}
        >
          WEAR THE
          <br />
          <span style={{ color: '#B11226' }}>DARKNESS</span>
        </h1>

        {/* Subtext Tagline */}
        <p className="font-body text-[10px] sm:text-xs tracking-[0.45em] text-silver uppercase mt-4 mb-8 max-w-lg font-medium opacity-85">
          real wear • real people • real culture
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <button
            onClick={scrollToCollection}
            className="w-full sm:w-auto bg-black border border-accent text-offwhite font-heading tracking-[0.2em] px-8 py-4 text-sm hover:bg-accent hover:shadow-[0_0_25px_#B11226] hover:scale-[1.03] transition-all duration-300 uppercase cursor-pointer"
          >
            VIEW COLLECTION
          </button>
          <a
            href="#collection"
            onClick={(e) => {
              e.preventDefault();
              scrollToCollection();
            }}
            className="w-full sm:w-auto text-center bg-transparent border border-silver/40 text-silver font-heading tracking-[0.2em] px-8 py-4 text-sm hover:bg-silver/10 hover:shadow-[0_0_15px_rgba(192,192,192,0.3)] hover:scale-[1.03] transition-all duration-300 uppercase"
          >
            THE DROPS
          </a>
        </div>
      </div>
    </section>
  );
}
