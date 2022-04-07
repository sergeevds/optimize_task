import { ITodoState, TodoActionEnum, TodoActionTypes } from "./types";
import { load } from "redux-localstorage-simple";
import { stat } from "fs";

const savedTodos: any = load({ namespace: "todo-list" });

const initialState: ITodoState = {
  todos: savedTodos?.tasks?.todos || [],
};

function reorder(notes: Array<any>, prev: number, next: number) {
  const min = Math.min(prev, next);
  const max = Math.max(prev, next);
  const direction = (prev - next) < 0;

  console.warn("reoder func input", {notes, prev, next})

  const res = notes.map(item => {
      if (item.order <= max && item.order >= min) {
          if (item.order === prev) {
              return {...item, order: next}
          } else {
              return {...item, order: item.order + (direction ? -1 : 1)}
          }
      }
      return item
  })
  console.warn("reoder func res", res)
  return res
}

export default function tasksReducer(
  state = initialState,
  action: TodoActionTypes
): ITodoState {
  switch (action.type) {
    case TodoActionEnum.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case TodoActionEnum.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };

    case TodoActionEnum.COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id !== action.payload) return todo;

            return { ...todo, isCompleted: !todo.isCompleted };
          }),
        ],
      };

    case TodoActionEnum.REORDER_ITEM:
      const res = {
        ...state,
        todos: reorder(state.todos, action.payload.prevOrder, action.payload.newOrder).sort((a, b) => a.order! - b.order!)
        // todos: [
        //   ...state.todos.map((todo) => {
        //     // if (todo.id !== action.payload) return todo;

        //     // return { ...todo, isCompleted: !todo.isCompleted };
        //   }),
        // ],
      };
      console.warn('REORDER REDUCER >>>', { action, resTodos: res.todos })
      return res

    case TodoActionEnum.CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => !todo.isCompleted)],
      };
    default:
      return state;
  }
}
