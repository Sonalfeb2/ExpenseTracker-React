import "./Expenses.css";
import ExpenseTracker from "./ExpenseTracker";
const Expenses = () => {
  const allExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "Commercial Street",
      date: new Date()
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "Electronic City",
      date: new Date()
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      location: "Tansi Honda",
      date: new Date()
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      location: "Home@99",
      date: new Date()
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
        {allExpenses.map(item =>
          <ExpenseTracker
            key={item.id}
            title={item.title}
            amount={item.amount}
            location={item.location}
            date={item.date}
          />
        )}
      </div>
    </div>
  );
};
export default Expenses;
