'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/Logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-[#D9DEDD] z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={32} height={32} />
              <span className="ml-2 text-xl font-bold text-black">TEST</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link
                href="/about-us"
                className="text-[#022C22] hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
              >
                About us
              </Link>
              <Link
                href="/team"
                className="text-[#022C22] hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
              >
                Team
              </Link>
              <Link
                href="/solutions"
                className="text-[#022C22] hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
              >
                Solutions
              </Link>
              <Link
                href="/blog"
                className="text-[#022C22] hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Dashboard Button */}
          <div className="hidden md:block">
            <Link
              href="/dashboard"
              className="bg-transparent text-black border rounded-full border-[#0719B3] px-4 py-2 hover:bg-blue-700 hover:text-white flex items-center group"
            >
              Dashboard
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/about-us"
              className="block px-4 py-2 text-[#022C22] hover:bg-gray-100 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
            >
              About us
            </Link>
            <Link
              href="/team"
              className="block px-4 py-2 text-[#022C22] hover:bg-gray-100 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
            >
              Team
            </Link>
            <Link
              href="/solutions"
              className="block px-4 py-2 text-[#022C22] hover:bg-gray-100 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
            >
              Solutions
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-[#022C22] hover:bg-gray-100 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0719B3] after:transition-all after:duration-300"
            >
              Blog
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-[#022C22] hover:bg-gray-100  items-center group"
            >
              Dashboard
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
