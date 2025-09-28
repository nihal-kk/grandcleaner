import React, { useMemo } from "react";
import { Grid3X3, List, Heart, ShoppingCart } from "lucide-react";

const ProductsList = ({
  products,
  selectedCategory,
  searchTerm,
  viewMode,
  setViewMode,
  addToCart,
  toggleWishlist,
  wishlist,
  selectedPrice, // 🔹 new prop
  sortOrder,     // 🔹 new prop
}) => {
  // Memoized filtered + sorted products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // 🔹 Price filter
    if (selectedPrice && selectedPrice !== "All") {
      filtered = filtered.filter((product) => {
        const price = product.price;
        if (selectedPrice.includes("+")) {
          const min = Number(selectedPrice.replace("+", ""));
          return price >= min;
        }
        const [min, max] = selectedPrice.split("-").map(Number);
        return price >= min && price <= max;
      });
    }

    // 🔹 Sorting
    if (sortOrder === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, selectedCategory, searchTerm, selectedPrice, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* View Mode Toggle */}
      <div className="flex justify-end mb-6 space-x-2">
        <button
          onClick={() => setViewMode("grid")}
          aria-label="Grid view"
          className={`p-2 rounded-lg transition-colors ${
            viewMode === "grid"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border"
          }`}
        >
          <Grid3X3 className="h-5 w-5" />
        </button>
        <button
          onClick={() => setViewMode("list")}
          aria-label="List view"
          className={`p-2 rounded-lg transition-colors ${
            viewMode === "list"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border"
          }`}
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {/* Products Grid/List */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg hover:scale-105 transition-all duration-300 relative flex flex-col"
              >
                {/* Image, Discount Badge & Wishlist */}
                <div className="relative">
                  <img
                    src={product.image || "/images/default-product.jpg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />

                  {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {product.discount}% OFF
                    </div>
                  )}

                  <button
                    onClick={() => toggleWishlist(product)}
                    aria-label={`${
                      isWishlisted ? "Remove" : "Add"
                    } ${product.name} to wishlist`}
                    aria-pressed={isWishlisted}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-md transition-colors cursor-pointer"
                  >
                    <Heart
                      className="h-5 w-5"
                      stroke={isWishlisted ? "none" : "currentColor"}
                      fill={isWishlisted ? "red" : "none"}
                      color={isWishlisted ? "red" : "gray"}
                    />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-4 flex flex-col flex-1">
                  <div>
                    <h3 className="font-semibold text-base text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{product.brand}</p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mt-2">
                      <span
                        className={`px-2 py-0.5 text-xs font-semibold text-white rounded flex items-center ${
                          product.rating >= 4
                            ? "bg-green-600"
                            : product.rating >= 3
                            ? "bg-green-500"
                            : "bg-green-500"
                        }`}
                      >
                        {product.rating}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3 h-3 ml-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-500 text-xs">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mt-2">
                      <p className="text-gray-900 font-bold text-lg">
                        ₹{product.price.toLocaleString()}
                      </p>
                      {product.originalPrice > product.price && (
                        <p className="text-gray-400 line-through text-sm">
                          ₹{product.originalPrice.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                    className="mt-4 w-full bg-orange-400 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-500 transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 mt-8 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
