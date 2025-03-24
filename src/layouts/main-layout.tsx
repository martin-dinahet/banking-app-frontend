import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
