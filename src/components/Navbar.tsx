import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Start Here',
    path: '/about'
  }, {
    name: 'Experience',
    path: '/experience'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Interests',
    path: '/interests'
  }, {
    name: 'Resume',
    path: '/resume'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';
  };
  return <header className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              David Merritt
            </Link>
            <span className="hidden sm:inline-block text-sm text-gray-500 ml-2">
              Home & Lifestyle Writer
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-base font-medium ${isActive(link.path)}`}>
                {link.name}
              </Link>)}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
          </div>
        </div>}
    </header>;
};
export default Navbar;