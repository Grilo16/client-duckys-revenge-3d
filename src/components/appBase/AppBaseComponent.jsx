import { AppBaseDiv, BaseContentDiv } from "./appBaseStyles";
import { HeaderComponent } from "./header";

export const AppBaseComponent = ({children}) => {
    return (
        <AppBaseDiv>
            <HeaderComponent/>
            <BaseContentDiv>
                {children}
            </BaseContentDiv>
        </AppBaseDiv>
    )
};