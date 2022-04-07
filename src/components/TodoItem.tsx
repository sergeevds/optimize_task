import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import { ITodo } from '../types/types'
import withCountRender from '../hoc/withCountRender'
import { AppDispatch } from '../store'
import { TodoActionCreators } from '../store/reducers/tasks/action-creators'

interface ITodoItemProps {
    todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({ todo: { id, isCompleted, title } }) => {
    const dispatch: AppDispatch = useDispatch()

    const removeTodo = (): void => {
        dispatch(TodoActionCreators.removeTodo(id))
    }

    const completeTodo = () => {
        dispatch(TodoActionCreators.completeTodo(id))
    }

    return (
        <li className="todo-card todo-item">
            <div
                className={cn('todo-card__btn', {
                    'todo-item__check': isCompleted,
                })}
            >
                <input className="todo-item__checkbox" type="checkbox" checked={isCompleted} onChange={completeTodo} />
            </div>
            <span className={cn('todo-item__text', { complete: isCompleted })}>{title}</span>
            <button onClick={removeTodo}>
                <span className="todo-item__cross">x</span>
            </button>
        </li>
    )
}

export default withCountRender(TodoItem)
