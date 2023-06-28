import { useEffect, useRef } from "react";
import { GameDisplaySVG } from "../gameConsoleResources";
import { GameContainerDiv, GameDisplayDiv, GameScreenDiv } from "./GameDisplayStyles";
import { useDispatch, useSelector } from "react-redux";
import { clickPressed, clickReleased, jumpPressed, jumpReleased, selectedPauseStatus } from "../../../features/reducers/gameConsoleReducer";
import { GameMenuComponent } from "../../game/gameMenu/GameMenuComponent";

export const GameDisplayComponent = ({children}) => {
    const gameRef = useRef()
    const dispatch = useDispatch()
    const pause = useSelector(selectedPauseStatus)

    useEffect(() => {
        gameRef.current.addEventListener("mousedown", (e) => {
            e.preventDefault()
            if (e.button == 0)
            dispatch(clickPressed())
        })
        gameRef.current.addEventListener("mouseup", (e) => e.button === 0 ?dispatch(clickReleased()): null)
        gameRef.current.addEventListener("mouseout", () => dispatch(clickReleased()))
    }, [])

    return (
        
        <GameScreenDiv>
            <GameDisplayDiv>
                <GameDisplaySVG />
            </GameDisplayDiv>
            <GameContainerDiv ref={gameRef}> 
                    {children}
        {pause ? <GameMenuComponent/> : null}

            </GameContainerDiv>
        </GameScreenDiv>

    )
};