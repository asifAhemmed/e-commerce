import { useContext, useEffect, useState } from "react";
import dropDownIcon from "../assets/icons/dropdown_icon.png";
import Title from "../components/Title";
import { productContext } from "../context";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce.js";

const Collection = () => {
  const { data,query } = useContext(productContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [category, setCategory] = useState([]);
  const [order, setOrder] = useState("relevant");
  const searchQuery = useDebounce(query, 500);

  const handleCategory = (e) => {
    if (category.indexOf(e.target.value) === -1) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
  };

  const handleFilter = () => {
    const copyData = [...data];
    if (category.length === 0) return setFilteredData(copyData);
    const filtered = copyData.filter(
      (item) => category.indexOf(item.category) !== -1
    );
    setFilteredData(filtered);
  };

  const handleSorting = () => {
    const copyData = [...filteredData];
    if (order === "low-to-high") {
      setFilteredData(copyData.sort((a, b) => a.price - b.price));
    } else if (order === "high-to-low") {
      setFilteredData(copyData.sort((a, b) => b.price - a.price));
    } else {
      setFilteredData(copyData);
    }
  };

  const handleSearch = () => {
    const copyData = [...filteredData];
    if(searchQuery){
        const filtered = copyData.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredData(filtered);
    }else{
        setFilteredData(data);
    }

  }

  useEffect(() => {
    setFilteredData(data);
  },[]);

  useEffect(() => {
    handleFilter();
  }, [category]);

  useEffect(() => {
    handleSorting();
  }, [order]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  return (
    <div>
      <SearchBar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              className={`h-3  ${showFilter ? "rotate-90" : "rotate-90"}`}
              src={dropDownIcon}
              alt="dropDownIcon"
            />
          </p>
          {showFilter && (
            <div className="border border-gray-300 pl-5 py-3 mt-6">
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm  font-light text-gray-700">
                <p className="flex gap-2">
                  <input
                    onChange={(e) => handleCategory(e)}
                    type="checkbox"
                    value={"electronics"}
                  />
                  Electronics
                </p>
                <p className="flex gap-2">
                  <input
                    onChange={(e) => handleCategory(e)}
                    type="checkbox"
                    value={"jewelery"}
                  />
                  Jewelery
                </p>
                <p className="flex gap-2">
                  <input
                    onChange={(e) => handleCategory(e)}
                    type="checkbox"
                    value={"men's clothing"}
                  />
                  Mens clothing
                </p>
                <p className="flex gap-2">
                  <input
                    onChange={(e) => handleCategory(e)}
                    type="checkbox"
                    value={"women's clothing"}
                  />
                  Womens clothing
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1="ALL" text2="COLLECTIONS"></Title>
            <select
              onChange={(e) => setOrder(e.target.value)}
              className="border-2 border-gray-300 px-2 text-sm"
            >
              <option value="relevant">Relevant</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredData.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
