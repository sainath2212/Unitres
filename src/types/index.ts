export type Role = 'user' | 'manager' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon: string;
  roles: Role[];
}

export interface LayoutConfig {
  showHeader: boolean;
  showFooter: boolean;
  showSidebar: boolean;
}