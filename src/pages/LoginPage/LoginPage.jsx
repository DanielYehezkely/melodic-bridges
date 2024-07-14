import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../../context/useAuthContext"

const LoginPage = () => {
 const { loginWithEmail, loading, error } = useAuth();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
   const navigate = useNavigate();

 const handleLogin = async (e) => {
   e.preventDefault();
   await loginWithEmail(email, password);
   navigate("/");
 };

  return (
    <div className="bg-orange-50 p-10 h-[86vh] flex flex-col items-center justify-center">
      <div className="bg-slate-300 h-3/4 w-1/2 rounded-[15px] flex flex-col items-center justify-center p-5 ">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-700"
              required
              />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold"
              >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Entre your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-700"
              required
              />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-teal-950 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/app/signup" className="text-teal-950 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
