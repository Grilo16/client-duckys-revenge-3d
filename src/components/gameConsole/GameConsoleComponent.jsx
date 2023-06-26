import { ConsoleContainerDiv, GameConsoleDiv } from "./gameConsoleStyles"
import { GameConsoleSVG } from "./gameConsoleResources"
import { ActionButtonsComponent } from "./actionButtons/ActionButtonsComponent";
import { DirectionButtonsComponent } from "./directionButtons/DirectionButtonsComponent";
import { GameDisplayComponent } from "./gameDisplay/GameDisplayComponent";


export const GameConsoleComponent = ({children}) => {

    return (
        <ConsoleContainerDiv>

                <GameConsoleDiv>
                    <GameConsoleSVG/>
                </GameConsoleDiv>


                <ActionButtonsComponent/>
                <DirectionButtonsComponent/>
                <GameDisplayComponent >
                    {children}
                </GameDisplayComponent>
        </ConsoleContainerDiv>


    )
};

