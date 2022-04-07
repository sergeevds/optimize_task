import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import withCountRender from '../hoc/withCountRender'
import { AppDispatch } from '../store'
import { TodoActionCreators } from '../store/reducers/tasks/action-creators'
import TodoFilters from './TodoFilters'

interface TodoFiltersProps {
    countItems: number
}

const TodoActions: FC<TodoFiltersProps> = ({ countItems }) => {
    const dispatch: AppDispatch = useDispatch()

    const clearCompletedTodos = (): void => {
        dispatch(TodoActionCreators.clearComletedTodos())
    }

    return (
        <div className="todo-card todo-filters">
            <p>
                <span>{countItems}</span> items left
            </p>
            <TodoFilters />
            <div className="todo-filters__btn">
                <button id="clear-completed" onClick={clearCompletedTodos}>
                    Clear Completed
                </button>
            </div>
        </div>
    )
}

export default withCountRender(TodoActions)
