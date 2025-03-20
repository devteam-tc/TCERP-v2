
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import AddSectionsForm from "../admin/createBlog/form";

const AdminPanel = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login"); // Use replace to prevent going back
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <AddSectionsForm />
    </div>
  );
};

export default AdminPanel;

