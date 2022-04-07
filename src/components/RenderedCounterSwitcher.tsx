import styled from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'

const StyledCheckbox = styled.input<{ checked: boolean }>``

interface RenderedCounterSwitcherProps {
    value: boolean
    onChange: (event: any) => void
}

const RenderedCounterSwitcher: React.FC<RenderedCounterSwitcherProps> = ({ value, onChange }) => {
    return (
        <div>
            <label>Rendered Counter: </label>
            <StyledCheckbox type="checkbox" checked={value} onChange={onChange} />
        </div>
    )
}

export const RenderedCounterSwitcherV2: React.FC = () => {
    const [value, onChangeValue] = useLocalStorage('RCS', false)

    const onChangeHandler = (event: any) => {
        const isChecked = event.target.checked
        onChangeValue(isChecked)
        localStorage.setItem('RCS', JSON.stringify(isChecked))
    }

    return (
        <div>
            <label>Rendered Counter: </label>
            <StyledCheckbox type="checkbox" checked={value} onChange={onChangeHandler} />
        </div>
    )
}

export default RenderedCounterSwitcher
