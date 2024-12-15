import React, { useState } from "react";
import { deleteCliente } from "../utils/cliente";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import ClienteEdit from "./ClientEdit";
import Modal from "./Modal";
import { editCliente } from "../utils/cliente";

const ClientTable = ({ clients, setClients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clienteSelected, setClienteSelected] = useState(null);

  const handleEdit = (client) => {
    setClienteSelected(client);
    setIsModalOpen(true);
  };

  const handleGuardar = async (formData) => {
    console.log("Editando cliente...");
    try {
      const response = await editCliente(formData);
      console.log("Cliente editado:", response);
      setClients((prevClients) =>
        prevClients.map((c) => (c.id === formData.id ? formData : c))
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al editar el cliente:", error);
    }
  };
  const handleDelete = async (client) => {
    console.log("Borrando cliente...");
    try {
      const response = await deleteCliente(client);
      console.log("Cliente borrado:", response);
      setClients(clients.filter((c) => c.id !== client.id)); // Actualizar el estado
    } catch (error) {
      console.error("Error al borrar el cliente:", error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden text-black">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Nombre",
              "ID",
              "País",
              "Ciudad",
              "Calle",
              "Altura",
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
          {clients.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{client.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {client.direccion.pais}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {client.direccion.ciudad}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {client.direccion.calle}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {client.direccion.altura}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <button
                  className="text-indigo-600 hover:text-indigo-900 mr-4 bg-gray-200"
                  onClick={() => handleEdit(client)}
                >
                  <PencilIcon className="h-5 w-5" />
                </button>

                <button
                  className="text-red-600 hover:text-red-900 bg-gray-200"
                  onClick={() => handleDelete(client)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
      {isModalOpen && clienteSelected && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ClienteEdit
            onCancel={() => setIsModalOpen(false)}
            client={clienteSelected}
            onConfirm={handleGuardar}
          />
        </Modal>
      )}
    </div>
  );
};

export default ClientTable;
