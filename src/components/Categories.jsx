import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CreateCategoryForm from './CreateCategoryForm';
import CategoriesTable from './CategoriesTable';

const initialCategories = [
  { id: 1, nombre: "Postre", tipoItem: "Plato" },
  { id: 2, nombre: "Gaseosa", tipoItem: "Bebida" },
  { id: 3, nombre: "Plato Principal", tipoItem: "Plato" },
  { id: 4, nombre: "Entrada", tipoItem: "Plato" },
  { id: 5, nombre: "Vino", tipoItem: "Bebida" },
  { id: 6, nombre: "Cerveza", tipoItem: "Bebida" },
  { id: 7, nombre: "Facturas", tipoItem: "Plato" },
  { id: 8, nombre: "Jugos", tipoItem: "Bebida" },
  { id: 9, nombre: "Agua", tipoItem: "Bebida" }
];

const Categories = ({ onClose }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(category =>
    category.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCategory = (formData) => {
    const newCategory = {
      id: categories.length + 1,
      ...formData
    };
    setCategories([...categories, newCategory]);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-black">
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Lista de Categorias</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 border-gray-300 bg-gray-200"
        >
          <XMarkIcon className="h-6 w-6 border-gray-300 bg-gray-200" />
        </button>
      </div>

      <div className="flex-grow flex flex-col p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <span className="font-medium">Buscador:</span>
          <div className="flex gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-64 border-gray-300 bg-gray-200"
              placeholder="Buscar categoría..."
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buscar
            </button>
          </div>
        </div>

        <CreateCategoryForm onSubmit={handleCreateCategory} />
        
        <div className="mt-6 flex-grow overflow-auto">
          <CategoriesTable 
            categories={filteredCategories} 
            onDelete={handleDeleteCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;

