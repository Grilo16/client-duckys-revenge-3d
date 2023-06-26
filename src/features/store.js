import { configureStore } from "@reduxjs/toolkit"
import gameConsoleReducer from "./reducers/gameConsoleReducer"
import gameReducer from "./reducers/gameReducer"

export const store = configureStore({
    reducer: {
        gameConsole: gameConsoleReducer,
        game: gameReducer
    }
})