import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import starIcon from "../assets/icons/star_icon.png";
import starDullIcon from "../assets/icons/star_dull_icon.png";
import RelatedProducts from "../components/RelatedProducts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { productContext } from "../context";

const fetchData = async ({ queryKey }) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/${queryKey[1]}`
  );
  return res.data;
};
const Product = () => {
  const { id } = useParams();
  const {cartItems, setCartItems} = useContext(productContext);
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchData,
  });

  const handleAddToCart = () => {
    toast.success("Product added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const found = cartItems.find((item) => item.id === data.id);
    if (found){
      setCartItems(cartItems.map((item) => item.id === data.id ? {...item, quantity: item.quantity + 1} : item));
    }else{

        setCartItems([...cartItems, {...data, quantity: 1}]);
    }
  };

  if (isLoading) return <div className="text-3xl">Loading...</div>;
  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex justify-around items-center sm:gap-12 flex-col sm:flex-row">
        <div className="w-9/12 sm:w-[80%]">
          <img className="w-3/4 h-auto" src={data.image} alt="image" />
        </div>
        <div>
          <h1 className="text-2xl font-medium mt-2">{data.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <img src={starIcon} alt="starIcon" className="w-3" />
            <img src={starIcon} alt="starIcon" className="w-3" />
            <img src={starIcon} alt="starIcon" className="w-3" />
            <img src={starIcon} alt="starIcon" className="w-3" />
            <img src={starDullIcon} alt="starDullIcon" className="w-3" />
            <p className="pl-2">({data.rating.count})</p>
          </div>
          <p className="mt-5 text-3xl font-medium">${data.price}</p>
          <p className="text-lg font-semibold">Category: {data.category}</p>
          <p className="mt-5 text-gray-500 md:w-4/5"> {data.description}</p>
          <button onClick={()=>handleAddToCart()} className="bg-black active:bg-gray-700 text-white text-sm px-8 py-3 mt-5 cursor-pointer">ADD TO CART</button>
          <ToastContainer />
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original product</p>
                <p>Cash on delivery on this product is available</p>
                <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews({data.rating.count})</p>
        </div>
        <div className="flex flex-col gap-4 border  px-6 py-6 text-sm text-gray-500">
            <p>An e-commerce website is a digital platform that enables businesses to sell products or services online, providing customers with the convenience of shopping from anywhere at any time</p>
            <p>These websites typically feature product catalogs, secure payment gateways, shopping carts, and user-friendly interfaces to enhance the buying experience.</p>
        </div>
      </div>
      <RelatedProducts category={data.category}/>
    </div>
  );
};

export default Product;
