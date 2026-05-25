import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-background border-t border-silver/10 px-8 py-12 mt-auto select-none">
      {/* Top Section: Trust Badges Grid */}
      <div className="max-w-6xl mx-auto border-b border-silver/10 pb-12 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Shipping Badge */}
          <div className="flex gap-4 items-start group">
            <div className="p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.317-5.077a1.97 1.97 0 0 0-.312-.993l-2.42-3.646A1.97 1.97 0 0 0 14.59 3H4.5A2.25 2.25 0 0 0 2.25 5.25v10.5m14.25 3h-1.5" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base tracking-[0.15em] text-offwhite uppercase">All India Shipping</h4>
              <p className="font-body text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                We deliver across India, covering 24,000+ pin codes.
              </p>
            </div>
          </div>

          {/* Payment Badge */}
          <div className="flex gap-4 items-start group">
            <div className="p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base tracking-[0.15em] text-offwhite uppercase">Secure Payment</h4>
              <p className="font-body text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                Encrypted transactions with multiple payment methods.
              </p>
            </div>
          </div>

          {/* Returns Badge */}
          <div className="flex gap-4 items-start group">
            <div className="p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.656 48.656 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M7.5 12l-3 3m3-3 3 3" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base tracking-[0.15em] text-offwhite uppercase">Easy Returns</h4>
              <p className="font-body text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                Return or exchange your order within 5 days.
              </p>
            </div>
          </div>

          {/* Support Badge */}
          <div className="flex gap-4 items-start group">
            <div className="p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base tracking-[0.15em] text-offwhite uppercase">Dedicated Support</h4>
              <p className="font-body text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                Our team is available during business hours.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: Logo, Navigation & Copyright */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column: Logo / Brand Text */}
        {/* Left Column: Logo & Brand Name with Tagline */}
        <div className="flex flex-col select-none items-center md:items-start">
          <div className="flex items-center gap-3">
            {!logoError && (
              <img
                src="/logo.jpg"
                onError={() => setLogoError(true)}
                className="h-8 w-auto object-contain filter brightness-[0.9]"
                alt=""
              />
            )}
            <span
              className="font-brand text-2xl tracking-[0.08em] font-normal"
              style={logoError ? {
                background: 'linear-gradient(135deg, #C0C0C0, #B11226, #C0C0C0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              } : {
                background: 'linear-gradient(135deg, #C0C0C0, #EAEAEA, #C0C0C0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              D3D DROPS
            </span>
          </div>
          <p className="font-body text-[9px] tracking-[0.2em] text-silver/40 uppercase mt-2 select-text font-normal">
            real wear • real people • real culture
          </p>
        </div>

       {/* Center Overlay Branding */}
<div className="flex items-center justify-center">
  <div className="flex items-center gap-4 px-6 py-3 border border-white/10 bg-black/40">

    {/* Barcode */}
    <div className="flex items-end gap-[2px] h-6">
      <span className="w-[2px] h-6 bg-white/40" />
      <span className="w-[1px] h-4 bg-white/30" />
      <span className="w-[2px] h-5 bg-white/50" />
      <span className="w-[1px] h-3 bg-white/30" />
      <span className="w-[2px] h-6 bg-white/40" />
    </div>

    {/* Text */}
    <span className="font-heading text-[11px] tracking-[0.55em] uppercase text-white/70">
      STREETWEAR
    </span>

  </div>
</div>

        {/* Right Column: Copyright */}
        <div className="text-center md:text-right">
          <p className="font-heading text-[10px] tracking-[0.25em] text-silver/40 uppercase">
            &copy; {new Date().getFullYear()} D3D DROPS. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
