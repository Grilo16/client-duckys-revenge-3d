import { useDispatch } from "react-redux";
import { togglePause } from "../../../features/reducers/gameConsoleReducer";
import { styled } from "styled-components";
import { MenuButton } from "../gameConsoleResources";
import { useEffect, useRef, useState } from "react";

export const MiscButtonsComponent = () => {
    const buttonRef = useRef()
    const dispatch = useDispatch()
    const [pressed, setPressed] = useState(false)
    useEffect(() => {
        buttonRef?.current?.addEventListener("mousedown", () => setPressed(true))
        buttonRef?.current?.addEventListener("mouseup", () => setPressed(false))
        buttonRef?.current?.addEventListener("mouseleave", () => setPressed(false))

    }, [])

    return (
       <MiscButtonContainerDiv ref={buttonRef} onClick={() => dispatch(togglePause())}>
        <MenuButton pressed={pressed}/>
       </MiscButtonContainerDiv>
    )
};

const MiscButtonContainerDiv = styled.div`
position: relative;
grid-column: 7;
justify-self: center;
place-self: center;
grid-row: 7;
z-index: 1;

`