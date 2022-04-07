import React, { FC } from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useTypedSelector } from '../hooks/useTypedSelector'

import { getFilteredTodos } from '../store/selectors'
import withCountRender from '../hoc/withCountRender'

const Todo: FC = () => {
    const filteredTodos = useTypedSelector(getFilteredTodos)
    console.warn('TODO >> render')

    return (
        <div className="todo-wrapper">
            <TodoInput />
            <TodoList todos={filteredTodos} />
        </div>
    )
}

export default withCountRender(Todo)
