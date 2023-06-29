import * as React from "react";
import { shallow } from "enzyme";
import ExpenseItem from "./ExpenseItem";

describe("ExpenseItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExpenseItem title="Title" expense={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
