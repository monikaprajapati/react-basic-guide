import * as React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

type NewExpenseProps = {
  onAddExpense: Function;
};

const NewExpense: React.FC<NewExpenseProps> = (props: NewExpenseProps) => {
  const [showAddExpensePopup, setShowAddExpensePopup] = React.useState(false);
  const submitHandler = (enteredExpenseData: {}) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setShowAddExpensePopup(false);
  };
  const onCancelAddExpense = () => {
    setShowAddExpensePopup(false);
  };
  const showNewExpensePopup = () => {
    setShowAddExpensePopup(true);
  };
  return (
    <>
      <div className="new-expense">
        {!showAddExpensePopup && (
          <button onClick={showNewExpensePopup}>Add New Expense</button>
        )}
        {showAddExpensePopup && (
          <ExpenseForm
            onSubmitForm={submitHandler}
            onCancelAddExpense={onCancelAddExpense}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
