import { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = props => {
  const [expenseObj, setExpenseObj] = useState({
    title: "",
    amount: 0,
    location: "",
    date:''
  });
  const submitHandler = () => {
    const expenseData = {
      ...expenseObj,
      id: Math.random().toString()
    };
    props.expenseHandler(expenseData);
    setExpenseObj({
      title: "",
      amount: 0,
      location: "",
      date:'',
    });

    console.log(expenseData);
  };
  return (
    <div className="new-expense">
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
          <input type="date" min="2019-01-01" max="2022-12-31"  onChange={e => {
              setExpenseObj(prevState => ({
                ...prevState,
                date: e.target.value
              }));
            }} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
    // <div className="expenseForm">
    //   <div>
    //     <label>Amount</label>
    //     <input
    //       type="number"
    //       id="amount"
    //       value={expenseObj.amount}
    //       onChange={e => {
    //         setExpenseObj(prevState => ({
    //           ...prevState,
    //           amount: e.target.value
    //         }));
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <label for="title">Title</label>
    //     <input
    //       type="text"
    //       id="title"
    //       value={expenseObj.title}
    //       onChange={e => {
    //         setExpenseObj(prevState => ({
    //             ...prevState,
    //             title: e.target.value
    //           }));
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <label for="location">Location</label>
    //     <input
    //       type="text"
    //       id="location"
    //       value={expenseObj.location}
    //       onChange={e => {
    //         setExpenseObj(prevState => ({
    //             ...prevState,
    //             location: e.target.value
    //           }));
    //       }}
    //     />
    //   </div>
    //   <button onClick={submitHandler}>Submit</button>
    // </div>
  );
};
export default ExpenseForm;
