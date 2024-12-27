import React from 'react';
import { Bell, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const NotificationCenter: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications.items);

  return (
    <div className="fixed right-4 top-20 w-80 bg-white rounded-lg shadow-lg z-50">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold">Notifications</h2>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 border-b hover:bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className="flex-1">
                <p className="font-medium">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <span className="text-xs text-gray-500">
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;