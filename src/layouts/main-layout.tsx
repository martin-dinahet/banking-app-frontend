import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const MainLayout: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};
