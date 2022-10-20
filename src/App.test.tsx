import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "./App";

describe("App", () => {
	test("deveria renderizar Hello World sem erros", () => {
		render(<App />);
		const elemento = screen.getByText(/hello world/i);
		expect(elemento).toBeVisible();
	});
});
