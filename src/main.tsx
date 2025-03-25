import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Index } from "@/pages/index";
import { NewExpense } from "@/pages/new-expense";
import { MainLayout } from "@/layouts/main-layout";
import { ExpenseList } from "./pages/expenses";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="/new-expense" element={<NewExpense />} />
          <Route path="/expenses" element={<ExpenseList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
