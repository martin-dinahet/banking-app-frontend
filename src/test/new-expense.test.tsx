import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { NewExpense } from "@/pages/new-expense";

import { describe } from "vitest";
import { it } from "vitest";
import { expect } from "vitest";

describe("new expense page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <NewExpense />
      </MemoryRouter>,
    );
    expect(true).toBe(true);
  });
});
