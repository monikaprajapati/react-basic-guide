import React, { useState } from "react";
import "./ExpenseForm.css";

type ExpenseFormProps = {
  onSubmitForm: Function;
  onCancelAddExpense: Function;
};

const ExpenseForm: React.FC<ExpenseFormProps> = (props: ExpenseFormProps) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // const titleChangeHandler = (event: any) => {
  //   console.log("Title Changed" + event.target.value);
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  // };
  // const amountChangeHandler = (event: any) => {
  //   console.log("Amount Changed" + event.target.value);
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredAmount: event.target.value,
  //   };
  // });
  // };
  // const dateChangeHandler = (event: any) => {
  //   console.log("Date Changed" + event.target.value);
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredDate: event.target.value,
  //     };
  //   });
  // };
  const inputChangeHandler = (identifier: string, event: any) => {
    if (identifier === "Title") {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: event.target.value };
      });
    } else if (identifier === "Amount") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredAmount: event.target.value,
        };
      });
    } else if (identifier === "Date") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredDate: event.target.value,
        };
      });
    } else {
    }
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: "$" + userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({
      enteredDate: "",
      enteredTitle: "",
      enteredAmount: "",
    });
    props.onSubmitForm(expenseData);
  };

  const onCancelHandler = () => {
    props.onCancelAddExpense();
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={(event) => inputChangeHandler("Title", event)}
              value={userInput.enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={(event) => inputChangeHandler("Amount", event)}
              value={userInput.enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              onChange={(event) => inputChangeHandler("Date", event)}
              value={userInput.enteredDate}
            />
          </div>
          <div className="new-expense__actions">
            <button onClick={onCancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
