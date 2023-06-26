import { NavItemDiv } from "./NavBarStyles"
import { Link } from "react-router-dom";

export const NavItem = ({name, path}) => {
    return (
        <NavItemDiv>
            <Link to={path}>{name}</Link>
        </NavItemDiv>
    )
}