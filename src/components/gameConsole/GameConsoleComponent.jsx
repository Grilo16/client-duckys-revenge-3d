import { ConsoleContainerDiv, GameConsoleDiv } from "./gameConsoleStyles"
import { ActionButton, GameConsoleSVG, GameDisplaySVG } from "./gameConsoleResources"
import { ActionButtonsComponent } from "./actionButtons/ActionButtonsComponent";
import { DirectionButtonsComponent } from "./directionButtons/DirectionButtonsComponent";
import { GameDisplayComponent } from "./gameDisplay/GameDisplayComponent";
import { MiscButtonsComponent } from "./miscButtons/MiscButtonsComponent";
import styled from "styled-components"

export const GameConsoleComponent = ({children}) => {

    return (
<TestConsoleContainerDiv>
     <GameConsoleSVG style={{
        gridColumn: "2/ span 12",
        }}/>

         <ActionButtonsComponent/>
          <DirectionButtonsComponent/>
            <MiscButtonsComponent/>

            <GameDisplayComponent >
            {children}
            </GameDisplayComponent>

</TestConsoleContainerDiv>



        
        
        )
    };

    

const TestConsoleContainerDiv = styled.div`
position: relative;
display: grid;
grid-template-columns: 2.5% 2% 16% 1% 1% 22% 8% 22% 1% 1% 15% 2% 4.5%;
grid-template-rows: 8% 2% 20% 30% 19% 2%  7% 2% 4.5%;
rem;
place-content: center;
min-height: min(100%, 11.8rem);
max-height: min(100%, 42vw - 1%);
max-width: max(100%, 85vw);
margin: 0 7.5vw 0;
`

    
    // <ConsoleContainerDiv>

    //         <GameConsoleDiv>
    //             <GameConsoleSVG/>
    //         </GameConsoleDiv>

    //         <MiscButtonsComponent/>
    //         <ActionButtonsComponent/>
    //         <DirectionButtonsComponent/>


    //         <GameDisplayComponent >
    //             {children}
    //         </GameDisplayComponent>
    // </ConsoleContainerDiv>
