import { ConsoleContainerDiv, GameConsoleDiv } from "./gameConsoleStyles"
import { GameConsoleSVG } from "./gameConsoleResources"
import { ActionButtonsComponent } from "./actionButtons/ActionButtonsComponent";
import { DirectionButtonsComponent } from "./directionButtons/DirectionButtonsComponent";
import { GameDisplayComponent } from "./gameDisplay/GameDisplayComponent";
import { MiscButtonsComponent } from "./miscButtons/MiscButtonsComponent";


export const GameConsoleComponent = ({children}) => {

    return (
        <ConsoleContainerDiv>

                <GameConsoleDiv>
                    <GameConsoleSVG/>
                </GameConsoleDiv>

                <MiscButtonsComponent/>

                <ActionButtonsComponent/>
                <DirectionButtonsComponent/>
                <GameDisplayComponent >
                    {children}
                </GameDisplayComponent>

        </ConsoleContainerDiv>


    )
};

