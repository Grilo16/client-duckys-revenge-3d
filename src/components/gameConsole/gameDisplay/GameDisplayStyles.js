import styled from "styled-components"

export const GameContainerDiv = styled.div`
position: relative;
border-radius: 10px;
grid-column: 1;
grid-row: 1;
width: 96.1%;
margin: -1rem 1.9% 2.3rem;
display: grid;
grid-template-columns: 1fr;
background-color: #ffffff;
justify-content: center;
align-items: stretch;
justify-items: center;
align-content: stretch;
overflow: hidden;
`

export const GameScreenDiv = styled.div`
grid-column: 1;
grid-row: 1;
display: grid;
grid-template-columns: 50rem;
grid-template-rows: 34rem;
transform: translate(0, 5rem);
`

export const GameDisplayDiv = styled.div`
position: relative;
grid-column: 1;
grid-row: 1;
display: grid;
min-width: 50rem;
min-height: 55rem;
justify-content: center;
justify-items: center;
transform: translate(0, -12rem);

`
