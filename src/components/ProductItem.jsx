import { Link } from "react-router-dom";

const ProductItem = ({ id, title, price, image }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer border border-gray-200 p-4 rounded-lg flex flex-col justify-between items-center bg-gray-50"
    >
      <div className="overflow-hidden w-1/2">
        <img
          src={image}
          className="hover:scale-110 transition ease-in-out w-full"
          alt=""
        />
      </div>
      <div>
        <p className="text-sm pt-3 pb-1">{title}</p>
        <p className="text-sm font-medium">${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
