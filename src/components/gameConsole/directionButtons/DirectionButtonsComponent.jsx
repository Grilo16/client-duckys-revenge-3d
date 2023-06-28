import { useEffect, useState } from "react";
import { DirectionButtonsDiv } from "./DirectionButtonsStyles";
import { DownDirectionSVG, LeftDirectionSVG, NeutralDirectionSVG, RightDirectionSVG, UpDirectionSVG } from "../gameConsoleResources";
import { useDispatch, useSelector } from "react-redux";
import { jumpPressed, jumpReleased, removedDirection, selectedDirection, selectedDirections, setDirection } from "../../../features/reducers/gameConsoleReducer";

export const DirectionButtonsComponent = () => {

    const direction = useSelector(selectedDirection)
    const directions = useSelector(selectedDirections)
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener("keydown", (e) => 
                                    e.key === " " 
                                    ? dispatch(jumpPressed())
                                    : ["w", "W", "ArrowUp"].includes(e.key)  
                                    && !directions.includes("up")
                                    ? dispatch(setDirection("up"))
                                    : ["s", "S", "ArrowDown"].includes(e.key) 
                                    && !directions.includes("down")
                                    ? dispatch(setDirection("down"))
                                    : ["a", "A", "ArrowLeft"].includes(e.key)  
                                    && !directions.includes("left")
                                    ? dispatch(setDirection("left"))
                                    : ["d", "D", "ArrowRight"].includes(e.key)  
                                    && !directions.includes("right")
                                    ? dispatch(setDirection("right"))
                                    : null
                                )
        document.addEventListener("keyup", (e) => 
                                    ["w", "W", "ArrowUp"].includes(e.key)  
                                    ? dispatch(removedDirection("up"))
                                    : ["s", "S", "ArrowDown"].includes(e.key) 
                                    ? dispatch(removedDirection("down"))
                                    : ["a", "A", "ArrowLeft"].includes(e.key)  
                                    ? dispatch(removedDirection("left"))
                                    : ["d", "D", "ArrowRight"].includes(e.key)  
                                    ? dispatch(removedDirection("right"))
                                    : e.key === " "
                                    ? dispatch(jumpReleased())
                                    : null
                                )
    },[])

    return (
        <DirectionButtonsDiv>
        {
            direction === "up" 
            ? <UpDirectionSVG/>
            : direction === "down" 
            ? <DownDirectionSVG/>
            : direction === "left" 
            ? <LeftDirectionSVG/>
            : direction === "right" 
            ? <RightDirectionSVG/>
            : <NeutralDirectionSVG/>
        }
        </DirectionButtonsDiv>

    )
};