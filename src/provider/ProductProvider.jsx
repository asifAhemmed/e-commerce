import { useState } from "react";
import useData from "../hooks/useData";
import { productContext } from "./../context/index";

const ProductProvider = ({ children }) => {
  const { data, isLoading } = useData();
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [users , setUsers] = useState([]);

  return (
    <productContext.Provider value={{ data, isLoading, query, setQuery,cartItems,setCartItems,users, setUsers }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
