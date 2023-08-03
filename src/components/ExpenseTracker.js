import "./ExpenseTracker.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
const ExpenseTracker = props => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail amount={props.amount} location={props.location} title={props.title}/>
    </div>
  );
};

export default ExpenseTracker;
