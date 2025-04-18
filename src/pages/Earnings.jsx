import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

// Mock chart component (replace with actual chart library)
const ChartPlaceholder = ({ height = "h-64", title }) => (
  <div className={`${height} flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg border border-dashed border-gray-300 dark:border-gray-600`}>
    <div className="text-center p-6">
      <TrendingUp className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-2" />
      <p className="text-gray-600 dark:text-gray-400">{title}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
        Use Chart.js or Recharts to implement actual charts
      </p>
    </div>
  </div>
);

const Earnings = () => {
  const { userData, earningsData } = useAppContext();
  const [period, setPeriod] = useState('monthly');
  
  // Calculate totals
  const totalEarnings = earningsData.reduce((total, month) => total + month.amount, 0);
  const thisMonth = earningsData[earningsData.length - 1].amount;
  const lastMonth = earningsData[earningsData.length - 2].amount;
  const percentChange = ((thisMonth - lastMonth) / lastMonth * 100).toFixed(1);
  
  // Monthly transaction history
  const transactions = [
    { id: 1, date: '2023-06-25', type: 'ROI', amount: '₹1,500', status: 'Completed' },
    { id: 2, date: '2023-06-20', type: 'Referral Bonus', amount: '₹800', status: 'Completed' },
    { id: 3, date: '2023-06-18', type: 'Level Bonus', amount: '₹350', status: 'Completed' },
    { id: 4, date: '2023-06-10', type: 'ROI', amount: '₹1,500', status: 'Completed' },
    { id: 5, date: '2023-06-05', type: 'Referral Bonus', amount: '₹500', status: 'Completed' },
    { id: 6, date: '2023-05-25', type: 'ROI', amount: '₹1,500', status: 'Completed' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Earnings</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1 inline-flex">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              period === 'weekly' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setPeriod('weekly')}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              period === 'monthly' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              period === 'yearly' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setPeriod('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Earnings</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">₹{totalEarnings.toLocaleString()}</h3>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUpRight size={14} />
                <span className="text-xs font-medium ml-1">{percentChange}% from last month</span>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-500 dark:text-green-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Referral Earnings</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">₹5,000</h3>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUpRight size={14} />
                <span className="text-xs font-medium ml-1">12% from last month</span>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{period.charAt(0).toUpperCase() + period.slice(1)} ROI</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">₹{thisMonth.toLocaleString()}</h3>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUpRight size={14} />
                <span className="text-xs font-medium ml-1">{percentChange}% from previous {period}</span>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-purple-500 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Earnings Overview</h2>
            <select className="text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>
          <ChartPlaceholder title="Earnings chart by month/year" />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Earnings Breakdown</h2>
          <ChartPlaceholder height="h-56" title="Pie chart of earning sources" />
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Direct Referrals</span>
              </div>
              <span className="text-sm font-medium">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Monthly ROI</span>
              </div>
              <span className="text-sm font-medium">30%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Team Bonus</span>
              </div>
              <span className="text-sm font-medium">15%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Other</span>
              </div>
              <span className="text-sm font-medium">10%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{transaction.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">+{transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
