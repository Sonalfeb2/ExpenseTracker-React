import { useState } from "react";
import "./Expenses.css";
import ExpenseTracker from "./ExpenseTracker";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
const Expenses = () => {
  const [expenseArr, setExpenseArr] = useState([]);

  const expenseHandler = expenseObj => {
    setExpenseArr(expenseArr => [...expenseArr, expenseObj]);
    console.log(expenseArr)
  };

  return (
    <Card className="expenses">
      <ExpenseForm expenseHandler={expenseHandler} />

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
