import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = ({ time }) => {
  const month = time.toLocaleString("en-US", { month: "long" });
  const day = time.toLocaleString("en-US", { day: "2-digit" });
  const year = time.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
