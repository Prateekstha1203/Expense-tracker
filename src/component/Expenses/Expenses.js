import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  let filteredYearInfo = "2020,2021 and 2022";

  if (filteredYear === "2020") {
    filteredYearInfo = "2021,2022 & 2023";
  } else if (filteredYear === "2021") {
    filteredYearInfo = "2020,2022 & 2023";
  } else if (filteredYear === "2022") {
    filteredYearInfo = "2020,2021 & 2023";
  } else {
    filteredYearInfo = "2020,2021 & 2022";
  }
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>Data from years are {filteredYearInfo} disabed.</p>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          time={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
