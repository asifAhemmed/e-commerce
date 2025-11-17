import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="lg:mx-8 max-xl:hidden flex items-center bg-white px-4 h-10 rounded-sm flex-1">
      <Search size={16} className="cursor-pointer mr-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search something..."
        className="w-full outline-none text-sm bg-transparent"
      />
    </div>
  );
};

export default Searchbar;
