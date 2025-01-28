import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginWithEmailAndPassword } from "../_auth/firebase";
import { productContext } from "../context";
import { useContext } from "react";


const Login = () => {
  const { users, setUsers } = useContext(productContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleLogin = async(formData) => {
    const data = await loginWithEmailAndPassword(formData.email, formData.password);
    if (data?.user) {
      setUsers([...users, data.user]);
      toast.success("Successfully logged in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      setError("root", { type: "random", message: "Invalid email or password" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata text-3xl">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          }
        })}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        type="email"
        placeholder="Email"
        id="email"
      />
      {errors?.email && <div className="text-red-500">{errors?.email?.message}</div>}
      <input
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        type="password"
        placeholder="Password"
        id="password"
      />
      {errors?.password && <div className="text-red-500 text-start">{errors?.password?.message}</div>}

      <div className="w-full flex  justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password ?</p>
        <Link to="/register" className="cursor-pointer">Create an account</Link>
      </div>
      {errors?.root && <div className="text-red-500">{errors?.root?.message}</div>}
      <div>
        <button type="submit" className="border border-black px-4 py-2 text-sm  hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
          Login
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;
