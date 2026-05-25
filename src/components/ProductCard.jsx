import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="bg-surface border border-silver/15 overflow-hidden group cursor-pointer hover:border-accent/60 hover:shadow-[0_0_25px_rgba(177,18,38,0.2)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Product Image */}
      <div className="overflow-hidden aspect-square w-full bg-black/40 relative">
        <img
          src={product.imageUrl}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={product.name}
          loading="lazy"
        />
        {/* Subtle red indicator overlay */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Body details */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          {/* Name & Category Tag */}
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-heading text-xl tracking-widest text-offwhite uppercase truncate max-w-[80%]">
              {product.name}
            </h3>
            <span className="font-heading text-[10px] tracking-[0.2em] text-silver/40 uppercase mt-1">
              {product.category || 'T-Shirt'}
            </span>
          </div>
          
          {/* Price */}
          <p className="text-accent font-semibold text-lg mt-1 font-body">
            ₹{product.price.toLocaleString('en-IN')}
          </p>

          {/* Sizes */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {product.sizes && product.sizes.map((size) => (
              <span
                key={size}
                className="border border-silver/30 text-silver text-[10px] px-2 py-0.5 tracking-wider uppercase font-body font-medium"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={handleDetailsClick}
          className="w-full mt-5 bg-transparent border border-silver/40 text-silver font-heading tracking-[0.2em] text-xs py-3 hover:bg-silver/10 hover:shadow-[0_0_15px_rgba(192,192,192,0.3)] hover:scale-[1.03] transition-all duration-300 uppercase cursor-pointer"
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
