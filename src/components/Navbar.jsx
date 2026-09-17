import { Link } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-t-2  border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-blue-600"
        >
          RUWASH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <a
            href="#home"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#where-to-buy"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Where to Buy
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </a>

        </div>

        {/* Order Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:flex"
        >
          Order Now
          <FiArrowRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-700 md:hidden"
        >
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 md:hidden">

          <div className="flex flex-col gap-1">

            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#products"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Products
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#where-to-buy"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Where to Buy
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Order Now
              <FiArrowRight size={17} />
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}