import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

type ExpenseItemProps = {
  title: string;
  expense: any;
};

const ExpenseItem: React.FC<ExpenseItemProps> = (props: ExpenseItemProps) => {
  const { expense } = props;
  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={expense.date} />
          <div className="expense-item__description">
            <h2>{expense.title}</h2>
            <div className="expense-item__price">${expense.amount}</div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
