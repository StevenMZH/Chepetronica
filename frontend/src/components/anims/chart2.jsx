import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 'Q1', frontend: 400, backend: 240, devops: 140 },
  { name: 'Q2', frontend: 300, backend: 139, devops: 200 },
  { name: 'Q3', frontend: 200, backend: 980, devops: 100 },
  { name: 'Q4', frontend: 278, backend: 390, devops: 80 },
];

export default function StackedBarChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="frontend" stackId="a" fill="#8884d8" animationDuration={1000} />
          <Bar dataKey="backend" stackId="a" fill="#82ca9d" animationDuration={1200} />
          <Bar dataKey="devops" stackId="a" fill="#ffc658" animationDuration={1400} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
