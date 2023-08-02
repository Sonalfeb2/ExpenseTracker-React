import "./ExpenseTracker.css";
const ExpenseTracker = props => {

  return (
    <div className="expense-item">
      <div>
        {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}
      </div>

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
      </div>
    </div>
  );
};

export default ExpenseTracker;
