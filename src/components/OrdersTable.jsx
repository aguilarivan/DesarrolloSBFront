import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteOrder } from '../utils/pedidos';

const getStatusColor = (status) => {
  const colors = {
    'RECIBIDO': 'bg-yellow-100 text-yellow-800',
    'PREPARADO': 'bg-blue-100 text-blue-800',
    'ENVIADO': 'bg-green-100 text-green-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};


const OrdersTable = ({ orders, setOrders }) => {

  const handleDelete = async (order) => {
    console.log('Deleting order:', order);
    const response = await deleteOrder(order.id);
    if (response.ok) {
      console.log('Order deleted successfully');
      setOrders((prevOrders) => prevOrders.filter((o) => o.id !== order.id));
    } else {
      console.error('Error deleting order');
    }
  }
  
  const handleCambiarEstado = async (order) => {
    const response = await cambiarEstado(order.id);
    if (response.ok) {
      console.log('Order deleted successfully');
      setOrders((prevOrders) => prevOrders.filter((o) => o.id !== order.id));
    } else {
      console.error('Error deleting order');
    }
  }

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
              <td className="px-6 py-4 whitespace-nowrap">{order.cliente.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.vendedor.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.estado)}`}>
                  {order.estado}
                </span>
              </td>
              <td className="flex flex-row  px-6 py-4 whitespace-nowrap text-left text-sm font-medium justify-start">
                <button className=" text-indigo-600 hover:text-indigo-900 mr-4 bg-gray-200">
                Estado siguiente 
                </button>
                <button className=" text-red-600 hover:text-red-900 bg-gray-200" onClick = {() => handleDelete(order)}>
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

