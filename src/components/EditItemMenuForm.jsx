import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import { getCategories } from "../utils/categories";
import { getVendedores } from "../utils/vendedor";

const EditItemMenuForm = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [vendedores, setVendedores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriasPlato, setCategoriasPlato] = useState([]);
  const [categoriasBebida, setCategoriasBebida] = useState([]);

  useEffect(() => {
    console.log("Initial data:", initialData);
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
        setCategorias(data);
        console.log("Categorias:", data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };
    obtenerVendedores();
    obtenerCategorias();
  }, [initialData]);

  useEffect(() => {
    const categoriasPlato = categorias.filter(categoria => categoria.tipoItem === "PLATO");
    setCategoriasPlato(categoriasPlato);
    const categoriasBebida = categorias.filter(categoria => categoria.tipoItem === "BEBIDA");
    setCategoriasBebida(categoriasBebida);
    console.log("Categorias Plato:", categoriasPlato);
    console.log("Categorias Bebida:", categoriasBebida);
  }, [categorias]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();  

  };

  return (
    <div className="flex flex-col h-[80vh] max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-black w-full">
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Editar {formData.type === "PLATO" ? "Plato" : "Bebida"}
        </h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <XMarkIcon className="h-6 w-6" />
        </button>
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
              className="block font-medium text-gray-700"
            >
              Categoría:
            </label>
            <Select
              value={formData.categoria.id.toString()}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  categoria: { id: parseInt(value, 10) },
                }))
              }
            >
              <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                <SelectValue placeholder="Seleccione categoría" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200 text-black">
                {(formData.type === "PLATO" ? categoriasPlato : categoriasBebida).map((categoria) => (
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
              value={formData.vendedor.id.toString()}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  vendedor: { id: parseInt(value, 10) },
                }))
              }
            >
              <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                <SelectValue placeholder="Seleccione vendedor" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200 text-black">
                {vendedores.map((vendedor) => (
                  <SelectItem key={vendedor.id} value={vendedor.id.toString()}>
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
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-gray-200"
              />
              <label htmlFor="aptoVegano" className="font-medium text-gray-700">
                Apto Vegano
              </label>
            </div>
          </div>

          {formData.type === "PLATO" ? (
            <>
              <div className="space-y-2">
                <label
                  htmlFor="peso"
                  className="block font-medium text-gray-700"
                >
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
            </>
          ) : (
            <>
              <div className="space-y-2">
                <label
                  htmlFor="gradAlcoholica"
                  className="block font-medium text-gray-700"
                >
                  Graduación Alcohólica:
                </label>
                <input
                  type="number"
                  id="gradAlcoholica"
                  name="graduacionAlcoholica"
                  value={formData.graduacionAlcoholica}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 bg-gray-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="tamanio"
                  className="block font-medium text-gray-700"
                >
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
            </>
          )}
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

export default EditItemMenuForm;