import { useContext, useEffect, useState } from "react";
import { productContext } from "../context";
import Title from "./Title";
import ProductItem from "./ProductItem";


const RelatedProducts = ({category}) => {
    const {data} = useContext(productContext);
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = () => {
        const copyData = [...data];
        const filtered = copyData.filter(
          (item) => item.category === category
        ) ;
        setFilteredData(filtered);
      };

    useEffect(() => {
        handleFilter();
    }, [data]);

    return (
        <div className="my-24">
          <div className="text-center text-3xl py-2">
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
             {filteredData.map((product) => (
                <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
             ))}
          </div>
        </div>
    );
};

export default RelatedProducts;