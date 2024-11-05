import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { isAdmin, logout } = useAuth();

  return (
    <nav className="bg-surface shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">商城</Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">
              商品列表
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-on-surface-variant hover:text-primary transition-colors">
                管理后台
              </Link>
            )}
            {isAdmin ? (
              <button
                onClick={logout}
                className="material-button bg-red-50 text-red-600 hover:bg-red-100"
              >
                退出
              </button>
            ) : (
              <Link
                to="/admin"
                className="material-button bg-primary text-on-primary hover:bg-primary/90"
              >
                登录
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}