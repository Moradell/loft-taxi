import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Login } from "./Login";

describe("Login", () => {
  describe("on submit", () => {
    it("dispatches logIn", async () => {
      const mockDispatch = jest.fn();
      const { getByLabelText, getByText } = render(
        <Login useDispatchHook={() => mockDispatch} />
      );
      const emailInput = getByLabelText("Email:");
      const passwordInput = getByLabelText("Password:");

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "testemail" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });
        fireEvent.click(getByText("Войти"));
      });

      expect(mockDispatch).toBeCalledWith({
        payload: { email: "testemail", password: "testpassword" },
        type: "AUTHENTICATE",
      });
    });
  });
});
