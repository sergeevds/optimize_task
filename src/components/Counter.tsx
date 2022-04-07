import styled, { keyframes } from 'styled-components'

const blinker = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledCounter = styled.div<{ color: string }>`
    background-color: ${(props: any) => props.color};
    color: #fff;
    width: fit-content;
    padding: 4px 16px;
    border-radius: 16px;
    margin-bottom: 4px;
    /* animation: ${blinker} 1s linear infinite;
    animation-delay: 2s;
    animation-iteration-count: 3; */
`

export default StyledCounter
