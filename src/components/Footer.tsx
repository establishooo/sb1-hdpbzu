import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactInfo')}</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>052-257-1625</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@jojojorban.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 mr-2" />
                <span>@jojojorban</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/booking" className="hover:text-gray-300">{t('booking')}</a></li>
              <li><a href="/gallery" className="hover:text-gray-300">{t('gallery')}</a></li>
              <li><a href="/shop" className="hover:text-gray-300">{t('shop')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('openingHours')}</h3>
            <ul className="space-y-2">
              <li>{t('sunToThu')}: 9:00 - 20:00</li>
              <li>{t('friday')}: 9:00 - 15:00</li>
              <li>{t('saturday')}: {t('closed')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} JOJO JOBRAN BARBER SHOP. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;