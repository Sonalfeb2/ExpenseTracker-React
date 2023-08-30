import { useState } from "react";
import "./Expenses.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
const Expenses = () => {
  const [filterYear, setFilterYear] = useState("2020");
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "Commercial Street",
      date: new Date("2022-08-09")
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "Electronic City",
      date: new Date("2020-08-09")
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      location: "Tansi Honda",
      date: new Date("2021-08-09")
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      location: "Home@99",
      date: new Date("2019-08-09")
    }
  ];

  const [expenseArr, setExpenseArr] = useState(expenses);
  const filterHandler = selectedYear => {
    setFilterYear(selectedYear);
  };
  const expenseHandler = expenseObj => {
    expenseObj.date = new Date(expenseObj.date); //// Write a  new expense date in a date format
    setExpenseArr(expenseArr => [expenseObj, ...expenseArr]);
    console.log(expenseArr);
  };
  const filteredExpenses = expenseArr.filter(
    expenseItem =>
      expenseItem.date.getFullYear().toString() === filterYear
  );
  return (
    <Card className="expenses">
      <ExpenseForm expenseHandler={expenseHandler} />
      <ExpensesFilter filterHandler={filterHandler} filterYear={filterYear} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList filteredExpenses={filteredExpenses}/>
    </Card>
  );
};
export default Expenses;
