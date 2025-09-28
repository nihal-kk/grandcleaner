import React from "react";

const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white shadow-md">
      {/* 🔹 Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-3 py-2 rounded border ${
              selectedCategory === cat.name
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 🔹 Price Filter & Sort */}
      <div className="flex gap-2 flex-wrap">
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Prices</option>
          <option value="0-50">₹0 - ₹50</option>
          <option value="51-100">₹51 - ₹100</option>
          <option value="101-500">₹101 - ₹500</option>
          <option value="501+">₹501+</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="none">Sort By</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Categories;
