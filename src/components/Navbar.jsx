import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-silver/10 px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo & Text */}
        <Link to="/" className="flex items-center gap-3 group">
          {!logoError && (
            <img
              src="/logo.jpg"
              onError={() => setLogoError(true)}
              className="h-12 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(177,18,38,0.3)] group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_#B11226] transition-all duration-300"
              alt=""
            />
          )}
          <span
            className="font-brand text-3xl tracking-[0.08em] font-normal group-hover:text-accent group-hover:drop-shadow-[0_0_8px_#B11226] transition-all duration-300 select-none"
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
        </Link>

        {/* Right: Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-heading text-sm tracking-[0.3em] text-silver hover:text-accent hover:drop-shadow-[0_0_5px_#B11226] transition-all duration-300"
          >
            HOME
          </Link>
          <a
            href="#collection"
            className="font-heading text-sm tracking-[0.3em] text-silver hover:text-accent hover:drop-shadow-[0_0_5px_#B11226] transition-all duration-300"
          >
            COLLECTION
          </a>
        </div>
      </div>
    </nav>
  );
}
