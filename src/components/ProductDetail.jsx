import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setProduct({
      id,
      name: '高级蓝牙耳机',
      description: '采用先进的主动降噪技术，提供卓越的音质体验。40小时超长续航，支持快速充电。',
      price: '¥999',
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ],
      video: 'https://example.com/sample-video.mp4',
      details: `产品规格：
• 蓝牙版本：5.2
• 续航时间：40小时
• 充电时间：2小时
• 防水等级：IPX4
• 支持编解码：SBC, AAC, LDAC`,
      features: [
        '主动降噪',
        '环境音模式',
        '触控操作',
        '语音助手',
        '快速配对'
      ],
      inStock: true,
      freeShipping: true
    });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="space-y-3">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-36 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* 图片展示 */}
        <div className="flex flex-col">
          <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden ${selectedImage === index
                    ? 'ring-2 ring-primary'
                    : 'ring-1 ring-gray-200'
                  }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 商品信息 */}
        <div className="mt-10 lg:mt-0 lg:ml-8">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-4">
            <p className="text-4xl font-bold text-primary">{product.price}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">商品介绍</h3>
            <p className="mt-2 text-gray-500">{product.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">特色功能</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-gray-500"
                >
                  <svg
                    className="h-5 w-5 text-primary mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {product.video && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">产品视频</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-100">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src={product.video}
                >
                  您的浏览器不支持视频播放
                </video>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">规格参数</h3>
            <pre className="mt-4 text-sm text-gray-500 whitespace-pre-line">
              {product.details}
            </pre>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            {product.inStock ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                现货
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                缺货
              </span>
            )}
            {product.freeShipping && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                包邮
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}