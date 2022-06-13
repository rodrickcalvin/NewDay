import React, { useState } from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

/* In here please contirbute a test that will
verify that your form is logging to the console */

it("Landing page should have heading with the word NewDay as text", () => {
  render(<App />);
  const pageHeading = screen.getByText(/NewDay Modal/);

  expect(pageHeading).toBeTruthy();
});

// it("Should have a button that triggers the modal", () => {
//   expect(
//     screen.getByRole("button", {
//       name: "Open Portfolio Link"
//     })
//   ).toBeTruthy();
// });

it("form logging to the console", () => {
  const Form = ({ handleSubmit }) => {
    const [formData, setFormData] = useState("");

    const formSubmit = (e) => {
      e.preventDefault();
      if (handleSubmit) {
      }
    };
    return (
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={formData}
          onInput={(e) => setFormData(e.target.value)}
        />
        <input
          data-testid="#submit"
          type="submit"
          value="submit"
          aria-pressed="true"
        />
      </form>
    );
  };

  const handleSubmit = jest.fn();
  render(<Form handleSubmit={handleSubmit} />);

  const submitBtn = screen.getByTestId("#submit");
  submitBtn.simulate("click");

  expect(handleSubmit).toBeCalledWith();
});
