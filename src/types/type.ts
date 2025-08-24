export interface Todo {
    id: number;
    todo: string;
completed:boolean;
userId:number;
  }
  export interface TodoResponse {
    todos:Todo[]
  }
  export interface TodoState {
    todos: Todo[];
    isLoading: boolean;
    errorMsg: string | null;
  }
  export interface TodoStatepayload {
    todos: Todo[];
    isLoading: boolean;
    errorMsg: string | null;
  }
  export interface TodoFormData {
    todo: string;
    userId: string;
}

export interface TodoFormErrors {
    todo: string;
    userId: string;
}
  export type Action =
    | { type: "LOADING" }
    | { type: "SET_TODOS"; payload: Todo[] }
    | { type: "ERROR"; payload: string }
    | { type: "GET_TODOS"; payload: Todo[] }
  