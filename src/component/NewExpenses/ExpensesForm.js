import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [amountValid, setAmountValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setNewTitle(value);
    } else if (identifier === "date") {
      setNewDate(value);
    } else {
      setNewAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Validate form inputs
    const isTitleValid = newTitle.trim() !== "";
    const isAmountValid = newAmount !== "";
    const isDateValid = newDate !== "";

    setTitleValid(isTitleValid);
    setAmountValid(isAmountValid);
    setDateValid(isDateValid);

    if (isTitleValid && isAmountValid && isDateValid) {
      const expenseData = {
        title: newTitle,
        amount: +newAmount,
        date: new Date(newDate),
      };
      props.onSave(expenseData);

      setNewTitle("");
      setNewAmount("");
      setNewDate("");
    }
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
          {!titleValid && (
            <p className="error-message">Please enter a title.</p>
          )}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmount}
            min="0.01"
            step="0.01"
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
          {!amountValid && (
            <p className="error-message">Please enter a valid amount.</p>
          )}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            min="2019-01-01"
            max={today}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
          {!dateValid && <p className="error-message">Please select a date.</p>}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
