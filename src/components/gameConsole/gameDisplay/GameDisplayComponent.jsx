import { useEffect, useRef } from "react";
import { GameDisplaySVG } from "../gameConsoleResources";
import { GameContainerDiv, GameDisplayDiv, GameScreenDiv } from "./GameDisplayStyles";
import { useDispatch } from "react-redux";
import { clickPressed, clickReleased, jumpPressed, jumpReleased } from "../../../features/reducers/gameConsoleReducer";

export const GameDisplayComponent = ({children}) => {
    const gameRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        gameRef.current.addEventListener("mousedown", (e) => {e.preventDefault();dispatch(clickPressed())})
        gameRef.current.addEventListener("mouseup", () => dispatch(clickReleased()))
        gameRef.current.addEventListener("mouseout", () => dispatch(clickReleased()))
    }, [])

    return (
        
        <GameScreenDiv>
            <GameDisplayDiv>
                <GameDisplaySVG />
            </GameDisplayDiv>
            <GameContainerDiv ref={gameRef}> 
                    {children}
            </GameContainerDiv>
        </GameScreenDiv>

    )
};