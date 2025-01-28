import { useContext } from "react";
import Title from "../components/Title";
import { productContext } from "../context";
import binIcon from "../assets/icons/bin_icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(productContext);
  const handleRemoveFromCart = (id) => {
    toast.success("Product removed from cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const found = cartItems.find((item) => item.id === id);
    if (found.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      const filtered = cartItems.filter((item) => item.id !== id);
      setCartItems(filtered);
    }
  };
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartItems.map((item) => (
          <div
            className="py-4 border-t border-b text-gray-700 sm:grid sm:grid-cols-[3fr_2fr_2fr_2fr] flex justify-between  items-center gap-4"
            key={item.id}
          >
            <div className="flex items-center gap-6 w-1/2 sm:ml-32">
              <img className="w-16 sm:w-20" src={item.image} alt="" />
            </div>
            <div>
              <p className="text-xs md:text-lg font-medium">{item.title}</p>
              <div className="flex items-center gap-5 mt-2">
                <p>${item.price}</p>
              </div>
            </div>
            <div className="sm:ml-12">
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="sm:ml-12">
              <img
                onClick={() => handleRemoveFromCart(item.id)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={binIcon}
                alt="binIcon"
              />
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="flex justify-center">
          <Link to="/place-order">
            <button className="border border-black px-8 py-4 text-sm  hover:bg-black hover:text-white transition-all duration-500 mt-10 cursor-pointer">
              Place order
            </button>
          </Link>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
