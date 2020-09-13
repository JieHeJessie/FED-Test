import React from "react";
import { render, wait, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Store from "redux/store";
import App from "App";

const initState = {
  products: [],
  currenFilterType: ""
};

const store = Store(initState);

jest.setTimeout(30000);
describe("App Component", () => {
  test("loads app component successfully", async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await wait(() => {
      //Filter UI
      expect(getAllByText("Product Filter"));
      //Products UI
      expect(getAllByText("Pure Blonde Crate"));
    });
  });
  test("filtering products successfully", async () => {
    const {
      getByText,
      getAllByText,
      getByRole,
      container,
      queryAllByText
    } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    //before applying filter
    const previousSalesItems = queryAllByText("SALES!!!");
    expect(previousSalesItems).toHaveLength(4);
    //apply filter
    const selectButton = getByRole("button");
    userEvent.click(selectButton);
    await waitForElement(() => getAllByText("Product Filter"), { container });
    const itemClickable = getByText("Beer");
    userEvent.click(itemClickable);
    //after applying filter
    const afterSalesItems = queryAllByText("SALES!!!");
    expect(afterSalesItems).toHaveLength(2);
  });
});
