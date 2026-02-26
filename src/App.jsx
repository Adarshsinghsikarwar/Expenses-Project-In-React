import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { getData } from "./utils/storage";

function App() {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses);

  useEffect(() => {
    const expenses = getData("expenses");
    if (expenses) {
      setExpenses(expenses);
    } else {
      alert("No expenses found");
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Expense Tracker</h1>

        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default App;
