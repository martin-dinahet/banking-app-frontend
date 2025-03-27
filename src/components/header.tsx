import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { BadgeDollarSign, Plus } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 flex p-3 justify-between items-center">
        <Button variant="ghost" asChild>
          <div>
            <BadgeDollarSign />
            <NavLink to="/" className="font-semibold text-lg">
              Banking app
            </NavLink>
          </div>
        </Button>
        <div>
          <Button variant="default" asChild>
            <NavLink to="/new-expense">
              <Plus /> New Expense
            </NavLink>
          </Button>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
};
