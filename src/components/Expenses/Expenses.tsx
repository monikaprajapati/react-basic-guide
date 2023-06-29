import * as React from "react";
import { ExpenseModal } from "src/interfaces/ExpenseModal";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";
import ExpensesChart from "../Chart/ExpensesChart";

type ExpensesProps = {
  expenseList: ExpenseModal[];
};

const Expenses: React.FC<ExpensesProps> = ({ expenseList }) => {
  const [selectedYear, setSelectedYear] = React.useState("2022");
  const changeFilter = (year: string) => {
    setSelectedYear(year);
  }
  const filteredExpenses = expenseList.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={changeFilter} selected={selectedYear} />
        <ExpensesChart expenseChartList={filteredExpenses} />
        <ExpensesList expenseList={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
