import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";

const CreateCategoryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    tipoItem: "PLATO",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: "", tipoItem: "PLATO" });
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h2 className="text-lg font-semibold mb-4 text-center">
        CREAR NUEVA CATEGORIA
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <div className="flex-1">
          <label
            htmlFor="nombre"
            className="block font-medium text-gray-700 mb-1 "
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-200 text-black"
            required
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="tipoItem"
            className="block font-medium text-gray-700 mb-1"
          >
            Tipo Item:
          </label>
          <Select
            value={formData.tipoItem}
            onValueChange={(value) =>
              setFormData({ ...formData, tipoItem: value })
            }
          >
            <SelectTrigger className="w-full border-gray-300 bg-gray-200  text-black">
              <SelectValue placeholder="Seleccione tipo" />
            </SelectTrigger>
            <SelectContent className="bg-gray-200 text-black">
              <SelectItem value="PLATO">PLATO</SelectItem>
              <SelectItem value="BEBIDA">BEBIDA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-6"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateCategoryForm;
