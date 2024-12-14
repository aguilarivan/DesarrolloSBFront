import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Modal from './Modal';
import { deleteVendedor } from '../utils/vendedor';

const VendorTable = ({ vendors }) => {
  handleDelete = (vendor) => {console.log("Borrando vendedor..."); const response = deleteVendedor(vendor); console.log("Vendedor borrado:", response)};
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden text-black">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {["Nombre", "ID", "País", "Ciudad", "Calle", "Altura", "Acciones"].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
              <td className="px-6 py-4 whitespace-nowrap">{vendor.pais}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.ciudad}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.calle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vendor.altura}</td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium ">
                <button className="text-indigo-600 hover:text-indigo-900 mr-4 bg-gray-200" onClick = {() => setIsModalOpen(true)}>
                  <PencilIcon className="h-5 w-5" />
                  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <VendorEdit
                      onCancel={() => setIsModalOpen(false)}
                      vendor={vendor}
                    />
                  </Modal>
                </button>
                <button className="text-red-600 hover:text-red-900 bg-gray-200" onClick={handleDelete(vendor)}>
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

export default VendorTable;

