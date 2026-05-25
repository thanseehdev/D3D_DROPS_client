import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../api/axios';

const AVAILABLE_SIZES_LIST = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function AdminPage() {
  // Form states
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('T-Shirt');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  
  // UI states
  const [products, setProducts] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loadingList, setLoadingList] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '', type: '' }); // success or error

  const fetchProducts = async () => {
    try {
      setLoadingList(true);
      const response = await api.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching list:", err);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 4000);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      showToast("PLEASE SELECT A PRODUCT IMAGE", "error");
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('sizes', JSON.stringify(selectedSizes));
      formData.append('image', imageFile);

      await api.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      showToast("PRODUCT UPLOADED SUCCESSFULLY", "success");
      
      // Clear form
      setName('');
      setPrice('');
      setDescription('');
      setCategory('T-Shirt');
      setSelectedSizes([]);
      setImageFile(null);
      
      // Reset the file input element in DOM
      const fileInput = document.getElementById('product-image-upload');
      if (fileInput) fileInput.value = '';

      // Reload products list
      fetchProducts();
    } catch (err) {
      console.error("Upload error:", err);
      showToast("UPLOAD FAILED — TRY AGAIN", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("CONFIRM THE REMOVAL OF THIS DROP?")) return;

    try {
      await api.delete(`/api/products/${productId}`);
      showToast("PRODUCT DELETED SUCCESSFULLY", "success");
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
      showToast("PURGE FAILED — TRY AGAIN", "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white relative">
      <Navbar />

      <main className="flex-grow py-16 px-6 z-10 relative">
        {/* Soft blood-red background blur element */}
        <div className="absolute top-[10%] left-[-150px] w-[350px] h-[350px] rounded-full pointer-events-none filter blur-[120px] opacity-10 bg-accent z-0" />
        <div className="absolute top-[60%] right-[-150px] w-[350px] h-[350px] rounded-full pointer-events-none filter blur-[120px] opacity-10 bg-accent z-0" />

        <div className="max-w-2xl mx-auto z-10 relative">
          
          {/* Header */}
          <div className="text-center mb-12 select-none">
            <h1 className="font-heading text-5xl tracking-widest text-accent text-center mb-2 uppercase">
              ADMIN PANEL
            </h1>
            <p className="font-heading text-xs tracking-[0.4em] text-silver/40 text-center uppercase">
              D3D DROPS — PRODUCT MANAGEMENT
            </p>
            <div className="w-12 h-0.5 bg-silver/15 mx-auto mt-4" />
          </div>

          {/* Toast Notification Banner */}
          {toast.show && (
            <div
              className={`fixed top-24 right-6 z-50 px-6 py-4 border font-heading tracking-widest text-sm flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.6)] ${
                toast.type === 'success'
                  ? 'bg-black border-green-600 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                  : 'bg-black border-accent text-accent shadow-[0_0_15px_rgba(177,18,38,0.2)]'
              }`}
            >
              {toast.type === 'success' ? (
                // Checkmark SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                // Warning SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              )}
              {toast.message}
            </div>
          )}

          {/* Upload Form */}
          <div className="bg-surface/50 border border-silver/10 p-6 md:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h2 className="font-heading text-xl tracking-[0.2em] text-offwhite mb-6 border-b border-silver/5 pb-2 uppercase">
              NEW RELEASE UPLOADER
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Product Name */}
              <div>
                <label className="font-heading text-xs tracking-[0.35em] text-silver block mb-2 select-none">
                  PRODUCT NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. HELLFIRE ZIP HOODIE"
                  className="w-full bg-surface border border-silver/20 text-offwhite px-4 py-3 font-body focus:outline-none focus:border-accent focus:shadow-[0_0_12px_rgba(177,18,38,0.3)] transition-all placeholder-silver/20"
                />
              </div>

              {/* Price & Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price */}
                <div>
                  <label className="font-heading text-xs tracking-[0.35em] text-silver block mb-2 select-none">
                    PRICE (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 4999"
                    className="w-full bg-surface border border-silver/20 text-offwhite px-4 py-3 font-body focus:outline-none focus:border-accent focus:shadow-[0_0_12px_rgba(177,18,38,0.3)] transition-all placeholder-silver/20"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="font-heading text-xs tracking-[0.35em] text-silver block mb-2 select-none">
                    CATEGORY
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Hoodie, T-Shirt, Pants"
                    className="w-full bg-surface border border-silver/20 text-offwhite px-4 py-3 font-body focus:outline-none focus:border-accent focus:shadow-[0_0_12px_rgba(177,18,38,0.3)] transition-all placeholder-silver/20"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="font-heading text-xs tracking-[0.35em] text-silver block mb-2 select-none">
                  DESCRIPTION *
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter drop specifications, heavyweight cotton density, fit details, wash instructions..."
                  className="w-full bg-surface border border-silver/20 text-offwhite px-4 py-3 font-body focus:outline-none focus:border-accent focus:shadow-[0_0_12px_rgba(177,18,38,0.3)] transition-all placeholder-silver/20 resize-none"
                />
              </div>

              {/* Sizes checkboxes as pill toggles */}
              <div>
                <label className="font-heading text-xs tracking-[0.35em] text-silver block mb-3 select-none">
                  AVAILABLE SIZES
                </label>
                <div className="flex gap-3 flex-wrap">
                  {AVAILABLE_SIZES_LIST.map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button
                        type="button"
                        key={size}
                        onClick={() => handleSizeToggle(size)}
                        className={`min-w-[50px] py-2.5 font-heading text-sm tracking-widest border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-accent/20 border-accent text-accent shadow-[0_0_10px_rgba(177,18,38,0.2)] scale-105'
                            : 'border-silver/20 text-silver hover:border-silver/40 hover:text-offwhite'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Product Image Upload */}
              <div>
                <label className="font-heading text-xs tracking-[0.35em] text-silver block mb-2 select-none">
                  PRODUCT IMAGE *
                </label>
                <div className="relative border border-dashed border-silver/20 hover:border-accent/40 bg-surface/30 p-6 text-center cursor-pointer transition-colors group">
                  <input
                    type="file"
                    required
                    id="product-image-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-silver/40 group-hover:text-accent transition-colors"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <span className="font-heading text-xs tracking-widest text-silver/60 group-hover:text-offwhite transition-colors">
                      {imageFile ? imageFile.name.toUpperCase() : "DRAG & DROP OR BROWSE IMAGE"}
                    </span>
                    <span className="text-[10px] text-silver/30 font-body">
                      Accepts PNG, JPG up to 10MB
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-black border border-accent text-offwhite font-heading tracking-widest py-4 hover:bg-accent hover:shadow-[0_0_25px_#B11226] hover:scale-[1.03] transition-all duration-300 uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:shadow-none"
              >
                {uploading ? "UPLOADING TO VAULT..." : "UPLOAD PRODUCT"}
              </button>

            </form>
          </div>

          {/* Catalog Listing Table */}
          <div className="mt-16 bg-surface/50 border border-silver/10 p-6 md:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] select-none">
            <h2 className="font-heading text-xl tracking-[0.2em] text-offwhite mb-6 border-b border-silver/5 pb-2 uppercase">
              RELEASE CATALOG
            </h2>

            {loadingList ? (
              <div className="flex justify-center items-center py-10">
                <div className="w-8 h-8 border-2 border-silver/10 border-t-accent rounded-full animate-spin" />
              </div>
            ) : products.length === 0 ? (
              <p className="text-center text-silver/30 font-body text-xs tracking-wider py-8">
                NO ACTIVE DROPS DETECTED IN THE ARCHIVES.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-silver/10 font-heading text-[11px] tracking-[0.25em] text-silver/60 uppercase">
                      <th className="pb-3 pr-2">IMG</th>
                      <th className="pb-3 pr-2">NAME</th>
                      <th className="pb-3 pr-2">PRICE</th>
                      <th className="pb-3 pr-2">SIZES</th>
                      <th className="pb-3 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-silver/5 font-body text-xs text-silver/80">
                    {products.map((prod) => (
                      <tr key={prod._id} className="group hover:bg-white/[0.02]">
                        <td className="py-4 pr-2">
                          <img
                            src={prod.imageUrl}
                            className="w-12 h-12 object-cover border border-silver/15 group-hover:border-accent/40 transition-colors"
                            alt=""
                          />
                        </td>
                        <td className="py-4 pr-2 font-heading tracking-wider text-offwhite uppercase">
                          {prod.name}
                        </td>
                        <td className="py-4 pr-2 font-semibold">
                          ₹{prod.price.toLocaleString('en-IN')}
                        </td>
                        <td className="py-4 pr-2">
                          <div className="flex gap-1 flex-wrap">
                            {prod.sizes && prod.sizes.map((s) => (
                              <span
                                key={s}
                                className="border border-silver/20 text-[9px] px-1 py-0.2 text-silver uppercase"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => handleDelete(prod._id)}
                            className="border border-accent/30 text-accent hover:bg-accent hover:text-white text-[10px] font-heading tracking-wider px-3 py-1.5 transition-all cursor-pointer uppercase"
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
