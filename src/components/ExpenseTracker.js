import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  return (
    <div className="expense-item">
      <div>02-June-2023</div>

      <div className="expense-item__description">
        <h2>Food</h2>
       <div className="expense-item__price">Rs. 145</div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
