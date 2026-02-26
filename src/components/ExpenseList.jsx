import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses }) {
  return (
    <div className="flex flex-col gap-3">
      {expenses?.map((item) => (
        <ExpenseItem key={item.id} item={item} setExpenses={setExpenses} />
      ))}
    </div>
  );
}

export default ExpenseList;
