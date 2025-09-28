import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold text-orange-500">Grand Cleaner</h1>
            <p className="text-gray-600 max-w-sm">
              Your one-stop shop for all cleaning supplies, gadgets, and eco-friendly products. Keep your home spotless with ease!
            </p>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
<div className="flex flex-row gap-30 flex-wrap">
  <div className="flex flex-col space-y-2 min-w-[120px]">
    <h3 className="font-semibold">Shop</h3>
    <a href="#" className="hover:text-orange-500 transition">All Products</a>
    <a href="#" className="hover:text-orange-500 transition">Cleaning Gadgets</a>
    <a href="#" className="hover:text-orange-500 transition">Eco-Friendly</a>
  </div>
  <div className="flex flex-col space-y-2 min-w-[120px]">
    <h3 className="font-semibold">Company</h3>
    <a href="#" className="hover:text-orange-500 transition">About Us</a>
    <a href="#" className="hover:text-orange-500 transition">Contact</a>
    <a href="#" className="hover:text-orange-500 transition">Careers</a>
  </div>
</div>


          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook className="h-5 w-5"/></a>
            <a href="#" className="text-gray-600 hover:text-blue-400"><Twitter className="h-5 w-5"/></a>
            <a href="#" className="text-gray-600 hover:text-pink-500"><Instagram className="h-5 w-5"/></a>
            <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Grand Cleaner. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
