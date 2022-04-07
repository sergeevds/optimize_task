import React, { useEffect, useState } from 'react'
import useCountRender from '../hooks/useCountRender'
import Counter from '../components/Counter'
import styled from 'styled-components'

function generateRandomColor() {
    let maxVal = 0xffffff // 16777215
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)
    return `#${randColor.toUpperCase()}`
}

const CounterWrapper = styled.div`
    border-color: ${(props) => props.color};
    border-width: 2px;
    border-style: solid;
    padding: 10px;
    border-radius: 16px;
`

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const withCountRender = (WrappedComponent) => {
    const color = generateRandomColor()

    const turnedOn = localStorage.getItem('RCS')
    // console.warn('withCountRender >>>', {
    //     turnedOn,
    //     res: turnedOn !== 'true'
    // })

    if (turnedOn !== 'true') {
        return WrappedComponent
    }

    function WithCountRenderFC(props) {
        const count = useCountRender()
        const [_, forceUpdate] = useState()

        const turnedOnInner = localStorage.getItem('RCS')

        // console.warn('FC: withCountRender >>>', {
        //     turnedOn,
        //     turnedOnInner,
        //     // res: turnedOn !== 'true'
        // })

        useEffect(() => {
            forceUpdate()
        }, [turnedOnInner])

        if (turnedOnInner !== 'true') {
            return <WrappedComponent {...props} />
        }
        // console.warn('IN HOC', { props, count, color })
        return (
            <CounterWrapper color={color}>
                <Counter color={color}>{count}</Counter>
                <WrappedComponent {...props} />
            </CounterWrapper>
        )
    }
    WithCountRenderFC.displayName = `withCountRender(${getDisplayName(WrappedComponent)})`
    return WithCountRenderFC
}

export default withCountRender
