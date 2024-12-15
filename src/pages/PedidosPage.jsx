import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import FilterInputs from '../components/FilterInputs';
import OrdersTable from '../components/OrdersTable';
import { useEffect } from 'react';
import { getPedidos } from '../utils/pedidos';
import Modal from '../components/Modal';
import CreateOrderForm from '../components/CreateOrderForm';
import { createOrder } from '../utils/pedidos';

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [filters, setFilters] = useState({ id: '', cliente: '', vendedor: '' });
  const [isCreateOrderModalOpen, setIsCreateOrderModalOpen] = useState(false);
  useEffect(() => {
    const obtenerPedidos = async () => {
      try {
        const response = await getPedidos();
        const data = await response.json();
        setPedidos(data);
        console.log("Pedidos:", data);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };
    obtenerPedidos();
  }, []);

  const handleCreateOrder = async function (formData) {
    try {
      const response = await createOrder(formData);
      const newOrder = await response.json();
      setPedidos([...pedidos, newOrder]);
      setIsCreateOrderModalOpen(false);
    }
    catch (error) {
      console.error("Error al crear el pedido:", error);
    }
  }
  
  const filteredPedidos = pedidos.filter(pedido => {
    const matchId = pedido.id.toString().includes(filters.id);
    const matchCliente = pedido.cliente.nombre.toLowerCase().includes(filters.cliente.toLowerCase());
    const matchVendedor = pedido.vendedor.nombre.toLowerCase().includes(filters.vendedor.toLowerCase());
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
          
          <button
            onClick={() => setIsCreateOrderModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Crear Nuevo Pedido
          </button>

            <FilterInputs filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <OrdersTable orders={filteredPedidos} setOrders = {setPedidos} />
      <Modal isOpen={isCreateOrderModalOpen} onClose={() => setIsCreateOrderModalOpen(false)}>
        <CreateOrderForm 
          onClose={() => setIsCreateOrderModalOpen(false)}
          onConfirm={handleCreateOrder}
        />
      </Modal>
    </div>
  );
};

export default PedidosPage;

