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
        console.error('Error fetching products:', err);

        setError('COULD NOT RETRIEVE DROPS. TRY AGAIN LATER.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white relative overflow-hidden">

      {/* Background Blur Effects */}
      <div
        className="
          absolute z-0 pointer-events-none rounded-full bg-accent opacity-20
          w-[280px] h-[280px]
          sm:w-[400px] sm:h-[400px]
          lg:w-[500px] lg:h-[500px]
          top-[35%] left-[-120px] sm:left-[-180px]
          blur-[100px] sm:blur-[140px]
        "
      />

      <div
        className="
          absolute z-0 pointer-events-none rounded-full bg-accent opacity-20
          w-[280px] h-[280px]
          sm:w-[400px] sm:h-[400px]
          lg:w-[500px] lg:h-[500px]
          top-[72%] right-[-120px] sm:right-[-180px]
          blur-[100px] sm:blur-[140px]
        "
      />

      {/* Sections */}
      <Navbar />
      <HeroSection />
      <MarqueeBanner />

      {/* Product Collection */}
      <main
        id="collection"
        className="
          flex-grow
          relative z-10
          scroll-mt-24

          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">

            <h2
              className="
                font-heading
                uppercase
                leading-none
                text-offwhite

                tracking-[0.12em]
                sm:tracking-[0.18em]
                md:tracking-[0.2em]
              "
              style={{
                fontSize: 'clamp(38px, 8vw, 80px)',
              }}
            >
              THE DROP
            </h2>

            <div className="w-10 sm:w-12 h-0.5 bg-accent mx-auto mt-4 shadow-[0_0_10px_#B11226]" />
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 sm:py-24">

              <div
                className="
                  w-10 h-10 sm:w-12 sm:h-12
                  border-2
                  border-silver/10
                  border-t-accent
                  rounded-full
                  animate-spin
                  shadow-[0_0_15px_rgba(177,18,38,0.2)]
                  mb-4
                "
              />

              <span
                className="
                  font-heading
                  text-[10px]
                  sm:text-sm

                  tracking-[0.2em]
                  sm:tracking-[0.3em]

                  text-silver/60
                  text-center
                "
              >
                LOADING THE VAULT...
              </span>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20 px-4 sm:px-6">

              <p
                className="
                  font-heading
                  text-base
                  sm:text-lg
                  md:text-xl

                  tracking-[0.15em]
                  sm:tracking-[0.25em]

                  text-accent
                  mb-6
                  leading-relaxed
                "
              >
                {error}
              </p>

              <button
                onClick={() => window.location.reload()}
                className="
                  bg-black
                  border border-accent
                  text-offwhite
                  font-heading
                  uppercase

                  tracking-[0.15em]
                  sm:tracking-[0.25em]

                  px-6 sm:px-8
                  py-3

                  text-[10px]
                  sm:text-xs

                  hover:bg-accent
                  hover:shadow-[0_0_20px_#B11226]

                  transition-all duration-300
                "
              >
                RELOAD DATA
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && products.length === 0 && (
            <div
              className="
                text-center
                py-16 sm:py-20
                px-4 sm:px-6

                border border-silver/10
                max-w-xl
                mx-auto

                bg-surface/50
                backdrop-blur-sm
              "
            >
              <span
                className="
                  font-heading
                  uppercase
                  block

                  text-lg
                  sm:text-2xl

                  tracking-[0.15em]
                  sm:tracking-[0.3em]

                  text-silver/80
                  mb-3
                  leading-relaxed
                "
              >
                THE VAULT IS CURRENTLY EMPTY
              </span>

              <p
                className="
                  font-body
                  text-[10px]
                  sm:text-xs

                  text-silver/40
                  tracking-[0.12em]
                  sm:tracking-wider

                  mb-6
                  leading-relaxed
                "
              >
                THE NEXT LIMITED STREETWEAR DROP IS CURRENTLY IN PREPARATION.
              </p>

              <div
                className="
                  font-heading
                  uppercase

                  text-[9px]
                  sm:text-xs

                  tracking-[0.2em]
                  sm:tracking-[0.4em]

                  text-accent
                  border border-accent/20
                  px-4 py-2
                  bg-accent/5
                  inline-block
                "
              >
                SS25 INCOMING SOON
              </div>
            </div>
          )}

          {/* Product Grid */}
          {!loading && !error && products.length > 0 && (
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3

                gap-5
                sm:gap-6
                lg:gap-8
              "
            >
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
