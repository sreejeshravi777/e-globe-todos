import React, { createContext, useReducer, useContext, ReactNode } from "react";
import {  Todo, TodoState } from "../types/type";
import { TodoReducer, initialState } from "./todoReducer";
import { BASE_URL } from "../config";
import axios from "axios";

export interface TodoContextProps {
  state: TodoState;
  getUsers: () => Promise<void>;
   // getTodos: () => Promise<void>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      axios.get(`${BASE_URL}/todos`)
      .then(response => {
        // Handle successful response
        dispatch({ type: "SET_TODOS", payload: response.data.todos }); 
      })
      .catch(error => {
        // Handle error
      dispatch({ type: "ERROR", payload: error.message });

        console.error('Error fetching data:', error);
      });

      // const res = await fetch(`${BASE_URL}/todos`);
      // if (!res.ok) throw new Error("failed to fetch users");
      // const data: Todo[] = await res.json();
      // console.log('data......',res)
     // Changed from data.todos to data
    } catch (err: any) {
      console.log("fetch error:", err);
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  return (
    <TodoContext.Provider value={{ state, getUsers }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useAppContext = (): TodoContextProps => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
};
