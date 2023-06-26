import { AppBaseDiv, BaseContentDiv } from "./appBaseStyles";
import { HeaderComponent } from "./header";
import { NavBarComponent } from "./navBar";

export const AppBaseComponent = ({registeredPages, children}) => {
    return (
        <AppBaseDiv>
            <HeaderComponent/>
            <NavBarComponent registeredPages={registeredPages}/>
            <BaseContentDiv>
                {children}
            </BaseContentDiv>
        </AppBaseDiv>
    )
};