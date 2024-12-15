import React, { useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Modal from './Modal';
import { deleteVendedor } from '../utils/vendedor';
import VendorEdit from './VendorEdit';
import { editVendedor } from '../utils/vendedor';

const VendorTable = ({ vendors, setVendors }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedVendor, setSelectedVendor] = React.useState(null);
  
  const handleEdit = (vendor) => {
    setSelectedVendor(vendor); // Guardar el vendedor seleccionado
    setIsModalOpen(true); // Abrir el modal
  };

  const handleGuardar = async (formData) => {
    console.log("Editando vendedor...");
  
    try {
      const response = await editVendedor(formData); // Llamada a la función editVendedor
      console.log("Vendedor editado:", response);
      setVendors(prevVendors => prevVendors.map(v => v.id === formData.id ? formData : v)); // Actualizar el estado con los datos del backend
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al editar el vendedor:", error);
    }
  };

  const handleDelete = async (vendor) => {
    console.log('Borrando vendedor...');
    try {
      const response = await deleteVendedor(vendor);
      console.log('Vendedor borrado:', response);
      setVendors(vendors.filter(v => v.id !== vendor.id)); // Actualizar el estado
    } catch (error) {
      console.error('Error al borrar el vendedor:', error);
    }
  };
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden text-black">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {['Nombre', 'ID', 'País', 'Ciudad', 'Calle', 'Altura', 'Acciones'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.direccion.pais}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.direccion.ciudad}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.direccion.calle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.direccion.altura}</td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <button
                  className="text-indigo-600 hover:text-indigo-900 mr-4 bg-gray-200"
                  onClick={() => handleEdit(vendor)}
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  className="text-red-600 hover:text-red-900 bg-gray-200"
                  onClick={() => handleDelete(vendor)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && selectedVendor && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <VendorEdit
            onCancel={() => setIsModalOpen(false)}
            vendor={selectedVendor} 
            onConfirm = {handleGuardar}
          />
        </Modal>
      )}
    </div>
  );
};

export default VendorTable;
