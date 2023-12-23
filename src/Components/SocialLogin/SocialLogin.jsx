import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://classic-it-task-server-side.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "Congratulations! Sign Up Successfully!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });

          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="flex justify-center items-center google-btn-div">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center p-4 border border-gray-500 rounded-full"
      >
        <div className="flex items-center justify-center bg-white rounded-full p-2">
          <FaGoogle />
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
