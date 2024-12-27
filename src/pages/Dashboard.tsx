import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex flex-col space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-lg font-medium">
          Explore your personalized dashboard designed for your role: <span className="font-semibold capitalize">{user?.role}</span>.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-500 text-white p-4">
            <h2 className="text-xl font-bold">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-3">
            <button className="w-full text-left px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition">
              ➤ View Profile
            </button>
            <button className="w-full text-left px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 transition">
              ➤ Check Notifications
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple-500 text-white p-4">
            <h2 className="text-xl font-bold">Recent Activity</h2>
          </div>
          <div className="p-4">
            <p className="text-gray-600">No recent activity</p>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-500 text-white p-4">
            <h2 className="text-xl font-bold">System Status</h2>
          </div>
          <div className="p-4 flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-800">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
