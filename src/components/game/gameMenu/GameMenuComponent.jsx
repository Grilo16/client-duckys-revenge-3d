import { keyframes, styled } from "styled-components";
import { registeredPages } from "../../../pages";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglePause } from "../../../features/reducers/gameConsoleReducer";

export const GameMenuComponent = () => {

    const dispatch= useDispatch()
const menuItems = registeredPages.map(({path, name}, index) => {
    return (
        <Link style={{textDecoration: "none"}} key={index} to={path}>
            <MenuItemDiv >
            <MenuItemLabelH4>{name}</MenuItemLabelH4>
            </MenuItemDiv>
        </Link>
    )
})

    return (
        <MenuBackgroundDiv onClick={() => dispatch(togglePause())}>
            <MenuContainerDiv>
                <MenuTitleDiv>
                    <MenuTitleH1>Menu</MenuTitleH1>
                </MenuTitleDiv>
                {menuItems}
                <Link style={{textDecoration: "none"}} target="_blank" to={"https://grilo16.github.io/DuckysRevengeGitHost/"}>
            <MenuItemDiv onClick={() => dispatch(togglePause())}>
               <MenuItemLabelH4> OG Ducky's revenge</MenuItemLabelH4>
            </MenuItemDiv>
        </Link>
            </MenuContainerDiv>
        </MenuBackgroundDiv>
    )
};

const MenuBackgroundDiv = styled.div`
background:rgba(69,69,69,0.3);
position: absolute;
min-height: 100%;
min-width: 100%;
`
const MenuEntryFrames = keyframes`
0% {height: 0rem; min-height: 0rem; }
100% {height: 35rem;}
`


const MenuContainerDiv = styled.div`
position: relative;
overflow: hidden;
min-height: 35rem;
max-width: 17rem;
background-color: #3A3238;
animation-name: ${MenuEntryFrames};
animation-duration: 1s;
animation-iteration-count: 1;
transform: rotateZ(5deg) translate(-3rem, -1rem);
&: hover{
    overflow: visible;
}
`

const MenuTitleH1 = styled.h1`
margin: 1rem -1rem 0 0;
color: #3A3238;
`

const MenuTitleDiv = styled.div`
display: grid;
border-radius: 5px;
place-items: center;
background-color: #b0adb2;
min-height: 6rem;
transform: rotateZ(-5deg) translate(-0.5rem);
`

const MenuItemDiv = styled.div`
display: grid;
margin: 1rem 0 1rem;
border-radius: 5px;
place-items: center;
min-height: 4rem;
max-height: 4rem;
min-width: 100%;
color: white;
background-color : #FF8C42;
&: hover {
    background-color: #FFF275;
    scale: 1.2;
    color: #3A3238;
};
transition: 0.2s;
transform: rotateZ(-5deg) translate(-0.5rem);
`

const MenuItemLabelH4 = styled.h4`
text-align: right;
margin: 0;
margin-right: -3rem;
`