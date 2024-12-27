import React from 'react';
import { useSelector } from 'react-redux';
import { Bell, User, Menu } from 'lucide-react';
import { RootState } from '../../store';
import GlobalSearch from '../search/GlobalSearch';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-800 shadow-md text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-2 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="p-3 rounded-full bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Toggle sidebar"
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
              <h1 className="text-2xl font-extrabold">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <GlobalSearch />
              </div>
              <button className="p-3 rounded-full bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
                <Bell className="h-6 w-6 text-white" />
              </button>
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-white" />
                <span className="hidden sm:inline-block text-lg font-medium">
                  {user?.name}
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block">
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;