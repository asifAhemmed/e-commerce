import { useContext } from "react";
import Title from "./Title";
import { productContext } from "../context";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { data,isLoading }= useContext(productContext);
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1="LATEST" text2="COLLECTION"/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {
                isLoading ? (<p className="text-3xl">Loading...</p>) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
                {
                    data.slice(0,8).map((product) => <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />)
                }
            </div>
                )
            }
        </div>
    );
};

export default LatestCollection;