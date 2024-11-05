import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {product.description}
            </p>
          </div>
          <p className="text-lg font-semibold text-primary">
            {product.price}
          </p>
        </div>
        
        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
          {product.inStock ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              现货
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              缺货
            </span>
          )}
          {product.freeShipping && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              包邮
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}