import { useDispatch, useSelector } from "react-redux"
import { ActionButton, ClickBtnLabel, JumpBtnLabel } from "../gameConsoleResources";
import { ActionButtonDiv, ActionButtonGroupDiv } from "./ActionButtonsStyles";
import { selectedClickStatus, selectedJumpStatus, togglePause } from "../../../features/reducers/gameConsoleReducer";


export const ActionButtonsComponent = () => {
    const jumpStatus = useSelector(selectedJumpStatus)
    const clickStatus = useSelector(selectedClickStatus)

    return (
        
        <ActionButtonGroupDiv>

        <ActionButtonDiv  >
            <ActionButton pressed={clickStatus}/>
            <ClickBtnLabel pressed={clickStatus}/>
        </ActionButtonDiv>

        <ActionButtonDiv >
            <ActionButton pressed={jumpStatus}/>
            <JumpBtnLabel pressed={jumpStatus}/>
        </ActionButtonDiv>

        </ActionButtonGroupDiv>
    
    )
};