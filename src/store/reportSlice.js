import { createSlice } from '@reduxjs/toolkit'

const initialState = { logs: [] } 

const reportSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    insertLogs: (state ,action) => {
        state.logs.push(action.payload)

  }
}
})

export const {  insertLogs } = reportSlice.actions
export default reportSlice.reducer