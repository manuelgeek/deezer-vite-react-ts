/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState: { value: string } = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.value = ''
    },
    addSearchTerm: (state, { payload }: { payload: string }) => {
      state.value = payload
    },
  },
})

export const { clearSearch, addSearchTerm } = searchSlice.actions

export default searchSlice.reducer
