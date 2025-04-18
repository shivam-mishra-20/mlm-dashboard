import React from 'react';

import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  ArrowUpRight,
  CreditCard
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ReferralTree from "../components/ReferralTree";

const StatCard = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</h3>
          {trend && (
            <div className="flex items-center mt-2 text-green-500 dark:text-green-400">
              <ArrowUpRight size={14} />
              <span className="text-xs font-medium ml-1">{trend}</span>
            </div>
          )}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full">
          {icon}

        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { userData, teamData, earningsData } = useAppContext();
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Balance" 
          value={`₹${userData.balance.toLocaleString()}`} 
          icon={<DollarSign className="h-6 w-6 text-blue-500 dark:text-blue-400" />}
          trend="5% from last month"
        />
        <StatCard 
          title="Team Size" 
          value={userData.teamSize} 
          icon={<Users className="h-6 w-6 text-blue-500 dark:text-blue-400" />}
          trend="12% from last month"
        />
        <StatCard 
          title="Monthly ROI" 
          value={`₹${userData.monthlyROI.toLocaleString()}`} 
          icon={<TrendingUp className="h-6 w-6 text-blue-500 dark:text-blue-400" />}
          trend="8% from last month"
        />
        <StatCard 
          title="Withdrawable" 
          value={`₹${userData.withdrawable.toLocaleString()}`} 
          icon={<CreditCard className="h-6 w-6 text-blue-500 dark:text-blue-400" />}
        />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Team Growth</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Chart component would go here. Install a charting library like Chart.js or Recharts.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">ROI Over Time</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Chart component would go here. Install a charting library like Chart.js or Recharts.
            </p>
          </div>
        </div>
      </div>
      
      {/* Referral Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Referral Link</h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All Referrals</button>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600 overflow-x-auto">
            <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">{userData.referralLink}</p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(userData.referralLink);
              alert('Copied to clipboard!');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
          >
            Copy Link
          </button>
        </div>
      </div>
      
      {/* Referral Network Tree */}
      <ReferralTree />
    </div>
  );
};

export default Dashboard;
