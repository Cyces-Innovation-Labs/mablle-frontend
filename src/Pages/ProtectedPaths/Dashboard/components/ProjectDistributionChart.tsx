import AppText from "@/components/Commmon/AppText";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { useMemo, memo } from "react";

interface ProjectDistributionData {
  category: string;
  value: number;
  maxValue: number;
  color: string;
}

interface ProjectDistributionChartProps {
  data?: ProjectDistributionData[];
}

const ProjectDistributionChart = memo(({ data }: ProjectDistributionChartProps) => {
  const defaultData: ProjectDistributionData[] = useMemo(() => [
    { category: "NL", value: 220, maxValue: 500, color: "#3B82F6" },
    { category: "QL", value: 380, maxValue: 500, color: "#8B5CF6" },
    { category: "BK", value: 320, maxValue: 500, color: "#F59E0B" },
    { category: "CF", value: 260, maxValue: 500, color: "#F97316" },
    { category: "FC", value: 200, maxValue: 500, color: "#10B981" },
    { category: "HO", value: 240, maxValue: 500, color: "#92400E" },
  ], []);

  const chartData = data || defaultData;

  return (
    <div className="space-y-4">
      
      
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="relative">
        <AppText type="h3" className="text-sm font-bold text-gray-900">
        Project Status-wise Distribution
      </AppText>
          
          
          <ResponsiveContainer width="100%" height={220}>
            <BarChart 
              data={chartData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="category" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                domain={[0, 500]}
                ticks={[0, 100, 200, 300, 400, 500]}
              />
              <Bar 
                width={25}
                dataKey="value" 
                radius={[4, 4, 0, 0]}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
});

export default ProjectDistributionChart;
