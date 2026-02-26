import ExpenseItem from "./ExpenseItem";
import { useExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
  const { expenses } = useExpenseContext();

  if (!expenses.length) {
    return (
      <p className="text-center text-gray-400 mt-4">
        No expenses yet. Add one above!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ExpenseList;
