import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import withCountRender from '../hoc/withCountRender'
import { AppDispatch } from '../store'
import { TodoActionCreators } from '../store/reducers/tasks/action-creators'
import { ITodo } from '../types/types'

interface TodoInputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onClick: () => void
}

const TodoInput: FC<TodoInputProps> = () => {
    const [value, setValue] = useState('')
    const dispatch: AppDispatch = useDispatch()

    const addTask = () => {
        if (value) {
            const newTodo: ITodo = {
                id: uuidv4(),
                title: value,
                isCompleted: false,
            }
            dispatch(TodoActionCreators.addTodo(newTodo))
            setValue('')
        }
    }

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setValue(e.target.value)
    }

    const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
        if (e.key === 'Enter') addTask()
    }

    return (
        <div className="todo-card todo-card-add">
            <div className="todo-card__btn" onClick={addTask}>
                <button className="todo-button">+</button>
            </div>
            <input
                className="todo-input"
                placeholder="Create a new todo..."
                onChange={onChange}
                value={value}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default withCountRender(TodoInput)
