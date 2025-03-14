"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("isAuthenticated");
    router.replace("/login");
  };

  // return <button onClick={handleLogout}>Logout</button>;
  return <Button style={{ backgroundColor: "#05A7CC", border: 'none' }} onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
