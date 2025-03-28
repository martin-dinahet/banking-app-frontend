import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { ExpenseList } from "@/pages/expenses";

import { describe } from "vitest";
import { it } from "vitest";
import { expect } from "vitest";

describe("expenses page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ExpenseList />
      </MemoryRouter>,
    );
    expect(true).toBe(true);
  });
});
