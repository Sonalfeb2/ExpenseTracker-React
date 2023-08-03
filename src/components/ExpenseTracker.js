import "./ExpenseTracker.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "./Card";
const ExpenseTracker = props => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail amount={props.amount} location={props.location} title={props.title}/>
    </Card>
  );
};

export default ExpenseTracker;
