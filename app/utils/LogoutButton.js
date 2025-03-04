"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("isAuthenticated");
    router.replace("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
