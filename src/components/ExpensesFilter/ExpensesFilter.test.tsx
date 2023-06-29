import * as React from "react";
import { shallow } from "enzyme";
import ExpenseFilter from "./ExpensesFilter";

describe("ExpenseFilter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExpenseFilter onChangeFilter={()=>{}} selected="2022"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
