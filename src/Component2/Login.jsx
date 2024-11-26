import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  function isAthu(event) {
    console.log("Name", Name);
    console.log("Password", Password);
    event.preventDefault();
    if (
      Name === localStorage.getItem("userName") &&
      Password === localStorage.getItem("userPassword")
    ) {
      localStorage.setItem("LoggedIn", "True");
      navigate("/");
      console.log("Login successful");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h1>
        <form onSubmit={isAthu}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="text-blue-500 hover:underline text-sm"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
