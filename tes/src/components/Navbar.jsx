import React from "react";
import { Link } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import useAuthStatus from "../hooks/authStatus";
import { getAuth } from "firebase/auth";
import Profile from "./Profile";

function Navbar() {
  const { loggedIn } = useAuthStatus();
  const { userData } = useUserData();

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-gray-200 transition duration-300">
          MyApp
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {loggedIn ? (
            <>
              {/* Admin Dashboard Link */}
              {/* {userData && userData.isAdmin && (
                <Link
                  to="/admin-dashboard"
                  className="text-sm md:text-base hover:text-gray-200 transition duration-300">
                  Admin Dashboard
                </Link>
              )} */}

              {/* Profile & Logout */}
              <div className="flex items-center space-x-4">
                <div>
                  <Link to={"/admin-dashboard"}>
                    <Profile />
                  </Link>
                </div>
                <button
                  onClick={() => getAuth().signOut()}
                  className="bg-red-500 px-4 py-2 rounded text-sm md:text-base hover:bg-red-600 transition duration-300">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Sign In */}
              <Link
                to="/sign-in"
                className="text-sm md:text-base hover:text-gray-200 transition duration-300">
                Sign In
              </Link>

              {/* Sign Up */}
              <Link
                to="/sign-up"
                className="bg-green-500 px-4 py-2 rounded text-sm md:text-base hover:bg-green-600 transition duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
