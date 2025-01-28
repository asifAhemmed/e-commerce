import { useContext } from "react";
import searchIcon from "../assets/icons/search_icon.png";
import { productContext } from "../context";


const SearchBar = () => {
    const {query,setQuery} = useContext(productContext);
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product name"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img className="w-4" src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
