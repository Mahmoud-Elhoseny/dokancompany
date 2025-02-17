import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1A1B1E] text-white py-8 sm:py-10 md:py-12 font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Social Media Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 text-center lg:text-left mb-8">
            <Link href="/" className="inline-flex items-center justify-center">
              <Image src={logo} alt="Dokan-logo" width={32} height={40} />
            </Link>
            <p className="mt-1 font-normal text-[14px] text-[#606060] text-center lg:text-left">
              Dokan Front End Test
            </p>

            <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
              <Link href="#" className="text-[#606060] hover:text-white">
                <svg
                  className="w-5 h-[5]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#606060] hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#606060] hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#606060] hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left lg:ms-10">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/home"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left lg:ms-10">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left lg:ms-10">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-400 font-normal text-[20px] leading-[32px] text-white transition-colors duration-200"
                >
                  Terms & Policies
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 text-center sm:text-left lg:ms-12">
            <h3 className="mb-6 font-normal text-[18px] md:text-[20px] leading-[32px] text-center sm:text-left">
              Our Contact
            </h3>
            <ul className="space-y-3 flex flex-col items-center sm:items-start">
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-gray-400 text-[18px] font-normal text-[#C2C2C2] inline-flex items-center gap-2 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z" />
                  </svg>
                  <span className="ms-1 mt-2">dokan@test.sa</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-gray-400 text-[18px] font-normal text-[#C2C2C2] inline-flex items-center gap-2 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.487 15.535c-1.257-.206-2.495-.58-3.65-1.102-.572-.262-1.249-.08-1.667.337l-1.932 1.932c-2.876-1.517-5.225-3.866-6.742-6.742l1.932-1.932c.417-.417.598-1.095.337-1.667-.522-1.154-.896-2.392-1.102-3.65C7.46 2.532 6.875 2 6.207 2H3.514C2.679 2 2 2.679 2 3.514 2 14.962 9.038 22 20.486 22c.835 0 1.514-.679 1.514-1.514v-2.693c0-.668-.532-1.253-1.513-1.258z" />
                  </svg>

                  <span className="ms-1 mt-2">128 Hug x 27 Hug</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-400 text-[18px] font-normal text-[#C2C2C2] inline-flex items-center gap-2 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12,2C8.13,2,5,5.13,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5 s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z" />
                  </svg>

                  <span className="ms-1 mt-2">Saudi Arabia, Jeddah</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6   text-[#606060]">
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-center sm:text-left font-normal text-[14px] sm:text-[16px] leading-[20px]">
              © 2025 Dokan Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200 font-normal text-[16px] leading-[20px] whitespace-nowrap"
              >
                Privacy policy
              </Link>
              <Link
                href="/gdpr"
                className="hover:text-white transition-colors duration-200 font-normal text-[16px] leading-[20px] whitespace-nowrap"
              >
                GDPR
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200 font-normal text-[16px] leading-[20px] whitespace-nowrap"
              >
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
