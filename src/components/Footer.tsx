import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpIcon } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} David Merritt. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 text-sm">
              Contact
            </Link>
            <button onClick={scrollToTop} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
              Back to Top <ArrowUpIcon size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;