import * as React from "react";
import { shallow } from "enzyme";
import ExpensesList from "./ExpensesList";

describe("ExpensesList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExpensesList expenseList={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
