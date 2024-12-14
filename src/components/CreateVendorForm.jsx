import React, { useState } from 'react';

const CreateVendorForm = ({ onCancel, onConfirm }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    coordenadas: {
      lat:"",
      lng:"",
    },
    direccion:{
      pais: '',
      ciudad: '',
      calle: '',
      altura: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Verifica si el campo pertenece a propiedades anidadas
    if (name.includes('.')) {
      const [parent, child] = name.split('.'); // Divide el nombre en las partes (ej: "direccion.calle")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent], // Mantén el resto de las propiedades de la sección
          [child]: value, // Actualiza solo la propiedad específica
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mx-auto w-full h-full">
      <div className="bg-gray-200 p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold text-gray-800">Crear vendedor</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-2 gap-6 text-black">
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
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="pais" className="block font-medium text-gray-700">
              País:
            </label>
            <input
              type="text"
              id="pais"
              name="direccion.pais"
              value={formData.direccion.pais}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="latitud" className="block font-medium text-gray-700">
              Latitud:
            </label>
            <input
              type="number"
              step="any"
              id="latitud"
              name="coordenadas.lat"
              value={formData.coordenadas.lat}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="ciudad" className="block font-medium text-gray-700">
              Ciudad:
            </label>
            <input
              type="text"
              id="ciudad"
              name="direccion.ciudad"
              value={formData.direccion.ciudad}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="longitud" className="block font-medium text-gray-700">
              Longitud:
            </label>
            <input
              type="number"
              step="any"
              id="longitud"
              name="coordenadas.lng"
              value={formData.coordenadas.lng}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="calle" className="block font-medium text-gray-700">
              Calle:
            </label>
            <input
              type="text"
              id="calle"
              name="direccion.calle"
              value={formData.direccion.calle}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
              required
            />
          </div>

          <div className="space-y-2 col-start-2">
            <label htmlFor="altura" className="block font-medium text-gray-700">
              Altura:
            </label>
            <input
              type="text"
              id="altura"
              name="direccion.altura"
              value={formData.direccion.altura}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVendorForm;

