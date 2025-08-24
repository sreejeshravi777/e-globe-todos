import { Action, TodoState, TodoStatepayload } from "../types/type";

export const initialState: TodoStatepayload = {
  todos: [],
  isLoading: false,
  errorMsg: null,
};

export function TodoReducer(state: TodoState, action: Action): TodoState {
  console.log('action....', action)
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true, errorMsg: null };
    case "SET_TODOS":
      return { ...state, isLoading: false, todos: action.payload }; 
    case "GET_TODOS":
      return { ...state, isLoading: false, todos: action.payload };
    case "ERROR":
      return { ...state, isLoading: false, errorMsg: action.payload };
    default:
      return state;
  }
}
