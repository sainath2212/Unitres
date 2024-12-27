import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User as UserIcon } from 'lucide-react';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-6 mb-8">
            <div className="bg-blue-200 p-4 rounded-full">
              <UserIcon className="w-14 h-14 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">{user?.name}</h1>
              <p className="text-lg text-gray-600">Role: <span className="font-medium text-blue-500">{user?.role}</span></p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <p className="mt-1 text-gray-900 text-lg">{user?.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700">ID</label>
              <p className="mt-1 text-gray-900 text-lg">{user?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
