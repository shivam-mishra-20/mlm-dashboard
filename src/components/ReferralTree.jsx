import React from 'react';
import { useAppContext } from '../context/AppContext';

const ReferralTree = () => {
  const { teamData } = useAppContext();
  
  // Group data by level
  const levelData = teamData.reduce((acc, member) => {
    if (!acc[member.level]) acc[member.level] = [];
    acc[member.level].push(member);
    return acc;
  }, {});
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow overflow-hidden">
      <h2 className="text-lg font-semibold mb-4 text-white dark:text-white">Referral Network</h2>
      
      <div className="overflow-x-auto pb-4 -mx-4 sm:mx-0">
        <div className="min-w-[600px] px-4 sm:px-0">
          {/* You (root) */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
              You
            </div>
          </div>
          
          {/* Level 1 */}
          {levelData[1] && levelData[1].length > 0 && (
            <>
              <div className="w-1 h-6 sm:h-8 bg-gray-300 dark:bg-gray-600 mx-auto mb-3 sm:mb-4"></div>
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                  {levelData[1].map(member => (
                    <div key={member.id} className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-medium border-2 border-white dark:border-gray-800 shadow-md mx-auto">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{member.earnings}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {/* Level 2 */}
          {levelData[2] && levelData[2].length > 0 && (
            <>
              <div className="w-1 h-6 sm:h-8 bg-gray-300 dark:bg-gray-600 mx-auto mb-3 sm:mb-4"></div>
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  {levelData[2].map(member => (
                    <div key={member.id} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-medium border-2 border-white dark:border-gray-800 shadow-sm mx-auto">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="mt-1 text-xs font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500 dark:text-white"><span className='text-white'>{member.earnings}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {/* Level 3+ */}
          {levelData[3] && levelData[3].length > 0 && (
            <>
              <div className="w-1 h-6 sm:h-8 bg-gray-300 dark:bg-gray-600 mx-auto mb-3 sm:mb-4"></div>
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {levelData[3].map(member => (
                    <div key={member.id} className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-gray-800 shadow-sm mx-auto">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="mt-1 text-xs font-medium">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 sm:mt-6 justify-center text-xs sm:text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-1 sm:mr-2"></div>
          <span className="text-gray-600 dark:text-gray-400">You</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1 sm:mr-2"></div>
          <span className="text-gray-600 dark:text-gray-400">Level 1</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1 sm:mr-2"></div>
          <span className="text-gray-600 dark:text-gray-400">Level 2</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-1 sm:mr-2"></div>
          <span className="text-gray-600 dark:text-gray-400">Level 3+</span>
        </div>
      </div>
    </div>
  );
};

export default ReferralTree;