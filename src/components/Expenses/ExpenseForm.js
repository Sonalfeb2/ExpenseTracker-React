import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = props => {
  const [showForm, setShowForm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [expenseObj, setExpenseObj] = useState({
    title: "",
    amount: 0,
    location: "",
    date: ""
  });
  const submitHandler = () => {
    if (
      expenseObj.title &&
      expenseObj.amount &&
      expenseObj.date &&
      expenseObj.location
    ) {
      const expenseData = {
        ...expenseObj,
        id: Math.random().toString()
      };
      props.expenseHandler(expenseData);
      setExpenseObj({
        title: "",
        amount: 0,
        location: "",
        date: ""
      });
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  return (
    <div>
      {showForm &&
        <div className="new-expense">
          {showError &&
            <p style={{ backgroundColor: "red" }}>Please Fill All Inputs</p>}
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={expenseObj.title}
                onChange={e => {
                  setExpenseObj(prevState => ({
                    ...prevState,
                    title: e.target.value
                  }));
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Location</label>
              <input
                type="text"
                id="location"
                value={expenseObj.location}
                onChange={e => {
                  setExpenseObj(prevState => ({
                    ...prevState,
                    location: e.target.value
                  }));
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={expenseObj.amount}
                onChange={e => {
                  setExpenseObj(prevState => ({
                    ...prevState,
                    amount: e.target.value
                  }));
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={expenseObj.date}
                onChange={e => {
                  setExpenseObj(prevState => ({
                    ...prevState,
                    date: e.target.value
                  }));
                }}
              />
            </div>
          </div>
          <div>
            <button className="new-expense__actions" onClick={submitHandler}>
              Submit
            </button>
            <button
              className="new-expense__actions"
              onClick={() => setShowForm(!showForm)}
            >
              Cancel
            </button>
          </div>
        </div>}
      <div>
        {!showForm &&
          <button
            className="new-expense__actions"
            onClick={() => setShowForm(!showForm)}
          >
            Add New Expense
          </button>}
      </div>
    </div>
  );
};
export default ExpenseForm;
