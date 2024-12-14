import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import SearchBar from '../components/SearchBar';
import ClientTable from '../components/ClientTable';
import Modal from '../components/Modal';
import CreateClientForm from '../components/CreateClientForm';

const initialClients = [
  { id: 1, nombre: "Mateo Gastaldi", pais: "Argentina", ciudad: "Santa Fe", calle: "Llerena", altura: "2240" },
  { id: 2, nombre: "Sofia Rodriguez", pais: "Argentina", ciudad: "Rosario", calle: "Mitre", altura: "125" },
  { id: 3, nombre: "Lucas Martinez", pais: "Argentina", ciudad: "Córdoba", calle: "San Martin", altura: "3500" }
];

const ClientesPage = () => {
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredClients = clients.filter(client =>
    client.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateClient = (formData) => {
    const newClient = {
      id: clients.length + 1,
      ...formData
    };
    setClients([...clients, newClient]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Lista de Clientes</h1>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Crear Nuevo Cliente
        </button>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <ClientTable clients={filteredClients} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateClientForm 
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleCreateClient}
        />
      </Modal>
    </div>
  );
};

export default ClientesPage;

