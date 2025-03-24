import React from "react";

import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Theme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export const ThemeToggle: React.FC = () => {
  const [themeState, setThemeState] = React.useState<Theme>("dark");
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setThemeState(themeState === "dark" ? "light" : "dark");
    setTheme(themeState);
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-12 h-12 rounded">
        <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme (light or dark)</span>
      </Button>
    </>
  );
};
