import React, { useState } from "react";

import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState("2021");

  const onYearFilterChange = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(yearFilter)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter year={yearFilter} onYearSelected={onYearFilterChange} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
