import React from 'react';
import { Login } from '../login-page';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("./Login", () => () => <div>Login</div>);
describe("login form", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => { },
      dispatch: () => { },
    };
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Login />
        </Provider>
      </Router>);
    expect(container.innerHTML).toMatch("Login");
  })
})