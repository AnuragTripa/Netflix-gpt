import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && <input
          className="p-4 my-4 w-full bg-gray-700 "
          type="text"
          placeholder="Enter full name"
        />
        }
        <input
          className="p-4 my-4 w-full bg-gray-700 "
          type="text"
          placeholder="Enter email"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="passoword"
          placeholder="Enter the Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full cursor-pointer rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm ? "New to Netflix? Sign Up now" : "Allready a member"}
        </p>
      </form>
    </div>
  );
};

export default Login;
