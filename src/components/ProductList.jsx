import React, { useState } from 'react';
import './ProductShowcase.css';

const Header = () => (
  <header className="header">
    <h1>产品展示</h1>
  </header>
);

const ProductCard = ({ name, price, image, onClick }) => (
  <div className="product-card" onClick={onClick}>
    <div className="product-image">
      <img src={image} alt={`${name}图片`} />
    </div>
    <div className="product-info">
      <h3 className="product-title">{name}</h3>
      <p className="product-price">¥{price}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="qr-code">
      <img src="/api/placeholder/160/160" alt="二维码" />
    </div>
    <p>扫描二维码关注我们</p>
  </footer>
);

const ProductDetail = ({ product, onClose }) => (
  <>
    <div className="modal-overlay" onClick={onClose} />
    <div className="product-detail">
      <button className="close-button" onClick={onClose}>&times;</button>
      <div className="detail-image">
        <img src="/api/placeholder/800/400" alt={`${product.name}详情图片`} />
      </div>
      <h2>{product.name}</h2>
      <div className="detail-description">
        <p>这里是产品的详细描述信息。可以包含产品的特点、规格、使用方法等内容。</p>
      </div>
      <video className="detail-video" controls>
        <source src="product-video.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  </>
);

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: '产品名称1', price: 299, image: '/api/placeholder/280/200' },
    { id: 2, name: '产品名称2', price: 399, image: '/api/placeholder/280/200' },
    { id: 3, name: '产品名称3', price: 199, image: '/api/placeholder/280/200' },
  ];

  return (
    <div>
      <Header />
      <main className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </main>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
      <Footer />
    </div>
  );
};

export default ProductList;