"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Navigation from "./navigation";
import Searchbar from "./searchbar";
import Profile from "./profile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="flex  shadow-[rgba(0,0,0,0.1)_-4px_9px_25px_-6px] py-2 px-4 sm:px-10 bg-gray-100 min-h-[70px] tracking-wide sticky top-0 z-50 border-b border-gray-100 ">
      <div className="w-full flex flex-wrap items-center lg:gap-y-4 gap-y-6 gap-x-4 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-9 h-9"
            width={100}
            height={100}
          />
        </Link>

        <div
          id="collapseMenu"
          className={`lg:flex lg:items-center lg:flex-1 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:h-full max-lg:px-8 max-lg:py-4 max-lg:shadow-md max-lg:overflow-auto z-50 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="lg:hidden fixed top-2 right-4 z-100 rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
          >
            <X size={14} color="black" />
          </button>

          {/* Navigation */}
          <Navigation />
          {/* Searchbar */}
          <Searchbar />
        </div>

        <div className="flex items-center ml-auto">
          <ul className="flex space-x-4">
            {/* Profile Dropdown */}
            <Profile profileOpen={profileOpen} setProfileOpen={setProfileOpen} />

            {/* Wishlist */}
            <li className="relative px-1">
              <Link href="/wishlist" className="flex flex-col justify-center items-center cursor-pointer">
                <Heart size={18} />
                <span className="text-xs font-semibold mt-1">Wishlist</span>
              </Link>
            </li>

            {/* Bag */}
            <li className="relative px-1">
              <Link href="/cart" className="flex flex-col justify-center items-center cursor-pointer">
                <ShoppingCart size={18} />
                <span className="text-xs font-semibold mt-1">Cart</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden ml-6 cursor-pointer"
          >
            <Menu size={32} color="black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
