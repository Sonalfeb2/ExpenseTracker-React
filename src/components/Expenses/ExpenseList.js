import React from "react";
import ExpenseTracker from "./ExpenseTracker";
import "./ExpenseList.css";
const ExpenseList = props => {
  const filter = props.expenseArr.filter(
    expenseItem =>
      expenseItem.date.getFullYear().toString() === props.filterYear
  );
  if (filter.length === 0) {
    return <p className="expenses-list__fallback">No Expense Found</p>;
  }
  if (filter.length === 1) {
    return (
      <ul className="expenses-list">
        <ExpenseTracker
          key={filter[0].id}
          title={filter[0].title}
          amount={filter[0].amount}
          location={filter[0].location}
          date={filter[0].date}
        />

        <p className="expenses-list__fallback">
          "Only single Expense here. Please add more..."
        </p>
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {filter.length > 0 &&
        filter.map(item =>
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
