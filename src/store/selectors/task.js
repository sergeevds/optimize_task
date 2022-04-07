import { createSelector } from 'reselect'

const selectTasks = state => state.tasks

export const selectTodos = createSelector(
    selectTasks,
  ({ todos }) => todos
)