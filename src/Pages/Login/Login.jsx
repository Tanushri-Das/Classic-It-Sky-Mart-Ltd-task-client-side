import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await login(email, password);
      const user = result.user;

      Swal.fire({
        title: "Good job!",
        text: "You Login Successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        Swal.fire({
          title: "Incorrect Password",
          text: "Please enter the correct password.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      } else {
        console.error("Login error:", error);
        Swal.fire({
          title: "Login Error",
          text: "An unexpected error occurred. Please try again later.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    }
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    console.log(email);
  };
  return (
    <div className="flex justify-center items-center my-12 mx-8 sm:mx-0">
      <div className="w-full flex-shrink-0 sm:max-w-lg bg-white mx-auto">
        <form onSubmit={handleLogin} className="form p-6 bg-white rounded-xl">
          <h1 className="text-black text-center text-3xl mb-6 font-bold">
            Login
          </h1>
          <div className="mb-3">
            <label className="block text-black text-lg font-semibold mb-1">
              Email
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <label className="block text-black text-lg font-semibold">
                Password
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="form-input w-full"
              />

              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-black text-[16px] font-semibold mb-1">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="type the captcha above"
              className="form-input"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              disabled={disabled}
              className="login-btn text-lg font-semibold text-white px-8 py-3"
            >
              Login
            </button>
          </div>
          <p className="text-center login-account text-[16px] font-medium mt-4">
            Don’t have an account ?
            <Link to="/signup" className="create-account text-blue-600 ms-1">
              Create an account
            </Link>
          </p>
          <p className="text-center text-[16px] font-semibold my-3">Or</p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
