import { createSlice } from "@reduxjs/toolkit";


const gameReducer = createSlice({
    name: "game",
    
    initialState: {
        firedProjectiles : [], 
      
    },

    reducers: {

        setPlayerPosition: (state, action) => {
            state.playerPosition = {...action.payload}
        },

        projectileFired: (state, action) => {
            state.firedProjectiles.filter(({status}) => status === "fired")
            
            state.firedProjectiles.push({...action.payload})
            
        },

        projectileExpired: (state, action) => {
            const projectile =  state.firedProjectiles.find(({key}) => key === action.payload )
            projectile.status = "colided"
        },
    }
})

export default gameReducer.reducer
export const { projectileFired, projectileExpired } = gameReducer.actions

export const selectedFiredProjectiles = (state) => state.game.firedProjectiles
