import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';



const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVendors = vendors.filter(vendor =>
    vendor.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Lista de Vendedores</h1>
      </div>
      
      <div className="flex justify-between items-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Crear Nuevo Vendedor
        </button>
        
        <div className="flex items-center space-x-4">
          <label htmlFor="search" className="text-gray-700">Buscador:</label>
          <input
            id="search"
            type="text"
            placeholder="Ingrese el nombre del vendedor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg py-2 px-3 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Buscar
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
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
            {filteredVendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="px-6 py-4 whitespace-nowrap">{vendor.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vendor.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vendor.pais}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vendor.ciudad}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vendor.calle}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vendor.altura}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorList;

