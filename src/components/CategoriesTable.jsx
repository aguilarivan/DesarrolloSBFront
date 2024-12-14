import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const CategoriesTable = ({ categories, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 sticky top-0">
          <tr className="text-left">
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Tipo Item</th>
            <th className="px-4 py-2 border-b text-right">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{category.nombre}</td>
              <td className="px-4 py-2 border-b">{category.id}</td>
              <td className="px-4 py-2 border-b">{category.tipoItem}</td>
              <td className="px-4 py-2 border-b text-right">
                <button
                  onClick={() => onDelete(category.id)}
                  className="text-red-600 hover:text-red-900 bg-gray-300"
                >
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

export default CategoriesTable;

