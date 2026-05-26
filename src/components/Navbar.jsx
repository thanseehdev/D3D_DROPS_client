import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/70
        backdrop-blur-md
        border-b border-silver/10
        px-4 sm:px-6 lg:px-8
        py-3 sm:py-4
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Left: Brand */}
        <Link
          to="/home"
          className="flex items-center gap-2 sm:gap-3 group min-w-0"
        >
          {!logoError && (
            <img
              src="/O_LOGO.png"
              onError={() => setLogoError(true)}
              className="
                h-9 sm:h-10 md:h-11 lg:h-12
                w-auto object-contain shrink-0
                filter drop-shadow-[0_0_8px_rgba(177,18,38,0.3)]
                group-hover:scale-105
                group-hover:drop-shadow-[0_0_12px_#B11226]
                transition-all duration-300
              "
              alt=""
            />
          )}

          <span
            className="
              font-brand
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-4xl
              tracking-[0.04em]
              sm:tracking-[0.06em]
              md:tracking-[0.08em]
              font-normal
              whitespace-nowrap
              group-hover:text-accent
              group-hover:drop-shadow-[0_0_8px_#B11226]
              transition-all duration-300
              select-none
            "
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
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6 lg:gap-8 shrink-0">

          <Link
            to="/home"
            className="
              font-heading
              uppercase
              text-[9px]
              sm:text-[10px]
              md:text-xs
              lg:text-sm
              tracking-[0.12em]
              sm:tracking-[0.18em]
              md:tracking-[0.25em]
              lg:tracking-[0.3em]
              text-silver
              hover:text-accent
              hover:drop-shadow-[0_0_5px_#B11226]
              transition-all duration-300
              whitespace-nowrap
            "
          >
            HOME
          </Link>

          <a
            href="#collection"
            className="
              font-heading
              uppercase
              text-[9px]
              sm:text-[10px]
              md:text-xs
              lg:text-sm
              tracking-[0.12em]
              sm:tracking-[0.18em]
              md:tracking-[0.25em]
              lg:tracking-[0.3em]
              text-silver
              hover:text-accent
              hover:drop-shadow-[0_0_5px_#B11226]
              transition-all duration-300
              whitespace-nowrap
            "
          >
            COLLECTION
          </a>
        </div>
      </div>
    </nav>
  );
}
