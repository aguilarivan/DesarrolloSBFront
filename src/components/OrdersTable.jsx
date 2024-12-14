import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const getStatusColor = (status) => {
  const colors = {
    'RECIBIDO': 'bg-yellow-100 text-yellow-800',
    'PREPARADO': 'bg-blue-100 text-blue-800',
    'ENVIADO': 'bg-green-100 text-green-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

const OrdersTable = ({ orders }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {["ID", "Cliente", "Vendedor", "Estado", "Acciones"].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.cliente}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.vendedor}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.estado)}`}>
                  {order.estado}
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

export default OrdersTable;

