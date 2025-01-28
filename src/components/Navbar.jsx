import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import cartIcon from "../assets/icons/cart_icon.png";
import menuIcon from "../assets/icons/menu_icon.png";
import dropDownIcon from "../assets/icons/dropdown_icon.png";
import { useContext, useState } from "react";
import { productContext } from "../context";
import { logout } from "../_auth/firebase";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { cartItems, users,setUsers } = useContext(productContext);
  const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();
  const handleLogin = () => {navigate("/login");}
  const handleLogOut = async() => {
     await logout();
    const newUsers = users.filter((user) => user.email !== users[0].email);
    setUsers(newUsers);
  }
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-lg  text-gray-700">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-gray-300 pb-2" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-gray-300 pb-2" : ""
          }
          to="/collection"
        >
          Collection
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-gray-300 pb-2" : ""
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-gray-300 pb-2" : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <div>
          {users.length > 0 ? (
            <button onClick={handleLogOut} className="border border-black px-1 sm:px-4 py-1 text-xs sm:text-sm  hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              Log out
            </button>
          ) : (
            <button onClick={handleLogin} className="border border-black px-1 sm:px-4 py-1 sm:text-sm  hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              Login
            </button>
          )}
        </div>
        <Link className="relative" to="/cart">
          <img className="w-5 min-w-5" src={cartIcon} alt="cartIcon" />
          <p className="absolute bottom-[-5px] right-[-5px] w-4 text-center leading-4  bg-black text-white aspect-square rounded-full flex text-xs">
            {quantity}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={menuIcon}
          alt="menuIcon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`absolute top-0 right-o bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={dropDownIcon}
              alt="dropDownIcon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
