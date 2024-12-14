import React, { useState } from "react";

const VendorEdit = ({ onConfirm, vendor }) => {
  const [formData, setFormData] = useState({
    nombre: vendor.nombre,
    latitud: vendor.latitud,
    longitud: vendor.longitud,
    pais: vendor.pais,
    ciudad: vendor.ciudad,
    calle: vendor.calle,
    altura: vendor.altura,
  });

  handleGuardar = () => {
    console.log("Editando vendedor...");
    const response = editVendor(formData);
    console.log(response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mx-auto w-full h-full">
      <div className="bg-gray-200 p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold text-gray-800">Editar vendedor</h2>
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
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent "
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
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
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
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
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
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
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
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
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
              name="altura"
              value={formData.altura}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Cancelar
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onClick={handleGuardar}>
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorEdit;
