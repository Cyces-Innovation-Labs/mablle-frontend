const ApiKeySkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 border rounded-lg animate-pulse"
        >
          <div className="h-10 bg-gray-200 rounded w-48"></div>
          <div className="h-10 bg-gray-200 rounded flex-1"></div>
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiKeySkeleton;
