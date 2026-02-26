import { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext";

function ExpenseItem({ item }) {
  const { deleteExpense, updateExpense } = useExpenseContext();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);

  const handleSave = () => {
    if (!title.trim() || !price) return;
    updateExpense(item.id, title, Number(price));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex justify-between items-center bg-blue-50 border border-blue-300 p-3 rounded-lg gap-3">
        <div className="flex gap-2 flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-24"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition"
          >
            Save
          </button>
          <button
            onClick={() => {
              setTitle(item.title);
              setPrice(item.price);
              setIsEditing(false);
            }}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-sm transition"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-lg">
      <div>
        <h3 className="font-medium text-gray-800">{item?.title}</h3>
        <p className="text-blue-600 font-semibold">₹{item?.price}</p>
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition"
        >
          Update
        </button>

        <button
          onClick={() => deleteExpense(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
