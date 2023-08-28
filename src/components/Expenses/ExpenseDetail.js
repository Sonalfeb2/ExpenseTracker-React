import React ,{useState}from 'react';

const ExpenseDetail = props => {
  const [expense, setExpense]= useState(props.amount);
  const ChangeExpense=()=>{
    setExpense('100$')
    console.log("DELETED");
  }
  return (
    <div className="expense-item__description">
      <h2>
        {props.location}
      </h2>
      <h2>
        {props.title}
      </h2>
      <div className="expense-item__price">
       {expense}
      </div>
      <button onClick={ChangeExpense}>Change Expense</button>
    </div>
  );
};
export default ExpenseDetail;