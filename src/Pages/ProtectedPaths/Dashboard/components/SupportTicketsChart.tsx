import AppText from "@/components/Commmon/AppText";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useMemo, memo } from "react";

interface SupportTicketData {
  name: string;
  value: number;
  color: string;
  [key: string]: any;
}

interface SupportTicketsChartProps {
  data?: SupportTicketData[];
}

const SupportTicketsChart = memo(({ data }: SupportTicketsChartProps) => {
  const defaultData: SupportTicketData[] = useMemo(() => [
    { name: "Resolved Tickets", value: 22, color: "#10B981" },
    { name: "Open Tickets", value: 22, color: "#F87171" },
  ], []);

  const chartData = data || defaultData;
  const totalTickets = useMemo(() => 
    chartData.reduce((sum, item) => sum + item.value, 0), 
    [chartData]
  );

  return (
    <div>
        <AppText type="h3" className="text-sm font-semibold text-primary mb-4">
        Support Tickets
      </AppText>
    <div className="bg-white rounded-lg p-6 shadow-sm">      
      <div className="flex items-center gap-6">
        {/* Pie Chart */}
        <div className="w-[198px] h-[198px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Bubble with Number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
              <AppText type="span" className="text-sm font-bold text-gray-900">
                {totalTickets}
              </AppText>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-1 h-9 rounded" 
                style={{ backgroundColor: item.color }}
              />
              <div className="flex flex-col gap-1">
              <AppText type="span" className="text-xs text-primary">
                {item.name}
              </AppText>
              <AppText type="span" className="text-xs text-primary font-semibold">
                {item.value}
              </AppText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
});

export default SupportTicketsChart;
