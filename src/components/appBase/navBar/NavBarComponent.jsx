import { NavBarDiv } from "./NavBarStyles";
import { NavItem } from "./NavItem";

export const NavBarComponent = ({registeredPages}) => {

  const navItems = registeredPages.map((entry, index) => <NavItem key={index} {...entry}/>)

    return (
        <NavBarDiv> 
            {navItems}
        </NavBarDiv>
    )
};

