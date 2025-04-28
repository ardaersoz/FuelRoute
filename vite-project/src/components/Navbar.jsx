import React, { useState } from "react";
import logo from "../assets/fuelroute.png"; // Logo yolunu kendi projenize göre ayarlayın
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20">
          {/* Sol Menü */}
          <nav className="hidden lg:flex flex-1">
            <ul className="flex items-center space-x-8 text-gray-800 font-medium pl-6">
              <NavItem href="/">Ana Sayfa</NavItem>
              <NavItem href="/payment">Ödeme</NavItem>
              <NavItem href="/about">Hakkımızda</NavItem>
            </ul>
          </nav>
          {/* Hamburger Menü (Mobil) */}
          <button
            className="lg:hidden flex items-center justify-center p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
          {/* Orta Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="block w-36">
              <img src={logo} alt="Logo" className="h-12 object-contain mx-auto" />
            </a>
          </div>
          {/* Sağ Butonlar */}
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-4 pr-6">
            <Link
              to="/signin"
              className="px-5 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Giriş Yap
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
        {/* Mobil Menü */}
        {open && (
          <div className="lg:hidden mt-2 rounded-lg bg-white px-6 py-5 shadow">
            <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/payment">Payment</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/blog">Blog</NavItem>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link
                  to="/signin"
                  className="px-5 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup" 
                  className="px-5 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Sign up
                </Link>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

const NavItem = ({ href, children }) => (
  <li>
    <Link
      to={href}
      className="hover:text-blue-600 transition"
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
