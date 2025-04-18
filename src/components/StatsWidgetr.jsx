const StatsWidget = ({ title, value, color = "blue" }) => {
    return (
      <div className={`bg-${color}-100 text-${color}-900 p-4 rounded-xl shadow-md w-full`}>
        <div className="text-sm">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    );
  };
  export default StatsWidget;
  