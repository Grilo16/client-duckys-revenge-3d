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
z-index: 1;
top: -9.3rem;
left: 0.5rem;
overflow: hidden;

`