import styled, { css, keyframes } from "styled-components"

const ConsoleSwayAnimation = keyframes`
0% { transform: rotate3d(0, 0.5, 0.2, 10deg) }
25% { transform: rotate3d(0, 0, 0.5, 20deg) }
50% { transform: rotate3d(0, 1.2, 0.2, 10deg) }
75% { transform: rotate3d(0, 1.5, 0.4, 20deg) }
100% { transform: rotate3d(0, 1, 0.8, 10deg) }
`

const hoverAnimation = css`
transition: 0.5s;
&: hover {
    animation-name: ${ConsoleSwayAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    perspective: 800px;
    scale: 1.069;
}
`

export const ConsoleContainerDiv = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
max-height: 49.9rem;
justify-content: center;
align-items: stretch;
justify-items: center;
align-content: stretch;
overflow: hidden;
`

export const GameConsoleDiv = styled.div`
display: grid;
margin-left: 5rem;
grid-column: 1;
grid-row: 1/span 4;
min-width: 90rem;

`

