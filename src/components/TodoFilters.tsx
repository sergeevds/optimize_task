import React, { FC } from 'react'
import cn from 'classnames'
import { useDispatch } from 'react-redux'

import withCountRender from '../hoc/withCountRender'
import { AppDispatch } from '../store'
import { FilterActionCreators } from '../store/reducers/filters/action-creators'
import { useTypedSelector } from '../hooks/useTypedSelector'

type IFilter = {
    id: string
    label: string
}

const filters: IFilter[] = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
]

const TodoFilters: FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const { activeFilter } = useTypedSelector((state) => state.filters)

    const changeFilter: React.MouseEventHandler<HTMLDivElement> = (e): void => {
        const filter = (e.target as HTMLButtonElement).id

        if (filter && filter !== activeFilter) {
            dispatch(FilterActionCreators.changeFilter(filter))
        }
    }

    return (
        <div className={cn('todo-filters__container')} onClick={changeFilter}>
            {filters.map((filter) => (
                <button key={filter.id} id={filter.id} className={cn({ active: filter.id === activeFilter })}>
                    {filter.label}
                </button>
            ))}
        </div>
    )
}

export default withCountRender(TodoFilters)
