import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import SearchBar from '../components/SearchBar';
import VendorTable from '../components/VendorTable';
import Modal from '../components/Modal';
import CreateVendorForm from '../components/CreateVendorForm';
import { use } from 'react';
import { getVendedores } from '../utils/vendedor';


const VendedoresPage = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const obtenerVendedores = async () => {
      const response = await getVendedores();
      return response;
    }
    setVendors(obtenerVendedores());
  }, []);

  const filteredVendors = vendors.filter(vendor =>
    vendor.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateVendor = (formData) => {
    const newVendor = {
      id: vendors.length + 1,
      ...formData
    };
    setVendors([...vendors, newVendor]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Lista de Vendedores</h1>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Crear Nuevo Vendedor
        </button>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <VendorTable vendors={filteredVendors} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateVendorForm 
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleCreateVendor}
        />
      </Modal>
    </div>
  );
};

export default VendedoresPage;

