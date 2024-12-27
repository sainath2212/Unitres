import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Menu, X } from 'lucide-react';
import { RootState } from '../../store';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { showHeader, showFooter, showSidebar } = useSelector(
    (state: RootState) => state.layout
  );

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        {showSidebar && (
          <div
            className={`fixed inset-y-0 left-0 transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30 lg:z-0`}
          >
            <Sidebar />
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {showHeader && (
            <Header 
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          )}
          
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>

          {showFooter && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Layout;