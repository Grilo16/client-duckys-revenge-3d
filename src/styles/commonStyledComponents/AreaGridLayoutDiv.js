import styled from "styled-components"

export const AreaGridLayoutDiv = styled.div`
display: grid;
grid-template-areas: ${({areaLayout}) => areaLayout ?? null };
${props => props};
`