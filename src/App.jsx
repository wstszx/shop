import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  console.log('App component rendering');

  return (
    <AuthProvider>
      <div className="app bg-white min-h-screen">
        <div className="text-red-500 text-2xl p-4">
          如果你能看到这段文字，说明 React 正在正常渲染
        </div>
        <Navbar />
        <div className="content p-4">
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={<div className="text-blue-500">Loading ProductList...</div>}>
                <ProductList />
              </React.Suspense>
            } />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;