import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNav = () => {
  const navItems = ['Vendedores', 'Clientes', 'ItemMenus', 'Pedidos'];

  return (
    <nav className="w-64 bg-gray-900 min-h-screen p-6">
      <div className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="block w-full py-2 px-4 text-gray-300 hover:bg-gray-800 rounded-lg transition duration-150 ease-in-out"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;

