import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";

const CreateBebidaForm = ({ onClose , onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    vendedor: '',
    gradAlcoholica: '',
    descripcion: '',
    categoria: '',
    aptoCeliaco: false,
    aptoVegano: false,
    tamanio: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Crear Plato</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex-grow p-6 overflow-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="nombre" className="block font-medium text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="descripcion" className="block font-medium text-gray-700">
              Descripción:
            </label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="precio" className="block font-medium text-gray-700">
              Precio:
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="categoria" className="block font-medium text-gray-700 ">
              Categoría:
            </label>
            <Select
              value={formData.categoria}
              onValueChange={(value) => setFormData(prev => ({ ...prev, categoria: value }))}
            >
              <SelectTrigger className="w-full border-gray-300 bg-gray-200  text-black">
                <SelectValue placeholder="Seleccione categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Postre">Postre</SelectItem>
                <SelectItem value="Plato Principal">Plato Principal</SelectItem>
                <SelectItem value="Entrada">Entrada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="vendedor" className="block font-medium text-gray-700">
              Vendedor:
            </label>
            <Select
              value={formData.vendedor}
              onValueChange={(value) => setFormData(prev => ({ ...prev, vendedor: value }))}
            >
              <SelectTrigger className="w-full border-gray-300 bg-gray-200  text-black">
                <SelectValue placeholder="Seleccione vendedor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="La Parrillada de Julio">La Parrillada de Julio</SelectItem>
                <SelectItem value="Heladeria Dulce Frio">Heladeria Dulce Frio</SelectItem>
                <SelectItem value="Panaderia Los Trigales">Panaderia Los Trigales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="aptoCeliaco"
                name="aptoCeliaco"
                checked={formData.aptoCeliaco}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-red-200"
              />
              <label htmlFor="aptoCeliaco" className="font-medium text-gray-700">
                Apto Celiaco
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="aptoVegano"
                name="aptoVegano"
                checked={formData.aptoVegano}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-gray-200"
              />
              <label htmlFor="aptoVegano" className="font-medium text-gray-700">
                Apto Vegano
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="gradAlcoholica" className="block font-medium text-gray-700">
              Graduación Alcoholica:
            </label>
            <input
              type="number"
              id="gradAlcoholica"
              name="gradAlcoholica"
              value={formData.gradAlcoholica}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="tamanio" className="block font-medium text-gray-700">
              Tamaño:
            </label>
            <input
              type="number"
              id="tamanio"
              name="tamanio"
              value={formData.tamanio}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBebidaForm;

