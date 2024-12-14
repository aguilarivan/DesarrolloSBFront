import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const MenuItemsTable = ({ items }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden text-black">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Nombre",
              "ID",
              "Precio",
              "Vendedor",
              "Categoria",
              "Apto Vegano",
              "Apto Celiaco",
              "Acciones"
            ].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{item.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">${item.precio.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.vendedor}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.categoria}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  item.aptoVegano ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.aptoVegano ? 'Sí' : 'No'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  item.aptoCeliaco ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800 '
                }`}>
                  {item.aptoCeliaco ? 'Sí' : 'No'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-4 bg-gray-200">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button className="text-red-600 hover:text-red-900 bg-gray-200">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuItemsTable;

