import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MarqueeBanner from '../components/MarqueeBanner';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import api from '../api/axios';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("COULD NOT RETRIEVE DROPS. TRY AGAIN LATER.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white relative">
      {/* Soft blood-red background blur element */}
      <div className="absolute top-[40%] left-[-200px] w-[500px] h-[500px] rounded-full pointer-events-none filter blur-[150px] opacity-20 bg-accent z-0" />
      <div className="absolute top-[70%] right-[-200px] w-[500px] h-[500px] rounded-full pointer-events-none filter blur-[150px] opacity-20 bg-accent z-0" />

      <Navbar />
      <HeroSection />
      <MarqueeBanner />

      {/* Products Catalog Section */}
      <main id="collection" className="flex-grow py-24 z-10 relative scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-[clamp(48px,7vw,80px)] tracking-[0.2em] text-center text-offwhite leading-none uppercase">
              THE DROP
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4 shadow-[0_0_10px_#B11226]" />
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-2 border-silver/10 border-t-accent rounded-full animate-spin shadow-[0_0_15px_rgba(177,18,38,0.2)] mb-4" />
              <span className="font-heading text-sm tracking-[0.3em] text-silver/60">
                LOADING THE VAULT...
              </span>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center py-20 px-6">
              <p className="font-heading text-xl tracking-[0.25em] text-accent mb-4">
                {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-black border border-accent text-offwhite font-heading tracking-widest px-8 py-3 hover:bg-accent hover:shadow-[0_0_20px_#B11226] transition-all duration-300 uppercase"
              >
                RELOAD DATA
              </button>
            </div>
          )}

          {/* Empty catalog state */}
          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20 px-6 border border-silver/10 max-w-xl mx-auto bg-surface/50 backdrop-blur-sm">
              <span className="font-heading text-2xl tracking-[0.3em] text-silver/80 block mb-2">
                THE VAULT IS CURRENTLY EMPTY
              </span>
              <p className="font-body text-xs text-silver/40 tracking-wider mb-6">
                THE NEXT LIMITED streetwear drop IS CURRENTLY IN PREPARATION.
              </p>
              <div className="font-heading text-xs tracking-[0.4em] text-accent border border-accent/20 px-4 py-2 bg-accent/5 inline-block">
                SS25 INCOMING SOON
              </div>
            </div>
          )}

          {/* Catalog grid */}
          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
