import React, { useState } from "react";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";
import { getItemMenus } from "../utils/ItemMenus";
import { getVendedores } from "../utils/vendedor";
import { getClientes } from "../utils/cliente";
import { useEffect } from "react";

const CreateOrderForm = ({ onClose, onConfirm }) => {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [orderItems, setOrderItems] = useState([]);

  const [vendors, setVendors] = useState([]);
  const [clients, setClients] = useState([]);
  const [itemMenus, setItemMenus] = useState([]);
  const [itemMenusFiltered, setItemMenusFiltered] = useState([]);

  useEffect(() => {
    const obtenerVendedores = async () => {
      try {
        const response = await getVendedores();
        const data = await response.json();
        setVendors(data);
        console.log("Vendedores:", data);
      } catch (error) {
        console.error("Error al obtener los vendedores:", error);
      }
    };
    
    const obtenerClientes = async () => {
      try {
        const response = await getClientes();
        const data = await response.json();
        setClients(data);
        console.log("Clientes:", data);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };
    const obtenerItemsMenu = async () => {
      try {
        const response = await getItemMenus();
        const data = await response.json();
        setItemMenus(data);
        console.log("Items del menu:", data);
      } catch (error) {
        console.error("Error al obtener los items del menu:", error);
      }
    };
    obtenerVendedores();
    obtenerClientes();
    obtenerItemsMenu();
  }, []);

  useEffect(() => {
    setOrderItems([]);
    if (selectedVendor) {
    const filteredItems = itemMenus.filter(
      (item) => item.vendedor.id.toString() === selectedVendor
    );
    setItemMenusFiltered(filteredItems);
    } else {
    setItemMenusFiltered([]);
    }
  }, [selectedVendor, itemMenus]);

  const handleAddItem = () => {
    if (!selectedItem) return;

    const item = itemMenus.find((item) => item.nombre === selectedItem);
    if (item) {
      setOrderItems([...orderItems, item]);
      setSelectedItem("");
    }
  };

  const handleRemoveItem = (index) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      cliente: { id: selectedClient, nombre: clients.find((c) => c.id.toString() === selectedClient).nombre },
      vendedor: { id: selectedVendor, nombre: vendors.find((v) => v.id.toString() === selectedVendor).nombre },
      pago: null,
      estado: "RECIBIDO",
      itemsPedidos: orderItems.map((item) => ({
        itemMenu: { id: item.id, type: item.type },
      })),
    };
    console.log("orderData", orderData);
    onConfirm(orderData);
    onClose();
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Crear Pedido</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex-grow p-6 overflow-auto">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-medium text-gray-700">
                Vendedor:
              </label>
              <Select
                value={selectedVendor || ""}
                onValueChange={(value) => {
                  const vendor = vendors.find((v) => v.id.toString() === value);
                  setSelectedVendor(value);
                }}
              >
                <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                  <SelectValue placeholder="Seleccione vendedor" />
                </SelectTrigger>
                <SelectContent className="bg-gray-200 text-black">
                  {vendors.map((vendor) => (
                    <SelectItem key={vendor.id} value={vendor.id.toString()}>
                      {vendor.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-gray-700">
                Cliente:
              </label>
              <Select value={selectedClient} onValueChange={(value) => {
                const client = clients.find((c) => c.id.toString() === value);
                setSelectedClient(value);
              }
              }>
                <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                  <SelectValue placeholder="Seleccione cliente" />
                </SelectTrigger>
                <SelectContent className="bg-gray-200 text-black">
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id.toString()}>
                      {client.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-end gap-4">
            <div className="flex-grow space-y-2">
              <label className="block font-medium text-gray-700">
                Item Menu:
              </label>
              <Select value={selectedItem} onValueChange={setSelectedItem}>
                <SelectTrigger className="w-full border-gray-300 bg-gray-200 text-black">
                  <SelectValue placeholder="Seleccione item" />
                </SelectTrigger>
                <SelectContent className="bg-gray-200 text-black">
                  {itemMenusFiltered.map((item) => (
                    <SelectItem key={item.id} value={item.nombre}>
                      {item.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button
              type="button"
              onClick={handleAddItem}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar
            </button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Precio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Vendedor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Categoria
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Apto Vegano
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Apto Celiaco
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Eliminar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.precio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.vendedor.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.categoria.descripcion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.aptoVegano ? "Sí" : "No"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.aptoCeliaco ? "Sí" : "No"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-600 hover:text-red-900 bg-gray-300"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default CreateOrderForm;
