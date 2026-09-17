import product from '../assets/product.png';
import { useState } from 'react';

export default function Products() {
  const [filter, setFilter] = useState('All');

  const products = [
    {
      id: 1,
      name: "Ruwash Washing Powder",
      size: "1 kg Pack",
      price: "550",
      category: "Powder",
      image: product
    },
    {
      id: 2,
      name: "Ruwash Washing Powder",
      size: "2 kg Pack",
      price: "1000",
      category: "Powder",
      image: product
    },
    {
      id: 3,
      name: "Ruwash Beauty Soap",
      size: "150g - Pack of 3 Soaps",
      price: "150",
      category: "Soap",
      image: product
    }
  ];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#f4f7f9] flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          Our Products
        </h2>
        <p className="text-slate-500 text-sm md:text-base">
          Choose the perfect size for your household needs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-12 bg-white p-1.5 rounded-full shadow-sm border border-slate-100">
        {['All', 'Powder', 'Soap'].map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
              filter === tab
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
            
            {/* Top Badge */}
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Ruwash Quality Assured
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-48 bg-[#f4f7f9] rounded-2xl mb-6 flex items-center justify-center text-slate-400 text-sm font-medium border border-slate-100/50">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-slate-500 text-xs font-medium mb-4">{product.size}</p>
              
              <div className="mt-auto mb-6">
                <span className="text-blue-600 font-extrabold text-2xl">Rs. {product.price}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl transition-all cursor-pointer text-sm text-center">
                    Order Now
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition-all cursor-pointer text-sm text-center">
                    Add to Cart
                  </button>
                </div>
                <a href="/productsdetail" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl transition-all cursor-pointer text-sm text-center block">
                  View Image Details
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
