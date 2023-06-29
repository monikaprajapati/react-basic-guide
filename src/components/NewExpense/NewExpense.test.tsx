import * as React from "react";
import { shallow } from "enzyme";
import NewExpense from "./NewExpense";

describe("NewExpense", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewExpense onAddExpense={() => { } } />);
    expect(wrapper).toMatchSnapshot();
  });
});
