import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products] = useState([
    {
      id: 1,
      name: '高级蓝牙耳机',
      description: '无线降噪，持久续航',
      price: '¥999',
      image: 'https://via.placeholder.com/400',
      inStock: true,
      freeShipping: true
    },
    {
      id: 2,
      name: '智能手表',
      description: '全天候健康监测',
      price: '¥1299',
      image: 'https://via.placeholder.com/400',
      inStock: true,
      freeShipping: true
    },
    {
      id: 3,
      name: '便携式充电宝',
      description: '大容量快充',
      price: '¥199',
      image: 'https://via.placeholder.com/400',
      inStock: false,
      freeShipping: true
    },
    {
      id: 4,
      name: '无线充电器',
      description: '15W快速充电',
      price: '¥129',
      image: 'https://via.placeholder.com/400',
      inStock: true,
      freeShipping: false
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">精选商品</h1>
          <p className="mt-4 text-xl text-gray-500">发现品质生活，享受科技带来的便利</p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80">
          <QRCode
            value="https://your-website-url.com"
            size={128}
            level="H"
            includeMargin={true}
          />
          <p className="mt-3 text-sm font-medium text-gray-900 text-center">
            扫码关注我们
          </p>
        </div>
      </div>
    </div>
  );
}