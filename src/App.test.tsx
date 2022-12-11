import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render an input with placeholder='name'", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/name/i);
    expect(input).toBeInTheDocument();
  });

  it("should render an 'Add Item' button", async () => {
    render(<App />);
    const button = screen.getByText(/Add Item/i);
    expect(button).toBeInTheDocument();
  });

  describe("when button exists", () => {
    it("should render an item if clicked", async () => {
      render(<App />);
      const input = screen.getByPlaceholderText(/name/i);
      const button = screen.getByText(/Add Item/i);
      fireEvent.change(input, { target: { value: "daniel" } });
      fireEvent.click(button);

      const item = screen.getByText(/daniel/i);
      expect(item).toBeInTheDocument();
    });

    it("should render a 'Remove' button if clicked", async () => {
      render(<App />);
      const input = screen.getByPlaceholderText(/name/i);
      const button = screen.getByText(/Add Item/i);
      fireEvent.change(input, { target: { value: "daniel" } });
      fireEvent.click(button);

      const removeButton = screen.getByText(/Remove/i);
      expect(removeButton).toBeInTheDocument();
    });

    describe("when item exists", () => {
      it("should delete an item if its remove button is clicked", async () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/name/i);
        const button = screen.getByText(/Add Item/i);
        fireEvent.change(input, { target: { value: "daniel" } });
        fireEvent.click(button);

        const removeButton = screen.getByText(/Remove/i);
        fireEvent.click(removeButton);

        expect(removeButton).not.toBeInTheDocument();
      });
    });
  });
});
