import styled from "styled-components"

export const GameContainerDiv = styled.div`
grid-column: 6/ span 3;
grid-row: 3/ span 4;
margin-left: 1%;

position: relative; 
display: grid;
overflow: auto;
align-items: stretch;
justify-items: center;
align-content: stretch;
margin: 0.1rem;
margin-left: 0.7rem;
background-color: #ffffff;
border: solid 0.5rem #FBFCBF;
border-radius: 5px;

 &::-webkit-scrollbar {
     width: 0px;
 }
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
