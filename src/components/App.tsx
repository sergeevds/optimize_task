import React, { useState } from 'react'
import Todo from './Todo'

import { IoSunny, IoMoon } from 'react-icons/io5'
import RenderedCounterSwitcher, { RenderedCounterSwitcherV2 } from './RenderedCounterSwitcher'
import useLocalStorage from '../hooks/useLocalStorage'

const RENDERED_COUNTER_IS_DUMMY = process.env.REACT_APP_RENDERED_COUNTER_IS_DUMMY === '1'

const App: React.FC = () => {
    const [theme, setTheme] = useState('light')
    const changeTheme = (theme: string) => (): void => setTheme(theme)

    const [renderCounter, setRenderedCounter] = useLocalStorage('RCS', false)
    const onChangeRenderCounter = (event: any) => {
        const isChecked = event.target.checked
        setRenderedCounter(isChecked)
        localStorage.setItem('RCS', JSON.stringify(isChecked))
    }

    return (
        <div className={`app ${theme}`}>
            <div className="wrapper">
                <header>
                    <h1 className="app__title">TODO</h1>
                    {RENDERED_COUNTER_IS_DUMMY ? (
                        <RenderedCounterSwitcher value={renderCounter} onChange={onChangeRenderCounter} />
                    ) : (
                        <RenderedCounterSwitcherV2 />
                    )}
                    {theme === 'light' ? (
                        <IoMoon onClick={changeTheme('dark')} />
                    ) : (
                        <IoSunny onClick={changeTheme('light')} />
                    )}
                </header>
                <main>
                    <Todo />
                </main>
            </div>
        </div>
    )
}

export default App
