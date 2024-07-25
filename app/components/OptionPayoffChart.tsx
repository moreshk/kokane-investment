import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Area,
} from "recharts";

export const OptionPayoffChart = ({ type }: { type: "call" | "put" }) => {
    const strikePrice = type === "call" ? 50000 : 500000;
    const premium = type === "call" ? 2000 : 20000;
  
    const data =
      type === "call"
        ? [
            { price: 45000, profit: -premium },
            { price: strikePrice, profit: -premium },
            { price: 55000, profit: 5000 - premium },
            { price: 60000, profit: 10000 - premium },
          ]
        : [
            { price: 400000, profit: 100000 - premium },
            { price: 450000, profit: 50000 - premium },
            { price: strikePrice, profit: -premium },
            { price: 550000, profit: -premium },
            { price: 600000, profit: -premium },
          ];
  
    const color = type === "call" ? "#4C51BF" : "#2F855A";
  
    return (
      <div className="w-full h-96">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="price"
              type="number"
              domain={["dataMin", "dataMax"]}
              tickFormatter={(value) => `₹${value.toLocaleString()}`}
            />
            <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
            <Tooltip
              formatter={(value: number) => `₹${value.toLocaleString()}`}
              labelFormatter={(value) => `Price: ₹${value.toLocaleString()}`}
            />
            <ReferenceLine
              x={strikePrice}
              stroke="green"
              label={{ value: "Strike Price", position: "top" }}
            />
            <ReferenceLine
              y={0}
              stroke="red"
              label={{ value: "Break-even", position: "right" }}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke={color}
              fill={color}
              fillOpacity={0.3}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };