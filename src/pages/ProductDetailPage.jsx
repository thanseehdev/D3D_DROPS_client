import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../api/axios';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setFetchError("THE SELECTED PIECE IS BEYOND REACH. IT MAY HAVE BEEN PURGED.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleEnquire = () => {
    if (!selectedSize) {
      setValidationError(true);
      return;
    }
    setValidationError(false);

    const adminWhatsApp = import.meta.env.VITE_ADMIN_WHATSAPP || '919074827805';
    const msg = `Hi! I'm interested in ordering from D3D DROPS.

*Product:* ${product.name}
*Price:* ₹${product.price}
*Size:* ${selectedSize}
*Product ID:* ${product._id}

*Product Image:* ${product.imageUrl}

Please confirm availability.`;
    
    window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-12 px-6 z-10 relative">
        {/* Soft blood-red background blur element */}
        <div className="absolute top-[20%] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none filter blur-[150px] opacity-15 bg-accent z-0" />

        <div className="max-w-6xl mx-auto w-full z-10">
          
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/"
              className="font-heading text-xs tracking-[0.3em] text-silver/60 hover:text-accent hover:drop-shadow-[0_0_5px_#B11226] transition-all flex items-center gap-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 transform group-hover:translate-x-[-3px] transition-transform duration-200"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              BACK TO COLLECTION
            </Link>
          </div>

          {/* Loading details */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="w-12 h-12 border-2 border-silver/10 border-t-accent rounded-full animate-spin shadow-[0_0_15px_rgba(177,18,38,0.2)] mb-4" />
              <span className="font-heading text-sm tracking-[0.3em] text-silver/60">
                DECRYPTING DESIGN SCHEMATICS...
              </span>
            </div>
          )}

          {/* Error loading details */}
          {fetchError && (
            <div className="text-center py-20 px-6 max-w-xl mx-auto border border-silver/10 bg-surface/50 backdrop-blur-sm">
              <p className="font-heading text-xl tracking-[0.2em] text-accent mb-6">
                {fetchError}
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-black border border-accent text-offwhite font-heading tracking-widest px-8 py-3 hover:bg-accent hover:shadow-[0_0_20px_#B11226] transition-all duration-300 uppercase"
              >
                RETURN HOME
              </button>
            </div>
          )}

          {/* Product details grid */}
          {!loading && !fetchError && product && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* LEFT COLUMN — Product Image */}
              <div className="relative group before:absolute before:inset-0 before:bg-[radial-gradient(ellipse,rgba(177,18,38,0.2),transparent_70%)] before:pointer-events-none">
                <div className="w-full aspect-square overflow-hidden bg-surface border border-silver/15 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative z-10 transition-all duration-500 group-hover:border-accent/40">
                  <img
                    src={product.imageUrl}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    alt={product.name}
                  />
                </div>
              </div>

              {/* RIGHT COLUMN — Product Info & Order actions */}
              <div className="flex flex-col z-10 relative bg-surface/30 p-6 md:p-8 border border-silver/5 backdrop-blur-sm">
                
                {/* Limited label */}
                <span className="font-heading text-xs tracking-[0.4em] text-accent select-none font-bold">
                  ◆ LIMITED DROP
                </span>

                {/* Product Name */}
                <h1 className="font-heading text-5xl md:text-6xl tracking-wider text-offwhite leading-none mt-2 uppercase select-text">
                  {product.name}
                </h1>

                {/* Price */}
                <p className="text-accent font-heading text-3xl md:text-4xl tracking-wide mt-4 select-text">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>

                <div className="border-t border-silver/10 my-6" />

                {/* Description */}
                <div>
                  <h3 className="font-heading text-xs tracking-[0.35em] text-silver mb-2 select-none">
                    DESCRIPTION
                  </h3>
                  <p className="font-body text-silver/70 text-sm leading-relaxed select-text font-normal whitespace-pre-line">
                    {product.description}
                  </p>
                </div>

                <div className="border-t border-silver/10 my-6" />

                {/* Sizes Selector */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-heading text-xs tracking-[0.35em] text-silver select-none">
                      SELECT SIZE
                    </label>
                    {validationError && (
                      <span className="font-heading text-[10px] tracking-[0.2em] text-accent animate-pulse font-semibold">
                        * SELECT A SIZE TO CONTINUE
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {product.sizes && product.sizes.map((size) => {
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => {
                            setSelectedSize(size);
                            setValidationError(false);
                          }}
                          className={`min-w-[50px] text-center px-4 py-2.5 font-heading text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'border border-accent bg-accent/15 text-accent shadow-[0_0_15px_rgba(177,18,38,0.45)] scale-105'
                              : 'border border-silver/20 text-silver bg-transparent hover:border-silver/60 hover:text-offwhite'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Enquire Button */}
                <button
                  onClick={handleEnquire}
                  className="w-full mt-8 bg-black border border-accent text-offwhite font-heading tracking-widest py-4 hover:bg-accent hover:shadow-[0_0_30px_#B11226] hover:scale-[1.02] flex items-center justify-center gap-3 transition-all duration-300 text-lg cursor-pointer"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.907h.004c4.368 0 7.926-3.558 7.93-7.93a7.897 7.897 0 0 0-2.333-5.546zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.1-.1.195-.312.31-.077.04-.155.08-.24.117-.255.11-.47.165-.749.165-.36 0-.765-.186-1.066-.363-.465-.274-.93-.69-1.258-1.039a3.34 3.34 0 0 1-.618-.94c-.039-.082-.061-.129-.1-.215.11-.132.227-.273.342-.4.07-.08.118-.15.148-.22.06-.13.01-.25-.01-.31-.03-.06-.312-.75-.429-1.03-.105-.255-.23-.21-.312-.21-.08 0-.175-.01-.265-.01-.1 0-.255.04-.39.19-.136.149-.524.51-.524 1.25s.539 1.45.614 1.55c.074.1 1.062 1.622 2.571 2.27.359.155.64.248.86.318.36.115.689.099.948.06.29-.043.896-.367 1.02-.722.126-.356.126-.66.088-.723-.038-.063-.14-.1-.343-.2z" />
                  </svg>
                  ENQUIRE ON WHATSAPP
                </button>

                {/* Subtext info */}
                <p className="text-center text-silver/40 text-[10px] tracking-[0.25em] mt-4 font-heading uppercase">
                  NO ACCOUNT NEEDED • MESSAGE US DIRECTLY
                </p>

              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
