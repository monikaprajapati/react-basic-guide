import * as React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "./ExpenseForm";

describe("ExpenseForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExpenseForm onSubmitForm={()=>{}} onCancelAddExpense={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
