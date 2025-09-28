import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';

const WishlistSidebar = ({ isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, addToCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Wishlist</h2>
        <button onClick={() => setIsWishlistOpen(false)} className="text-gray-600 hover:text-gray-900">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-100px)]">
        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart(item)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
                <button
                  onClick={() => toggleWishlist(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistSidebar;
