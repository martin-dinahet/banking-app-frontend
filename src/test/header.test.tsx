import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { Header } from "@/components/header";

import { describe } from "vitest";
import { it } from "vitest";
import { expect } from "vitest";

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(true).toBe(true);
  });
});
