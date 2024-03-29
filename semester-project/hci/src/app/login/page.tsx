import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white text-white my-auto">
      <div className="max-w-md w-full p-8 bg-french-gray rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Login Page</h1>
        <form className="flex flex-col">
          <label className="text-sm mb-2 font-bold">Username:</label>
          <input
            type="text"
            className="p-2 bg-gray-700 rounded-md"
            placeholder="Enter your username"
          />

          <label className="text-sm my-2 font-bold">Password:</label>
          <input
            type="password"
            className="p-2 bg-gray-700 rounded-md"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md transition-all duration-300 mt-10 font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
