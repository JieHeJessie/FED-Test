import React from "react";
import { render, wait, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Store from "redux/store";
import Filter from "components/Filter";

const initState = {
  products: [],
  currenFilterType: ""
};

const store = Store(initState);

jest.setTimeout(30000);
describe("Filter Component", () => {
  test("loads filter component successfully", async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    await wait(() => {
      expect(getAllByText("Product Filter"));
    });
  });

  test("select filter and update products", async () => {
    const {
      getAllByText,
      getByText,
      getByTestId,
      getByRole,
      container
    } = render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    //UI has been called
    const selectNode = getByTestId("product-filter");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();
    //Render types of products
    userEvent.click(selectButton);
    await waitForElement(() => getAllByText("Product Filter"), { container });
    expect(getAllByText("Beer"));
    expect(getAllByText("Wine"));
    expect(getAllByText("Spirits"));
    expect(getAllByText("Cider"));
    //Update types of products
    const itemClickable = getByText("Beer");
    userEvent.click(itemClickable);
    expect(getAllByText("Beer"));
  });
});
