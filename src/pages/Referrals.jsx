import React from 'react';
import Card from "../components/Card";
import { UserPlus, Share2, Users } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Referrals = () => {
  const { userData, teamData } = useAppContext();
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(userData.referralLink);
    // Add toast notification here in a real app
    alert("Referral link copied!");
  };
  
  // Filter direct referrals (level 1)
  const directReferrals = teamData.filter(member => member.level === 1);
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Referrals</h1>
      
      {/* Referral stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card name="Direct Referrals" earnings={`${directReferrals.length}`} icon={<UserPlus />} />
        <Card name="Team Size" earnings={userData.teamSize.toString()} icon={<Users />} />
        <Card name="Referral Earnings" earnings="₹5,000" icon={<Share2 />} />
      </div>
      
      {/* Referral link */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Referral Link</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600 overflow-x-auto">
            <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">{userData.referralLink}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
          >
            Copy
          </button>
        </div>
        
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Share this link with friends and earn 10% commission on their first deposit!
        </div>
      </div>
      
      {/* Referral list */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Direct Referrals</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Earnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {directReferrals.length > 0 ? (
                directReferrals.map((member) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{member.joinDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">{member.earnings}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        member.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {member.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    No direct referrals yet. Share your link to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
