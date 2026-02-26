import { getData, setData } from "../utils/storage";

export const addExpenses = (title, price) => {
  const expenses = getData("expenses") || [];
  const updated = [...expenses, { title, price, id: Date.now() }];
  setData("expenses", updated);
  return updated;
};

export const removeExpenses = (id) => {
  const expenses = getData("expenses") || [];
  const updated = expenses.filter((item) => item.id !== id);
  setData("expenses", updated);
  return updated;
};
