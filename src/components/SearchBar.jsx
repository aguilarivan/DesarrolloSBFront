import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
return (
    <div className="flex items-center space-x-4">
        <label htmlFor="search" className="text-gray-700">Buscador:</label>
        <input
            id="search"
            type="text"
            placeholder="Ingrese el nombre del plato..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-3 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-black"
        />
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Buscar
        </button> */}
    </div>
    );
};

export default SearchBar;

