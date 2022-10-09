import { configureStore } from '@reduxjs/toolkit'
import favsReducer from './favsSlice'

export default configureStore({
  reducer: {
    favs: favsReducer,
  },
})
