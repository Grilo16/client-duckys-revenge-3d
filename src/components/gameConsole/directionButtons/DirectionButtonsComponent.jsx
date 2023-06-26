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
                                    : e.key === "w"  && !directions.includes("up")
                                    ? dispatch(setDirection("up"))
                                    : e.key === "s" && !directions.includes("down")
                                    ? dispatch(setDirection("down"))
                                    : e.key === "a" && !directions.includes("left")
                                    ? dispatch(setDirection("left"))
                                    : e.key === "d" && !directions.includes("right")
                                    ? dispatch(setDirection("right"))
                                    : null
                                )
        document.addEventListener("keyup", (e) => 
                                    e.key === "w" 
                                    ? dispatch(removedDirection("up"))
                                    : e.key === "s"
                                    ? dispatch(removedDirection("down"))
                                    : e.key === "a"
                                    ? dispatch(removedDirection("left"))
                                    : e.key === "d"
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