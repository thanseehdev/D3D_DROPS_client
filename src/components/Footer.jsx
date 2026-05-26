import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-background border-t border-silver/10 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 mt-auto select-none overflow-hidden">
      
      {/* Top Section: Trust Badges Grid */}
      <div className="max-w-7xl mx-auto border-b border-silver/10 pb-10 sm:pb-12 mb-10 sm:mb-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Shipping Badge */}
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 p-2.5 sm:p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.317-5.077a1.97 1.97 0 0 0-.312-.993l-2.42-3.646A1.97 1.97 0 0 0 14.59 3H4.5A2.25 2.25 0 0 0 2.25 5.25v10.5m14.25 3h-1.5"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h4 className="font-heading text-sm sm:text-base tracking-[0.12em] sm:tracking-[0.15em] text-offwhite uppercase leading-tight">
                All India Shipping
              </h4>

              <p className="font-body text-[10px] sm:text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                We deliver across India, covering 24,000+ pin codes.
              </p>
            </div>
          </div>

          {/* Payment Badge */}
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 p-2.5 sm:p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h4 className="font-heading text-sm sm:text-base tracking-[0.12em] sm:tracking-[0.15em] text-offwhite uppercase leading-tight">
                Secure Payment
              </h4>

              <p className="font-body text-[10px] sm:text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                Encrypted transactions with multiple payment methods.
              </p>
            </div>
          </div>

          {/* Returns Badge */}
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 p-2.5 sm:p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.656 48.656 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M7.5 12l-3 3m3-3 3 3"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h4 className="font-heading text-sm sm:text-base tracking-[0.12em] sm:tracking-[0.15em] text-offwhite uppercase leading-tight">
                Easy Returns
              </h4>

              <p className="font-body text-[10px] sm:text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                Return or exchange your order within 5 days.
              </p>
            </div>
          </div>

          {/* Support Badge */}
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 p-2.5 sm:p-3 bg-surface border border-silver/15 text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(177,18,38,0.3)] group-hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h4 className="font-heading text-sm sm:text-base tracking-[0.12em] sm:tracking-[0.15em] text-offwhite uppercase leading-tight">
                Dedicated Support
              </h4>

              <p className="font-body text-[10px] sm:text-[11px] text-silver/50 tracking-wide mt-1 leading-relaxed font-normal">
                Our team is available during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">

        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="flex items-center gap-3">
            {!logoError && (
              <img
                src="/O_LOGO.png"
                onError={() => setLogoError(true)}
                className="h-7 sm:h-8 w-auto object-contain filter brightness-[0.9]"
                alt=""
              />
            )}

            <span
              className="font-brand text-xl sm:text-2xl tracking-[0.06em] sm:tracking-[0.08em] font-normal"
              style={
                logoError
                  ? {
                      background:
                        'linear-gradient(135deg, #C0C0C0, #B11226, #C0C0C0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }
                  : {
                      background:
                        'linear-gradient(135deg, #C0C0C0, #EAEAEA, #C0C0C0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }
              }
            >
              D3D DROPS
            </span>
          </div>

          <p className="font-body text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] text-silver/40 uppercase mt-2 font-normal">
            real wear • real people • real culture
          </p>
        </div>

        {/* Center Branding */}
        <div className="flex items-center justify-center w-full lg:w-auto">
          
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 border border-white/10 bg-black/40 backdrop-blur-sm max-w-full">
            
            {/* Barcode */}
            <div className="flex items-end gap-[2px] h-5 sm:h-6 shrink-0">
              <span className="w-[2px] h-6 bg-white/40" />
              <span className="w-[1px] h-4 bg-white/30" />
              <span className="w-[2px] h-5 bg-white/50" />
              <span className="w-[1px] h-3 bg-white/30" />
              <span className="w-[2px] h-6 bg-white/40" />
            </div>

            {/* Text */}
            <span className="font-heading text-[9px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.55em] uppercase text-white/70 whitespace-nowrap">
              STREETWEARS
            </span>
          </div>
        </div>

        {/* Right Column */}
      {/* Right Column */}
<div className="flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
  
  {/* Instagram */}
  <a
    href="https://www.instagram.com/d3d.drops?igsh=cXB6bnFtMGYwcTJu"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 border border-silver/10 px-4 py-2 bg-surface hover:border-accent/60 hover:shadow-[0_0_15px_rgba(177,18,38,0.25)] transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-silver/70 group-hover:text-accent transition-colors duration-300"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 1.5h8.5a4.25 4.25 0 0 1 4.25 4.25v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.938 1.125a.938.938 0 1 0 0 1.876.938.938 0 0 0 0-1.876ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5Zm0 1.5A4 4 0 1 1 8 12a4 4 0 0 1 4-4Z" />
    </svg>

    <span className="font-heading text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-silver/60 group-hover:text-white transition-colors duration-300">
      Instagram
    </span>
  </a>

  <p className="font-heading text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] text-silver/40 uppercase leading-relaxed">
    &copy; {new Date().getFullYear()} D3D DROPS. ALL RIGHTS RESERVED.
  </p>
</div>
      </div>
    </footer>
  );
}
