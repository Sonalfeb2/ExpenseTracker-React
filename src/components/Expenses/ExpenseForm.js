const ExpenseForm = () => {
  const expenseObj = [];
  var userInput = {};
  const submitHandler = () => {
    console.log(userInput);
    expenseObj.push(userInput);
    userInput={};
    console.log(expenseObj)
  };
  return (
    <div className="expenseForm">
      <div>
        <label>Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter Your Amount..."
          onChange={e => {
            userInput.amount = e.target.value;
          }}
        />
      </div>
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Title..."
          onChange={e => {
            userInput.title = e.target.value;
          }}
        />
      </div>
      <div>
        <label for="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Enter the location..."
          onChange={e => {
            userInput.location = e.target.value;
          }}
        />
      </div>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default ExpenseForm;
