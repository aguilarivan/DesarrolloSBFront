import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteItemMenu, editItemMenu } from "../utils/ItemMenus";
import Modal from "./Modal";
import EditItemMenuForm from "./EditItemMenuForm";

const MenuItemsTable = ({ items, setMenuItems }) => {
  const [isEditarItemMenuOpen, setIsEditarItemMenuOpen] = React.useState(false);
  const [selectedItemMenu, setSelectedItemMenu] = React.useState(null);

  const handleDelete = async (item) => {
    console.log("Borrando cliente...");
    try {
      const response = await deleteItemMenu(item);
      console.log("Cliente borrado:", response);
      setMenuItems(items.filter((c) => c.id !== item.id)); // Actualizar el estado
    } catch (error) {
      console.error("Error al borrar el cliente:", error);
    }
  };

  const handleEditItemMenu = async (item) => {
    console.log("Editando item...");
    try {
      const response = (await editItemMenu(item));
      console.log("Item editado:", response);
      setMenuItems((prevItems) => prevItems.map((i) => (i.id === item.id ? item : i))); // Actualizar el estado
    }catch (error) {
      console.error("Error al editar el item:", error);
    }
  };

  const handleEdit = (item) => {
    setSelectedItemMenu(item);
    setIsEditarItemMenuOpen(true);
  };


  return (
    <div className="bg-white shadow rounded-lg overflow-hidden text-black">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Nombre",
              "ID",
              "Tipo",
              "Precio",
              "Vendedor",
              "Categoria",
              "Apto Vegano",
              "Apto Celiaco",
              "Acciones",
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{item.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${item.precio.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.vendedor.nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.categoria.descripcion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.aptoVegano
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.aptoVegano ? "Sí" : "No"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.aptoCeliaco
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800 "
                  }`}
                >
                  {item.aptoCeliaco ? "Sí" : "No"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-4 bg-gray-200"
                onClick={() => handleEdit(item)}>
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  className="text-red-600 hover:text-red-900 bg-gray-200"
                  onClick={() => handleDelete(item)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isEditarItemMenuOpen}
        onClose={() => setIsEditarItemMenuOpen(false)}
      >
        <EditItemMenuForm
          onClose={() => setIsEditarItemMenuOpen(false)}
          onSubmit={handleEditItemMenu}
          initialData={selectedItemMenu}
        />
      </Modal>
    </div>
  );
};

export default MenuItemsTable;
