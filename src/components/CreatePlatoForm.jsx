import React, { useState } from "react";
// import { XMarkIcon } from '@heroicons/react/24/outline';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "../components/Select";
import { createPlato } from "../utils/ItemMenus";
import { useEffect } from "react";
import { getCategories } from "../utils/categories";
import { getVendedores } from "../utils/vendedor";

const CreatePlatoForm = ({ onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    vendedor: "",
    peso: "",
    descripcion: "",
    categoria: "",
    aptoCeliaco: false,
    aptoVegano: false,
    calorias: "",
  });
  const [vendedores, setVendedores] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerVendedores = async () => {
      try {
        const response = await getVendedores();
        const data = await response.json();
        setVendedores(data);
        console.log("Vendedores:", data);
      } catch (error) {
        console.error("Error al obtener los vendedores:", error);
      }
    };
    
    const obtenerCategorias = async () => {
      try {
        const response = await getCategories();
        const data = await response.json();
        categoriasPlatos(data);
      } catch (error) {
        console.error("Error al obtener las categorias:", error);
      }
    };
    obtenerVendedores();
    obtenerCategorias();
  }, []);

  const categoriasPlatos = (categorias) => {
    const categoriasPlato = categorias.filter(categoria => categoria.tipoItem === "PLATO");
    setCategorias(categoriasPlato);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      type: "PLATO",
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      precio: parseFloat(formData.precio),
      aptoVegano: formData.aptoVegano,
      aptoCeliaco: formData.aptoCeliaco,
      categoria: { id: formData.categoria }, // Asegúrate de que 'categoria' sea un ID
      vendedor: { id: formData.vendedor }, // Asegúrate de que 'vendedor' sea un ID
      calorias: parseInt(formData.calorias),
      peso: parseFloat(formData.peso),
    };
    console.log("itemData", itemData);
    onConfirm(itemData);
    onClose();
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-black w-full">
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
            <label
              htmlFor="descripcion"
              className="block font-medium text-gray-700"
            >
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
            <label
              htmlFor="categoria"
              className="block font-medium text-gray-700 ">
              Categoría:
            </label>
            <Select
              value={formData.categoria.toString()} // Asegúrate de comparar como string
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  categoria: parseInt(value, 10),
                }))
              }
            >
              <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                <SelectValue placeholder="Seleccione categoría" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200 text-black">
                {categorias.map((categoria) => (
                  <SelectItem
                    key={categoria.id}
                    value={categoria.id.toString()}
                  >
                    {categoria.descripcion}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="vendedor"
              className="block font-medium text-gray-700"
            >
              Vendedor:
            </label>
            <Select
              value={formData.vendedor.toString()} // Asegúrate de comparar como string
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  vendedor: parseInt(value, 10),
                }))
              }
            >
              <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                <SelectValue placeholder="Seleccione vendedor" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200 text-black">
                {vendedores.map((vendedor) => (
                  <SelectItem
                    key={vendedor.id}
                    value={vendedor.id.toString()}
                  >
                    {vendedor.nombre}
                  </SelectItem>
                ))}
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
              <label
                htmlFor="aptoCeliaco"
                className="font-medium text-gray-700"
              >
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
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-green-200"
              />
              <label htmlFor="aptoVegano" className="font-medium text-gray-700">
                Apto Vegano
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="peso" className="block font-medium text-gray-700">
              Peso:
            </label>
            <input
              type="number"
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="calorias"
              className="block font-medium text-gray-700"
            >
              Calorías:
            </label>
            <input
              type="number"
              id="calorias"
              name="calorias"
              value={formData.calorias}
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

export default CreatePlatoForm;
