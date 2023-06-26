import { createSlice } from "@reduxjs/toolkit";


const gameConsoleReducer = createSlice({
    name: "gameConsole",
    
    initialState: {
        direction: ["neutral"],
        clickStatus: false,
        jumpStatus: false,
    },

    reducers: {


        setDirection: (state, action) => {
            if (!state.direction.includes(action.payload)){
                state.direction.push(action.payload)
            }
        },

        removedDirection: (state, action) => {
            state.direction = state.direction.filter(direction => direction !== action.payload)
        },

        jumpPressed: (state, action) => {
            state.jumpStatus = true
        },

        jumpReleased: (state, action) => {
            state.jumpStatus = false
        },
      
        clickPressed: (state, action) => {
            state.clickStatus = true
        },
        
        clickReleased: (state, action) => {
            state.clickStatus = false

        }
    },
 
})

export default gameConsoleReducer.reducer
export const {  jumpPressed, jumpReleased, setDirection, removedDirection, clickPressed, clickReleased } = gameConsoleReducer.actions

export const selectedClickStatus = (state) => state.gameConsole.clickStatus
export const selectedJumpStatus = (state) => state.gameConsole.jumpStatus
export const selectedDirection = (state) => state.gameConsole.direction.at(-1)
export const selectedDirections = (state) => state.gameConsole.direction