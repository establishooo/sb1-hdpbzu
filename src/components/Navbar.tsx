import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/logo.svg"
                alt="Jojo Jorban"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                {t('home')}
              </Link>
              <Link to="/booking" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                {t('booking')}
              </Link>
              <Link to="/gallery" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                {t('gallery')}
              </Link>
              <Link to="/shop" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                {t('shop')}
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <button
                onClick={() => changeLanguage('en')}
                className="px-2 py-1 text-sm hover:text-gray-300"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('he')}
                className="px-2 py-1 text-sm hover:text-gray-300"
              >
                עב
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className="px-2 py-1 text-sm hover:text-gray-300"
              >
                عر
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              to="/booking"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {t('booking')}
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {t('gallery')}
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {t('shop')}
            </Link>
          </div>
          <div className="px-4 py-3">
            <div className="flex justify-start space-x-4">
              <button
                onClick={() => {
                  changeLanguage('en');
                  setIsOpen(false);
                }}
                className="px-2 py-1 text-sm hover:text-gray-300"
              >
                EN
              </button>
              <button
                onClick={() => {
                  changeLanguage('he');
                  setIsOpen(false);
                }}
                className="px-2 py-1 text-sm hover:text-gray-300"
              >
                עב
              </button>
              <button
                onClick={() => {
                  changeLanguage('ar');
                  setIsOpen(false);
                }}
                className="px-2 py-1 text-sm hover:text-gray-300"
              >
                عر
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;