import React from 'react';

const Card = ({ name, earnings, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-orange-800">{name}</h3>
          <p className="text-orange-600 font-bold text-xl">{earnings}</p>
        </div>
        {icon && <div className="text-orange-500 text-2xl">{icon}</div>}
      </div>
    </div>
  );
};

export default Card;