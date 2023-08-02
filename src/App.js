import ExpenseTracker from "./components/ExpenseTracker";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "Commercial Street"
    },
    { id: "e2", title: "New TV", amount: 799.49,location:"Electronic City" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      location: "Tansi Honda"

    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      location: "Home@99"
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(item =>
        <ExpenseTracker
          key={item.id}
          title={item.title}
          amount={item.amount}
          location={item.location}
        />
      )}
    </div>
  );
}

export default App;
