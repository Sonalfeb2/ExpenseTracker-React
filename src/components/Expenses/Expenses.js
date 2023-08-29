import "./Expenses.css";
import ExpenseTracker from "./ExpenseTracker";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
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
    <Card className="expenses">
      <ExpenseForm />

      {allExpenses.map(item =>
        <ExpenseTracker
          key={item.id}
          title={item.title}
          amount={item.amount}
          location={item.location}
          date={item.date}
        />
      )}
    </Card>
  );
};
export default Expenses;
