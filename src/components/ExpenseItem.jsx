import { removeExpenses } from "../hooks/useExpenses";

function ExpenseItem({ item, setExpenses }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-lg">
      <div>
        <h3 className="font-medium text-gray-800">{item?.title}</h3>
        <p className="text-blue-600 font-semibold">₹{item?.price}</p>
      </div>

      <button
        onClick={() => setExpenses(removeExpenses(item.id))}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
