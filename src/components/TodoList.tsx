import React, { FC } from 'react'
import withCountRender from '../hoc/withCountRender'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { getFilteredTodos } from '../store/selectors'
import TodoActions from './TodoActions'
import TodoItem from './TodoItem'

interface TodoListProps {}

const TodoList: FC<TodoListProps> = () => {
    const todos = useTypedSelector(getFilteredTodos)

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
            <TodoActions countItems={todos.length} />
        </ul>
    )
}

export default withCountRender(TodoList)
