import { useState } from "react";
const ExpenseForm = () => {
  const [expenseObj, setExpenseObj] = useState({
    title: "",
    amount: 0,
    location: ""
  });
  const [expenseArr, setExpenseArr] = useState([]);
  const submitHandler = () => {
    setExpenseArr(expenseArr => [...expenseArr, expenseObj]);

    console.log(expenseArr, expenseObj);
    setExpenseObj({
      title: "",
      amount: 0,
      location: ""
    });
  };
  return (
    <div className="expenseForm">
      <div>
        <label>Amount</label>
        <input
          type="number"
          id="amount"
          value={expenseObj.amount}
          onChange={e => {
            setExpenseObj(prevState => ({
              ...prevState,
              amount: e.target.value
            }));
          }}
        />
      </div>
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          value={expenseObj.title}
          onChange={e => {
            setExpenseObj(prevState => ({
                ...prevState,
                title: e.target.value
              }));
          }}
        />
      </div>
      <div>
        <label for="location">Location</label>
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
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default ExpenseForm;
