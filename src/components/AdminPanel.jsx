import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // 这里添加获取产品列表的逻辑
  useEffect(() => {
    // 从API获取产品列表
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/';
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">产品管理</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          退出登录
        </button>
      </div>

      <div className="grid gap-4">
        {/* 产品列表 */}
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">名称</th>
              <th className="px-4 py-2">价格</th>
              <th className="px-4 py-2">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;