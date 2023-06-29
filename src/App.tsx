import React, { useState } from "react";
import "./App.css";
import { ExpenseModal } from "./interfaces/ExpenseModal";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE: ExpenseModal[] = [
  { id: 1, date: new Date(2019, 1, 19), title: "House", amount: "212.00" },
  {
    id: 2,
    date: new Date(2019, 3, 20),
    title: "Car Insurance",
    amount: "220.00",
  },
  {
    id: 3,
    date: new Date(2022, 1, 20),
    title: "Food",
    amount: "380.00",
  },
  {
    id: 4,
    date: new Date(2020, 1, 21),
    title: "miscellaneous",
    amount: "232.00",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expenseData: any) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };
  return (
    <>
      <div className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenseList={expenses} />
      </div>
    </>
  );
};

export default App;
