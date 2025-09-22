import { SearchIcon } from "lucide-react"
import { Input } from "../ui/input"

const AppSearchInput = ({ placeholder, handleSearch }: { placeholder: string, handleSearch: (value: string) => void }) => {
  return (
    <div className="relative max-w-[400px] w-full">
        <Input className="p-[10px] pl-[40px] rounded-[11px] w-full max-w-[400px]" placeholder={placeholder} onChange={(e) => handleSearch(e.target.value)}  />
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default AppSearchInput;