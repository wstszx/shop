import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function AdminPanel() {
  const { isAdmin, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    images: [],
    video: ''
  });

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto material-card p-8">
        <h2 className="text-2xl font-bold text-on-surface mb-8">管理员登录</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          login({ email, password });
        }}>
          <div className="space-y-6">
            <div>
              <label className="material-label">邮箱</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="material-input"
                required
              />
            </div>
            <div>
              <label className="material-label">密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="material-input"
                required
              />
            </div>
            <button
              type="submit"
              className="material-button w-full bg-primary text-on-primary"
            >
              登录
            </button>
          </div>
        </form>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New product:', newProduct);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      images: [],
      video: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto material-card p-8">
      <h2 className="text-2xl font-bold text-on-surface mb-8">添加新商品</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="material-label">商品名称</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            className="material-input"
            required
          />
        </div>
        
        <div>
          <label className="material-label">商品描述</label>
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
            className="material-input"
            rows="4"
            required
          />
        </div>
        
        <div>
          <label className="material-label">价格</label>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            className="material-input"
            required
          />
        </div>
        
        <div>
          <label className="material-label">图片上传</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setNewProduct({...newProduct, images: files});
            }}
            className="material-input"
          />
        </div>
        
        <div>
          <label className="material-label">视频上传</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setNewProduct({...newProduct, video: file});
            }}
            className="material-input"
          />
        </div>
        
        <button
          type="submit"
          className="material-button w-full bg-primary-container text-on-primary-container"
        >
          添加商品
        </button>
      </form>
    </div>
  );
}