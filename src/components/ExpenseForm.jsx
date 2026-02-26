import { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { addExpense } = useExpenseContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price) return;

    addExpense(title, Number(price));

    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense Title"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Amount"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
