import { MenuItem, Role } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'Home',
    roles: ['user', 'manager', 'admin']
  },
  {
    id: 'profile',
    title: 'Profile',
    path: '/profile',
    icon: 'User',
    roles: ['user', 'manager', 'admin']
  },
  {
    id: 'tasks',
    title: 'My Tasks',
    path: '/tasks',
    icon: 'FileText',
    roles: ['user']
  },
  {
    id: 'team',
    title: 'Team Management',
    path: '/team',
    icon: 'Users',
    roles: ['manager', 'admin']
  },
  {
    id: 'projects',
    title: 'Project Overview',
    path: '/projects',
    icon: 'BarChart',
    roles: ['manager']
  },
  {
    id: 'reports',
    title: 'Reports',
    path: '/reports',
    icon: 'FileText',
    roles: ['manager', 'admin']
  },
  {
    id: 'users',
    title: 'User Management',
    path: '/users',
    icon: 'Users',
    roles: ['admin']
  },
  {
    id: 'roles',
    title: 'Role Management',
    path: '/roles',
    icon: 'Settings',
    roles: ['admin']
  },
  {
    id: 'settings',
    title: 'System Settings',
    path: '/settings',
    icon: 'Settings',
    roles: ['admin']
  },
  {
    id: 'notifications',
    title: 'Notifications',
    path: '/notifications',
    icon: 'Bell',
    roles: ['user', 'manager', 'admin']
  },
  {
    id: 'help',
    title: 'Help',
    path: '/help',
    icon: 'HelpCircle',
    roles: ['user', 'manager', 'admin']
  }
];

export const getMenuItems = (role?: Role): MenuItem[] => {
  if (!role) return [];
  return menuItems.filter(item => item.roles.includes(role));
};