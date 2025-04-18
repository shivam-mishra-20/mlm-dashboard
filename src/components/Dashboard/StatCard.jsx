const StatCard = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900">{value}</h3>
          {trend && (
            <div className="flex items-center mt-2 text-orange-500">
              <ArrowUpRight size={14} />
              <span className="text-xs font-medium ml-1">{trend}</span>
            </div>
          )}
        </div>
        <div className="bg-orange-50 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};