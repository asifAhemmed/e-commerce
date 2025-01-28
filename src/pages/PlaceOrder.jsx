import Title from "../components/Title";
import stripeLogo from "../assets/logo/stripe_logo.png";
import razorLogo from "../assets/logo/razorpay_logo.png";
import { productContext } from "../context";
import { useContext } from "react";

const PlaceOrder = () => {
    const {cartItems} = useContext(productContext);
    const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    if(cartItems.length === 0) return <div className="flex justify-center items-center text-3xl text-center text-gray-700">Your cart is empty</div>;
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1="DELIVERY" text2="INFORMATION"/>
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="fname" placeholder="First name" id="fname" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="lname" placeholder="First name" id="lname" />
                </div>
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" name="email" placeholder="Enter your email" id="email" />
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="street" placeholder="Street" id="street" />
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="city" placeholder="City" id="city" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="state" placeholder="State" id="state" />
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="zipcode" placeholder="Zip code" id="zipcode" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" name="country" placeholder="Country" id="country" />
                </div>
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" name="phone" placeholder="Phone" id="phone" />
            </div>
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <div className="text-2xl">
                    <Title text1="ORDER" text2="SUMMARY"/>
                    </div>
                    <div className="flex justify-between border-b py-3 border-gray-500">
                    <p className="text-gray-500">Subtotal</p>
                    <p className="text-gray-500">${subTotal}</p>
                    </div>
                    <div className="flex justify-between border-b py-3 border-gray-500">
                    <p className="text-gray-500">Shipping Fee</p>
                    <p className="text-gray-500">$10</p>
                    </div>
                    <div className="flex justify-between  py-3">
                    <p className="text-gray-500 font-semibold">Total</p>
                    <p className="text-gray-500">${subTotal + 10}</p>
                    </div>
                        
                </div>
                <div className="mt-12">
                    <Title text1="PAYMENT" text2="METHOD"/>
                    <div className="flex gap-3 flex-col lg:flex-row ">
                        <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className="min-w-3.5 h-3.5 border border-full"></p>
                            <img className="h-5 mx-4" src={stripeLogo} alt="stripeLogo" />
                        </div>
                        <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className="min-w-3.5 h-3.5 border border-full"></p>
                            <img className="h-5 mx-4" src={razorLogo} alt="razorLogo" />
                        </div>
                        <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className="min-w-3.5 h-3.5 border border-full"></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">Cash on Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;