import React from "react";
import { render, wait } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "redux/store";
import Products from "components/Products";

const initState = {
  products: [],
  currenFilterType: ""
};

const store = Store(initState);

jest.setTimeout(30000);
describe("Products Component", () => {
  test("loads products component successfully", async () => {
    const { getAllByText, getAllByRole } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    await wait(() => {
      //Sales txt
      expect(getAllByText("SALES!!!"));
      //Image
      expect(getAllByRole("img"));
      //Name
      expect(getAllByText("Pure Blonde Crate"));
      //Price
      expect(getAllByText("$49.99"));
    });
  });
});
