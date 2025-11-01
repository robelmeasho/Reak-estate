'use client';
import { useState } from 'react';
import { Menu, X, Home, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Cart', href: '/cart', icon: <ShoppingCart className="w-5 h-5 text-blue-600" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-300/80 backdrop-blur-xl border-b border-white/20 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Home className="w-7 h-7 text-blue-600 drop-shadow-sm" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-800 to-indigo-100 bg-clip-text text-transparent">
              HouseDreams
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-gray-200 font-medium hover:text-blue-600 transition-colors group flex items-center gap-1"
              >
                {item.icon && item.icon}
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-inner overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              {item.icon && item.icon}
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-3">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
