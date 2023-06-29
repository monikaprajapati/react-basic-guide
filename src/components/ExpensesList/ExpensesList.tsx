import * as React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
// import "./ExpensesList.css";
import { styled } from "styled-components";
// import { ExpenseFallBack } from "./ExpenseFallback";
import styles from "./ExpensesList.module.css";

type ExpensesListProps = {
  expenseList: any;
};

// const ExpenseList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

const ExpensesList: React.FC<ExpensesListProps> = (
  props: ExpensesListProps
) => {
  if (props.expenseList.length === 0) {
    // return <ExpenseFallBack className={ 1 == 1.0 && 'invalid'}>No Expenses Found.</ExpenseFallBack>;
    // return <ExpenseFallBack invalid={1}>No Expenses Found.</ExpenseFallBack>;
    // return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
    return (
      <h2 className={styles["expenses-list__fallback"]}>No Expenses Found.</h2>
    );
  }
  return (
    <>
      <ul className={`${styles['expenses-list']} ${styles['expenses-list__background']}`}>
        {/* <ExpenseList> */}
        {props.expenseList.map((item: any, index: number) => (
          <ExpenseItem
            title={`Expense Item ${index}- ${item.title}`}
            expense={item}
            key={index}
          ></ExpenseItem>
        ))}
        {/* </ExpenseList> */}
      </ul>
    </>
  );
};

export default ExpensesList;
