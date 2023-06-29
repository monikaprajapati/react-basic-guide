import * as React from "react";
import './ExpenseDate.css';

type ExpenseDateProps = {
    date: Date
};

const ExpenseDate: React.FC<ExpenseDateProps> = ({date}) => {
  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">{date.toLocaleString("en-US", { month: "long" })}</div>
        <div className="expense-date__day">{date.toLocaleString("en-US", { day: "2-digit" })}</div>
        <div className="expense-date__year">{date.getFullYear()}</div>
      </div>
    </>
  );
};

export default ExpenseDate;
