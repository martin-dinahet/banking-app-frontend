import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { Index } from "@/pages/index";

import { describe } from "vitest";
import { it } from "vitest";
import { expect } from "vitest";

describe("index page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );
    expect(true).toBe(true);
  });
});
