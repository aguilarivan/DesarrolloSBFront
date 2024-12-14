import React from 'react';

const FilterInputs = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-row gap-4 md:grid-cols-3s text-center ">
      <div className="flex flex-row gap-2">
        <label htmlFor="id" className="text-gray-700">Filtrar por id:</label>
        <input
          id="id"
          type="text"
          value={filters.id}
          onChange={(e) => setFilters(prev => ({ ...prev, id: e.target.value }))}
          className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
        />
      </div>
      
      <div className="flex flex-row gap-2">
        <label htmlFor="cliente" className="text-gray-700">Filtrar por Cliente:</label>
        <input
          id="cliente"
          type="text"
          value={filters.cliente}
          onChange={(e) => setFilters(prev => ({ ...prev, cliente: e.target.value }))}
          className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
        />
      </div>
      
      <div className="flex flex-row gap-2">
        <label htmlFor="vendedor" className="text-gray-700">Filtrar por Vendedor:</label>
        <input
          id="vendedor"
          type="text"
          value={filters.vendedor}
          onChange={(e) => setFilters(prev => ({ ...prev, vendedor: e.target.value }))}
          className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
        />
      </div>
    </div>
  );
};

export default FilterInputs;

