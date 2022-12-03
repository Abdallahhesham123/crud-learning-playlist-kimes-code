import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLogin: false , name :"abdallah" } 

const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginout: (state) => {
        state.isLogin = ! state.isLogin

  }
}
})

export const {  loginout } = authSlice.actions
export default authSlice.reducer