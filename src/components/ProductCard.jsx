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
      className="
        bg-surface
        border border-silver/15
        overflow-hidden
        group
        cursor-pointer

        hover:border-accent/60
        hover:shadow-[0_0_25px_rgba(177,18,38,0.2)]
        hover:scale-[1.015]

        transition-all duration-300

        flex flex-col justify-between
        h-full
      "
    >
      {/* Product Image */}
      <div className="overflow-hidden aspect-square w-full bg-black/40 relative">
        
        <img
          src={product.imageUrl}
          className="
            w-full h-full
            object-cover
            group-hover:scale-105
            transition-transform duration-500
          "
          alt={product.name}
          loading="lazy"
        />

        {/* Subtle Red Overlay */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Optional Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Product Content */}
      <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">

        <div>

          {/* Name + Category */}
          <div className="flex justify-between items-start gap-3">

            <h3
              className="
                font-heading
                text-base
                sm:text-lg
                md:text-xl

                tracking-[0.12em]
                sm:tracking-[0.18em]

                text-offwhite
                uppercase

                leading-tight
                break-words
                line-clamp-2

                flex-1
              "
            >
              {product.name}
            </h3>

            <span
              className="
                shrink-0
                font-heading

                text-[8px]
                sm:text-[9px]
                md:text-[10px]

                tracking-[0.12em]
                sm:tracking-[0.18em]
                md:tracking-[0.2em]

                text-silver/40
                uppercase
                mt-1
                whitespace-nowrap
              "
            >
              {product.category || 'T-Shirt'}
            </span>
          </div>

          {/* Price */}
          <p
            className="
              text-accent
              font-semibold
              font-body

              text-base
              sm:text-lg

              mt-2
            "
          >
            ₹{product.price.toLocaleString('en-IN')}
          </p>

          {/* Sizes */}
          {product.sizes?.length > 0 && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="
                    border border-silver/30
                    text-silver

                    text-[9px]
                    sm:text-[10px]

                    px-2 py-1

                    tracking-[0.12em]
                    sm:tracking-wider

                    uppercase
                    font-body
                    font-medium

                    bg-black/20
                  "
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleDetailsClick}
          className="
            w-full
            mt-5

            bg-transparent
            border border-silver/40

            text-silver
            font-heading
            uppercase

            tracking-[0.15em]
            sm:tracking-[0.2em]

            text-[10px]
            sm:text-xs

            py-3

            hover:bg-silver/10
            hover:shadow-[0_0_15px_rgba(192,192,192,0.3)]
            hover:scale-[1.02]

            transition-all duration-300
            cursor-pointer
          "
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
