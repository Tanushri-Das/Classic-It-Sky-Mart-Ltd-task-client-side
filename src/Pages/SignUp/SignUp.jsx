import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);

    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          console.log("user profile info updated");
          const saveUser = { name: data.name, email: data.email };
          fetch("https://classic-it-task-server-side.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "Good job!",
                  text: "Congratulations! Sign Up Successfully!",
                  icon: "success",
                  timer: 1500, 
                  showConfirmButton: false,
                });

                navigate("/");
              }
            });
        })
        .catch((error) => console.error(error));
    });
  };

  return (
    <div className="flex justify-center items-center my-12 mx-8 sm:mx-0">
      <div className="w-full flex-shrink-0 sm:max-w-lg bg-base-100 mx-auto">
        <form
          className="form p-6 bg-white rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-black text-center text-3xl mb-6 font-bold">
            Registration
          </h1>
          <div className="mb-2">
            <label className="block text-black text-lg font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="form-input"
            />
            {errors.name && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-black text-lg font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="form-input"
            />
            {errors.email && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-black text-lg font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                  maxLength: 10,
                })}
                className="form-input w-full"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                {errors.password?.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                Password must be at least 6 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                Password must not exceed 10 characters
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="block text-black text-lg font-semibold mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
                className="form-input w-full"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                {errors.confirmPassword.message}
              </span>
            )}

            {!passwordsMatch && (
              <span className="text-red-600 mt-1 text-[16px] font-medium">
                Password and Confirm Password do not match
              </span>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button className="login-btn text-lg font-semibold text-white px-8 py-3">
              Registration
            </button>
          </div>
          <p className="text-center login-account text-[16px] font-medium mt-4">
            Already have an account ?
            <Link to="/login" className="create-account text-blue-600 ms-1">
              Login
            </Link>
          </p>
          <p className="text-center text-[16px] font-semibold my-3">Or</p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
