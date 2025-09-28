import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import ProductsList from "./components/ProductsList";
import CartSidebar from "./components/CartSidebar";
import WishlistSidebar from "./components/WishlistSidebar";


// Import products
import productsData from "./data/products.json";

const App = () => {
  // 🔹 Search & Slider
  const [searchTerm, setSearchTerm] = useState("");
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔹 Categories, Price & Sort
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  // 🔹 Products
  const [viewMode, setViewMode] = useState("grid");
  const [products] = useState(productsData);

  // 🔹 Cart & Wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // 🔹 Slider Images
  const sliderImages = [
    { id: 1, title: "Biggest Sale of the Year", subtitle: "Up to 70% off", cta: "Shop Now", image: "/images/slider1.jpg" },
    { id: 2, title: "Latest Gadgets 2025", subtitle: "Smartphones, Laptops & more", cta: "Explore", image: "/images/slider2.jpg" },
    { id: 3, title: "Fashion Trends", subtitle: "New arrivals in clothing & accessories", cta: "Discover", image: "/images/slider3.jpg" },
  ];

  // 🔹 Categories
  const categories = [
    { name: "All" },
    { name: "detergent-liquid" },
    { name: "detergent-powder" },
    { name: "detergent-soap" },
    { name: "bath-soap" },
  ];

  // 🔹 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // 🔹 Hide slider when search is focused
  const handleSearchFocus = () => setIsSliderVisible(false);
  const handleSearchBlur = () => {
    if (!searchTerm) setIsSliderVisible(true);
  };

  // 🔹 Cart Functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // 🔹 Wishlist Functions
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchFocus={handleSearchFocus}
        handleSearchBlur={handleSearchBlur}
        wishlist={wishlist}
        cart={cart}
        setIsWishlistOpen={setIsWishlistOpen}
        setIsCartOpen={setIsCartOpen}
        getTotalItems={getTotalItems}
      />

      {/* Slider */}
      <Slider
        sliderImages={sliderImages}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        isSliderVisible={isSliderVisible}
      />

      {/* Categories + Price + Sort */}
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Products */}
      <ProductsList
        products={products}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlist={wishlist}
        selectedPrice={selectedPrice}
        sortOrder={sortOrder}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
        updateQuantity={updateQuantity}
      />

      {/* Wishlist Sidebar */}
      <WishlistSidebar
        isWishlistOpen={isWishlistOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        addToCart={addToCart}
      />
    </div>
  );
};

export default App;
