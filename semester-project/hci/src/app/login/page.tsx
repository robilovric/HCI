import React from "react";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white text-white">
      <div className="max-w-md w-full p-8 bg-black rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Login Page</h1>
        <form className="flex flex-col space-y-4">
          <label className="text-sm">Username:</label>
          <input
            type="text"
            className="p-2 bg-gray-700 rounded-md"
            placeholder="Enter your username"
          />

          <label className="text-sm">Password:</label>
          <input
            type="password"
            className="p-2 bg-gray-700 rounded-md"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;