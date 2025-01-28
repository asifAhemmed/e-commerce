import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    if (!res.status === 200) throw new Error("Failed to fetch products");
    return res.data;
  };
const useData = () => {
        const { data = [], isLoading, } = useQuery({
          queryKey: ["products"],
          queryFn: fetchProducts,
        });


    return { data, isLoading }
}

export default useData;