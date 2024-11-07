import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const auth = useAuth();
  const isAdmin = auth?.isAdmin || false;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Shop</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/" className="py-2 px-3 text-gray-500 hover:text-gray-700">
              首页
            </Link>
            {isAdmin && (
              <Link to="/admin" className="py-2 px-3 text-gray-500 hover:text-gray-700">
                管理面板
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}