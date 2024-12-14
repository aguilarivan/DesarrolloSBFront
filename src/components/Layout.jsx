import React from 'react';
import SidebarNav from './SidebarNav';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 w-screen">
      <SidebarNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default Layout;

