const ExpenseDetail = props => {
  const DeleteExpense=()=>{
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
        Rs.{props.amount}
      </div>
      <button onClick={DeleteExpense}>Delete Expense</button>
    </div>
  );
};
export default ExpenseDetail;