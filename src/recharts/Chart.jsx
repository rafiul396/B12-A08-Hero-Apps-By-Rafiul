import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ singleApp }) => {
  if (!singleApp || !singleApp.ratings) return null;

  const data = singleApp.ratings.map((rating) => ({
    name: rating.name,
    count: rating.count,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-300 rounded-md shadow">
          <p className="font-semibold">{label}</p>
          <p>{`Total: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <h2 className="text-xl font-semibold mb-4 ml-4 text-[#001931]">
        Ratings
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="count" barSize={25} fill="#FF8811" radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
