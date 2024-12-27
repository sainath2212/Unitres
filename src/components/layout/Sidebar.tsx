import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { getMenuItems } from '../../utils/menuConfig';
import * as Icons from 'lucide-react';

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const menuItems = getMenuItems(user?.role);

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <aside className="bg-gradient-to-b from-purple-600 to-indigo-800 text-white h-screen shadow-lg">
      <div className="p-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold">Admin Panel</h2>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-4 p-3 rounded-lg text-lg font-medium transition-all shadow-sm ${
                  isActive
                    ? 'bg-purple-700 text-white'
                    : 'text-purple-200 hover:bg-purple-700 hover:text-white'
                }`
              }
            >
              {getIcon(item.icon)}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
