import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logout, loading,error} = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-5 h-[4rem] ">
      <div className="container mt-3 mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold ">Melodic Bridges</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={` md:flex md:items-center md:w-auto text-xl ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-4 ">
            <li>
              <Link
                to="/"
                className="block md:inline-block text-white p-2 hover:border-b-2 hover:border-red-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/app"
                className="block md:inline-block text-white p-2 hover:border-b-2 hover:border-red-700"
              >
                Instruments
              </Link>
            </li>
            <li>
              <Link
                to="/app/favorites"
                className="block md:inline-block text-white p-2 hover:border-b-2 hover:border-red-700"
              >
                My Playlist
              </Link>
            </li>
            {user ? (
              <li>
                <button
                  onClick={logout}
                  className="rounded-md bg-red-600 px-4 py-2 sm:px-5 sm:py-2.5 text-lg font-medium text-white shadow hover:bg-red-500 transition-colors ease-in-out"
                  disabled={loading}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/app/login"
                    className="block md:inline-block text-white p-2 hover:border-b-2 hover:border-red-700"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/app/signUp"
                    className="block md:inline-block text-white p-2 hover:border-b-2 hover:border-red-700"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* <li>
              <Link
                to="/app/login"
                className="block md:inline-block text-white p-2"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/app/signUp"
                className="block md:inline-block text-white p-2"
              >
                SignUp
              </Link>
            </li> */}
          </ul>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
