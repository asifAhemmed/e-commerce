import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../_auth/firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (formData) => {
    if (formData?.email && formData?.password && formData?.name) {
      toast.success("Registration successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const user = await createUser(formData.email, formData.password);
      console.log(user);
      navigate("/login");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
        })}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        type="text"
        placeholder="Name"
        id="email"
      />
      {errors?.email && (
        <div className="text-red-500">{errors?.name?.message}</div>
      )}
      <input
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
        })}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        type="email"
        placeholder="Email"
        id="email"
      />
      {errors?.email && (
        <div className="text-red-500">{errors?.email?.message}</div>
      )}
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
      {errors?.password && (
        <div className="text-red-500 text-start">{errors?.password?.message}</div>
      )}

      <div className="w-full flex  justify-between text-sm mt-[-8px]">
        <p>Already have an account?</p>
        <Link to="/login" className="cursor-pointer">
          Login here{" "}
        </Link>
      </div>
      <div>
        <button
          type="submit"
          className="border border-black px-4 py-2 text-sm  hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
        >
          Sign up
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default SignUp;
