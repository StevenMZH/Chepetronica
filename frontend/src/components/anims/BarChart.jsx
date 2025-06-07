import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ene", ingresos: 400 },
  { name: "Feb", ingresos: 600 },
  { name: "Mar", ingresos: 800 },
  { name: "Abr", ingresos: 700 },
  { name: "May", ingresos: 900 },
  { name: "Jun", ingresos: 1100 },
];

export default function AreaChartGradient() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
        >
          <defs>
            <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#587" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#777" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ingresos"
            stroke="#587"
            fillOpacity={1}
            fill="url(#colorIngresos)"
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
