import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  const expenseDate = new Date();
  const expenseTitle = "Food";
  const expensePrice = 145;
  return (
    <div className="expense-item">
      <div>
        {expenseDate.toISOString()}
      </div>

      <div className="expense-item__description">
        <h2>
          {expenseTitle}
        </h2>
        <div className="expense-item__price">
          Rs.{expensePrice}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
