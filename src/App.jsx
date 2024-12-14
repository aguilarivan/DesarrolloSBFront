import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import VendedoresPage from './pages/VendedoresPage';
import ClientesPage from './pages/ClientesPage';
import ItemMenusPage from './pages/ItemMenusPage';
import PedidosPage from './pages/PedidosPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/vendedores" element={<VendedoresPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/itemmenus" element={<ItemMenusPage />} />
          <Route path="/pedidos" element={<PedidosPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

