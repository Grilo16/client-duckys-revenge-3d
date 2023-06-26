import { GameComponent, GameConsoleComponent } from "components";
import { registerPage } from "../registeredPages";


export const HomePage = () => {

    return (
            <GameComponent/>
    )
};


registerPage("Home", "/", <HomePage/>)

