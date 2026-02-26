import { createContext, useContext, useReducer, useEffect } from "react";
import expenseReducer, {
  initialState,
  ACTIONS,
} from "../reducers/expenseReducer";
import { getData, setData } from "../utils/storage";


const ExpenseContext = createContext(undefined);


export function ExpenseProvider({ children }) {

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  useEffect(() => {
    const stored = getData("expenses");
    if (stored && stored.length > 0) {
      dispatch({ type: ACTIONS.LOAD, payload: stored });
    }
  }, []); 

  
  useEffect(() => {
    setData("expenses", state.expenses);
  }, [state.expenses]); 

  
  
  const addExpense = (title, price) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: { id: Date.now(), title, price },
    });
  };

  
  const deleteExpense = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  
  const updateExpense = (id, title, price) => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id, title, price },
    });
  };

  
  const value = {
    expenses: state.expenses, 
    addExpense, 
    deleteExpense, 
    updateExpense, 
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}


export function useExpenseContext() {
  
  const context = useContext(ExpenseContext);

  if (context === undefined) {
    throw new Error("useExpenseContext must be used inside <ExpenseProvider>");
  }

  return context;
}
