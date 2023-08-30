import React from "react";
import ExpenseTracker from "./ExpenseTracker";
import "./ExpenseList.css";
const ExpenseList = props => {
  
  if (props.filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No Expense Found</p>;
  }
  if (props.filteredExpenses.length === 1) {
    return (
      <ul className="expenses-list">
        <ExpenseTracker
          key={props.filteredExpenses[0].id}
          title={props.filteredExpenses[0].title}
          amount={props.filteredExpenses[0].amount}
          location={props.filteredExpenses[0].location}
          date={props.filteredExpenses[0].date}
        />

        <p className="expenses-list__fallback">
          "Only single Expense here. Please add more..."
        </p>
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.length > 0 &&
        props.filteredExpenses.map(item =>
          <ExpenseTracker
            key={item.id}
            title={item.title}
            amount={item.amount}
            location={item.location}
            date={item.date}
          />
        )}
    </ul>
  );
};
export default ExpenseList;
