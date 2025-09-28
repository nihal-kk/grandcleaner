import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, X } from 'lucide-react';

const Header = ({
  searchTerm,
  setSearchTerm,
  handleSearchFocus,
  handleSearchBlur,
  wishlist,
  cart,
  setIsWishlistOpen,
  setIsCartOpen,
  getTotalItems
}) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-orange-500 flex-shrink-0">
            Grand Cleaner
          </h1>

          {/* Desktop Search */}
          <div className="hidden sm:flex flex-1 mx-8">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-base"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="sm:hidden flex-1 flex justify-end">
            {!isMobileSearchOpen && (
              <button
                onClick={() => setIsMobileSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Cart & Wishlist */}
          <div className="flex items-center space-x-4 sm:space-x-6 ml-2">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-gray-600 hover:text-blue-600"
            >
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-blue-600"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {isMobileSearchOpen && (
          <div className="sm:hidden mt-2 relative pb-10">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-base"
            />
            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-red-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
