import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import FilterInputs from '../components/FilterInputs';
import OrdersTable from '../components/OrdersTable';

const initialOrders = [
  { id: 1, cliente: "Mateo Gastaldi", vendedor: "La Parrillada de Julio", estado: "RECIBIDO" },
  { id: 2, cliente: "Sofia Rodriguez", vendedor: "Heladeria Dulce Frio", estado: "PREPARADO" },
  { id: 3, cliente: "Lucas Martinez", vendedor: "Panaderia Los Trigale", estado: "ENVIADO" }
];

const PedidosPage = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [filters, setFilters] = useState({
    id: '',
    cliente: '',
    vendedor: ''
  });

  const filteredOrders = orders.filter(order => {
    const matchId = order.id.toString().includes(filters.id);
    const matchCliente = order.cliente.toLowerCase().includes(filters.cliente.toLowerCase());
    const matchVendedor = order.vendedor.toLowerCase().includes(filters.vendedor.toLowerCase());
    return matchId && matchCliente && matchVendedor;
  });

  return (
    <div className="space-y-6 text-black">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Lista de Pedidos</h1>
      </div>
      
      <div className="rounded-lg p-0">
        
        <div className="flex justify-between my-2">
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Buscar
            </button> */}
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Crear Nuevo Pedido
          </button>
            <FilterInputs filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <OrdersTable orders={filteredOrders} />
    </div>
  );
};

export default PedidosPage;

