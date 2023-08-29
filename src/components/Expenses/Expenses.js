import { useState } from "react";
import "./Expenses.css";
import ExpenseTracker from "./ExpenseTracker";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = () => {
  const [expenseArr, setExpenseArr] = useState([]);
  const[filterYear, setFilterYear] = useState('2020');
  const filterHandler = selectedYear=>{
    setFilterYear(selectedYear);
  }
  const expenseHandler = expenseObj => {
    setExpenseArr(expenseArr => [...expenseArr, expenseObj]);
    console.log(expenseArr)
  };

  return (
    <Card className="expenses">
      <ExpenseForm expenseHandler={expenseHandler} />
       <ExpensesFilter filterHandler={filterHandler} filterYear={filterYear}/>
      {expenseArr.map(item =>
        <ExpenseTracker
          key={item.id}
          title={item.title}
          amount={item.amount}
          location={item.location}
          date={item.date}
        />
      )}
    </Card>
  );
};
export default Expenses;
