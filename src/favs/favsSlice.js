import { createSlice } from '@reduxjs/toolkit'

export const favsSlice = createSlice({
  name: 'favs',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const charactersNames = state.value.map(({ name }) => name)
      if (
        state.value.length < 5 &&
        !charactersNames.includes(action.payload.name)
      ) {
        state.value = [...state.value, action.payload]
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter(({ name }) => name !== action.payload)
    },
  },
})

export const { add, remove } = favsSlice.actions

export default favsSlice.reducer
