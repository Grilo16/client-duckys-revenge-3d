import styled from "styled-components"

export const AppBaseDiv = styled.div`
display: grid;
grid-template-rows: 0.2fr 0.05fr 1fr; 
min-height: 100vh;
min-width: min-content;
background: radial-gradient(50% 50% at 50% 50%, #FFFFFA 0%, #ACA9AF 100%);
grid-template-areas: 
    "header"
    "navBar"
    "content";
overflow: hidden;
`
export const BaseContentDiv = styled.div`
grid-area: content;
display: grid;
place-items: stretch;
height: inherit;
margin: 1rem;
`