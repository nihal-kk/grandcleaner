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
    <div className="p-4 bg-white shadow-md flex flex-col gap-2 md:flex-row md:items-center md:flex-wrap md:gap-2">
      
      {/* 🔹 Categories */}
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap md:flex-wrap md:flex-initial">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-3 py-2 rounded border text-sm ${
              selectedCategory === cat.name
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 🔹 Filters */}
      <div className="flex gap-2 flex-nowrap md:flex-initial md:ml-auto">
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="p-2 border rounded text-sm flex-1 min-w-0"
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
          className="p-2 border rounded text-sm flex-1 min-w-0"
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
