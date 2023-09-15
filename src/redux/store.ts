import { configureStore } from '@reduxjs/toolkit'
import ScienceTeamReducer from './science-team/science_team.reducer'

export const store = configureStore({
  reducer: {
    science_team:ScienceTeamReducer
  },
})

export default store