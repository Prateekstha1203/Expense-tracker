import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const onSaveHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    console.log(expenseData);
  };

  const addExpenseHandler = () => {
    setShowAddExpense(true);
  };
  const removeExpenseHandler = () => {
    setShowAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!showAddExpense && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {showAddExpense && (
        <ExpensesForm onSave={onSaveHandler} onCancel={removeExpenseHandler} />
      )}
    </div>
  );
};

export default NewExpenses;
