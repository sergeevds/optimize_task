import { ITodo } from "../../../types/types";
import {
  IAddTodoAction,
  IClearCompletedTodos,
  ICompleteTodo,
  IRemoveTodoAction,
  IReorderTodo,
  TodoActionEnum,
} from "./types";

export const TodoActionCreators = {
  addTodo: (todo: ITodo): IAddTodoAction => ({
    type: TodoActionEnum.ADD_TODO,
    payload: todo,
  }),

  removeTodo: (id: string): IRemoveTodoAction => ({
    type: TodoActionEnum.REMOVE_TODO,
    payload: id,
  }),

  completeTodo: (id: string): ICompleteTodo => ({
    type: TodoActionEnum.COMPLETE_TODO,
    payload: id,
  }),

  clearComletedTodos: (): IClearCompletedTodos => ({
    type: TodoActionEnum.CLEAR_COMPLETED_TODOS,
  }),

  reorderTodo: (prevOrder: number, newOrder: number): IReorderTodo => ({
    type: TodoActionEnum.REORDER_ITEM,
    payload: {
      prevOrder,
      newOrder
    }
  }),
};
