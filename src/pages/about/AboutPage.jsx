import { styled } from "styled-components";
import { registerPage } from "../registeredPages";


export const AboutPage = () => {


    return (
        <PageContainerDiv>

        <CardDiv>
        <TitleDiv>
            <h1>About:</h1>
        </TitleDiv>
        <ContentDiv>
            <p>Ducky's revenge is a natural evolution from the previously "world acclaimed" ducky game where you first got to experience shooting black holes from a rubber ducky. </p>
            <h4 style={{textAlign: "center"}}>This time ducky returns in 3 dimensions!!</h4>
            <p>This app built in React is currently a work in progress, and all constructive feedback is welcome! </p>
            <p>For more vist my <a href="https://github.com/Grilo16" target="_blank">Github</a> or get in touch via my <a href="https://www.linkedin.com/in/tom-jf-britton/" target="_blank">LinkedIn</a> </p>

            <p>Controls : Move with wasd or arrow keys, click to shoot blackholes, spacebar to fly, ducky follows mouse movement</p>
        </ContentDiv>


        </CardDiv>
    </PageContainerDiv>
    )
};

const PageContainerDiv = styled.div`
min-width: 90%;
max-width: 90%;
display: grid;
place-items: center stretch;
grid-template-rows: 30rem;


`

const TitleDiv = styled.div`
background-color: #FF8C42;
font-weight: 800;
color: #FFFFFF;
padding: 0 1rem 0;
font-spacing: -1px;
font-size: 1rem  
`
const ContentDiv = styled.div`
padding: 1rem;
background-color: #FFEF83;
font-weight: 600;
color: #3A3238;
`

const CardDiv = styled.div`
display: grid;
grid-template-rows: 0.1fr 2.5fr;
min-height: 16rem;
border-radius: 5px;
overflow: hidden;
`

registerPage("About", "/about", <AboutPage/>)

