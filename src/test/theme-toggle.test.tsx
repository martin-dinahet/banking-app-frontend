import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { ThemeToggle } from "@/components/theme-toggle";

import { describe } from "vitest";
import { it } from "vitest";
import { expect } from "vitest";

describe("theme toggle component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ThemeToggle />
      </MemoryRouter>,
    );
    expect(true).toBe(true);
  });
});
