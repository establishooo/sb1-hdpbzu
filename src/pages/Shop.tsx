import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Search } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Hair Pomade',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    stock: 15
  },
  {
    id: 2,
    name: 'Beard Oil',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80',
    category: 'beard',
    stock: 20
  },
  {
    id: 3,
    name: 'Hair Clay',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    stock: 10
  },
  {
    id: 4,
    name: 'Beard Balm',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80',
    category: 'beard',
    stock: 25
  },
  {
    id: 5,
    name: 'Hair Shampoo',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    stock: 30
  },
  {
    id: 6,
    name: 'Beard Shampoo',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80',
    category: 'beard',
    stock: 18
  }
];

const Shop = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  const categories = ['all', 'hair', 'beard'];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === null || selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">{t('shop')}</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('searchProducts')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category || (category === 'all' && !selectedCategory)
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {t(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{t('inStock')}: {product.stock}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">₪{product.price}</span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {t('addToCart')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Cart */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 right-0 m-4 bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">{t('cart')}</h2>
            <div className="space-y-4">
              {cart.map((item) => {
                const product = products.find(p => p.id === item.id);
                if (!product) return null;
                return (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x ₪{product.price}
                      </p>
                    </div>
                    <span className="font-medium">
                      ₪{(product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center font-bold">
                  <span>{t('total')}:</span>
                  <span>₪{cartTotal.toFixed(2)}</span>
                </div>
                <button
                  className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors"
                >
                  {t('checkout')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;