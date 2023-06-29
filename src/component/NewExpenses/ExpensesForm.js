import React, { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = (props) => {
  const [newTitle, setnewTitle] = useState("");
  const [newAmount, setnewAmount] = useState("");
  const [newDate, setnewDate] = useState("");

  //   const titleChangeHandler = (e) => {
  //     console.log("title changed!!");
  //     setnewTitle(e.target.value);
  //   };
  //   const amountChangeHandler = (e) => {
  //     setnewAmount(e.target.value);
  //   };
  //   const dateChangeHandler = (e) => {
  //     setnewDate(e.target.value);
  //   };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setnewTitle(value);
    } else if (identifier === "date") {
      setnewDate(value);
    } else {
      setnewAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: newDate,
    };
    props.onSave(expenseData);

    setnewAmount("");
    setnewTitle("");
    setnewDate("");
  };
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
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            min="2019-01-01"
            max="2023-06-28"
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
