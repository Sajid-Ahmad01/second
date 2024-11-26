import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function match(event) {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    localStorage.setItem("userPassword", password);
    setUserName("");
    setPassword("");
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create an Account
        </h1>
        <form onSubmit={match}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              value={password}
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
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline text-sm"
            >
              Already have an account? Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
