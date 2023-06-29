import { useDispatch, useSelector } from "react-redux"
import { ActionButton, ClickBtnLabel, FlyButtonSVG, JumpBtnLabel } from "../gameConsoleResources";
import { ActionButtonDiv, ActionButtonGroupDiv } from "./ActionButtonsStyles";
import { selectedClickStatus, selectedJumpStatus, togglePause } from "../../../features/reducers/gameConsoleReducer";
import { ShootButtonSVG } from "../gameConsoleResources/ActionButton/ShootButtonSVG";


export const ActionButtonsComponent = () => {
    const jumpStatus = useSelector(selectedJumpStatus)
    const clickStatus = useSelector(selectedClickStatus)

    return (
        
        <ActionButtonGroupDiv>

            <ShootButtonSVG isPressed={clickStatus}/> 
            <FlyButtonSVG isPressed={jumpStatus}/>

        </ActionButtonGroupDiv>
    
    )
};