import AppText from "@/components/Commmon/AppText";

interface TaskUpdateItem {
  label: string;
  count: number;
  color: "red" | "orange" | "purple";
}

interface TasksUpdatesProps {
  items: TaskUpdateItem[];
}

const TasksUpdates = ({ items }: TasksUpdatesProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-500";
      case "orange":
        return "bg-orange-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 shadow-sm rounded-[8px] py-6 px-5"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${getColorClasses(item.color)}`} />
              <AppText type="span" className="text-md text-primary font-bold">
                {item.label}
              </AppText>
            </div>
            <AppText type="span" className="text-sm font-normal text-primary">
              {item.count}
            </AppText>
          </div>
        ))}
      </div>
  );
};

export default TasksUpdates;

