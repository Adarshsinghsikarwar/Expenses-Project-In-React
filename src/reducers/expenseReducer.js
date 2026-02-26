export const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  LOAD: "LOAD",
};

export const initialState = {
  expenses: [],
};

function expenseReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case ACTIONS.DELETE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };


    case ACTIONS.UPDATE:
      return {
        ...state,
        expenses: state.expenses.map(
          (expense) =>
            expense.id === action.payload.id
              ? { ...expense, ...action.payload }
              : expense,
        ),
      };

    
    case ACTIONS.LOAD:
      return {
        ...state,
        expenses: action.payload,
      };

    default:
      return state;
  }
}

export default expenseReducer;
