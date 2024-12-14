import React, { useState } from 'react';
import { editCliente } from '../utils/cliente';
const ClienteEdit = ({ onCancel, client }) => {
    console.log("editando cliente: " , client)
  const [formData, setFormData] = useState({
    id: client.id,
    nombre: client.nombre,
    cuit: client.cuit,
    mail: client.mail,
    latitud: client.latitud,
    longitud: client.longitud,
    pais: client.pais,
    ciudad: client.ciudad,
    calle: client.calle,
    altura: client.altura
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGuardar = () => {
    console.log("Editnado cliente...");
    const response = editCliente(formData);
    console.log(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mx-auto w-full h-full">
      <div className="bg-gray-200 p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold text-gray-800">Editar Cliente</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-4">
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
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cuit" className="block font-medium text-gray-700">
                CUIT:
              </label>
              <input
                type="text"
                id="cuit"
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="mail" className="block font-medium text-gray-700">
                MAIL:
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
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
                name="latitud"
                value={formData.latitud}
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
                name="longitud"
                value={formData.longitud}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
                required
              />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="pais" className="block font-medium text-gray-700">
                País:
              </label>
              <input
                type="text"
                id="pais"
                name="pais"
                value={formData.pais}
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
                name="ciudad"
                value={formData.ciudad}
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
                name="calle"
                value={formData.calle}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="altura" className="block font-medium text-gray-700">
                Altura:
              </label>
              <input
                type="text"
                id="altura"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200 text-gray-700"
                required
              />
            </div>
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
            onClick={handleGuardar}
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClienteEdit;

