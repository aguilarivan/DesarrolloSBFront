import React, { useState } from 'react';
import { editCliente } from '../utils/cliente';
const ClienteEdit = ({ onCancel, client , onConfirm}) => {
    console.log("editando cliente: " , client)
  const [formData, setFormData] = useState({
    id: client.id,
    nombre: client.nombre,
    cuit: client.cuit,
    email: client.email,
    coordenadas:{
      lat: client.coordenadas.lat,
      lng: client.coordenadas.lng

    },
    direccion:{
      pais: client.direccion.pais,
      ciudad: client.direccion.ciudad,
      calle: client.direccion.calle,
      altura: client.direccion.altura
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Comprobar si la propiedad pertenece a "direccion" o "coordenadas"
    if (["pais", "ciudad", "calle", "altura"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        direccion: {
          ...prev.direccion,
          [name]: value,
        },
      }));
    } else if (["lat", "lng"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        coordenadas: {
          ...prev.coordenadas,
          [name]: parseFloat(value), // Convertir coordenadas a número
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
                name="email"
                value={formData.email}
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
                name="lat"
                value={formData.coordenadas.lat}
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
                name="lng"
                value={formData.coordenadas.lng}
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
                value={formData.direccion.pais}
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
                value={formData.direccion.ciudad}
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
                value={formData.direccion.calle}
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
                value={formData.direccion.altura}
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
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClienteEdit;

