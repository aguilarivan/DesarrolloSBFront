import React, { useState } from 'react';
import { PlusIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import SearchBar from '../components/SearchBar';
import MenuItemsTable from '../components/MenuItemsTable';
import Modal from '../components/Modal';
import Categories from '../components/Categories';
import CreatePlatoForm from '../components/CreatePlatoForm';
import CreateBebidaForm from '../components/CreateBebidaForm'
import { useEffect} from 'react';


const ItemMenusPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const [isCrearPlatoOpen, setIsCrearPlatoOpen] = useState(false);
  const [isCrearBebidaOpen, setIsCrearBebidaOpen] = useState(false);

  useEffect(() => {
    const obtenerItems = async () => {
      const response = await getItemMenus();
      return response;
    }
    setMenuItems(obtenerItems());
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Lista de Items Menu</h1>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-row space-x-4">
          <button 
            onClick={() => setIsCategoriesModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
          >
            <ListBulletIcon className="h-5 w-5 mr-2"/> 
            Categorías  
          </button>
          <button
          onClick={() => setIsCrearPlatoOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Crear Nuevo Plato
          </button>
          
          <button 
          onClick={() => setIsCrearBebidaOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Crear Nueva Bebida
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <MenuItemsTable items={filteredItems} />

      <Modal isOpen={isCategoriesModalOpen} onClose={() => setIsCategoriesModalOpen(false)}>
        <Categories onClose={() => setIsCategoriesModalOpen(false)}/>
      </Modal>
      <Modal isOpen={isCrearPlatoOpen} onClose={() => setIsCrearPlatoOpen(false)}>
        <CreatePlatoForm onClose={() => setIsCrearPlatoOpen(false)}/>
      </Modal>
      <Modal isOpen={isCrearBebidaOpen} onClose={() => setIsCrearBebidaOpen(false)}>
        <CreateBebidaForm onClose={() => setIsCrearBebidaOpen(false)}/>

      </Modal>
    </div>
  );
};

export default ItemMenusPage;

