import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/authStatus";
import useUserData from "../hooks/useUserData";

function ProtectedRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <p>Loading...</p>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

function AdminRoute() {
  const { userData, loading } = useUserData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData || !userData.isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export { ProtectedRoute, AdminRoute };
