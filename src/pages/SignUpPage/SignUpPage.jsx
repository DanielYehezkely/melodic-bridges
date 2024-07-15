import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuthContext";

const SignUpPage = () => {
  const { signUpWithEmail, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUpWithEmail(email, password);
    navigate("/");
  };

 
  return (
    <div className="bg-orange-50 p-10 h-[86vh] flex flex-col items-center justify-center text-white text-xl">
      <div className="bg-[#1F2937] h-3/4 w-1/2 rounded-[15px] flex flex-col items-center justify-center p-5">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <form className="w-full max-w-sm" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-5 block w-full text-black border-gray-300 rounded-md shadow-sm focus:border-teal-700"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-5 block text-black w-full border-gray-300 rounded-md shadow-sm focus:border-teal-700"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-red-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 cursor-pointer hover:text-red-700">
          Already have an account?{" "}
          <Link to="/app/login" className=" font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
