import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Clock, MapPin, Scissors } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Barber Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              JOJO JOBRAN BARBER SHOP
            </h1>
            <p className="text-xl text-white mb-8">
              {t('heroSubtitle')}
            </p>
            <a
              href="/booking"
              className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {t('bookNow')}
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('ourServices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('haircut'),
                price: '₪80',
                icon: Scissors,
                description: t('haircutDesc')
              },
              {
                title: t('beardTrim'),
                price: '₪40',
                icon: Scissors,
                description: t('beardTrimDesc')
              },
              {
                title: t('hotTowelShave'),
                price: '₪60',
                icon: Scissors,
                description: t('hotTowelShaveDesc')
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-2xl font-bold mb-4">{service.price}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('contactUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('phone')}</h3>
              <p className="text-gray-600">052-257-1625</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('hours')}</h3>
              <p className="text-gray-600">
                {t('sunToThu')}: 9:00 - 20:00<br />
                {t('friday')}: 9:00 - 15:00<br />
                {t('saturday')}: {t('closed')}
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('location')}</h3>
              <p className="text-gray-600">{t('address')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;