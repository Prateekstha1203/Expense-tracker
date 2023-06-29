import React from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const onSaveHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSave={onSaveHandler} />
    </div>
  );
};

export default NewExpenses;
