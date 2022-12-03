import { configureStore } from '@reduxjs/toolkit'

import bookSlice from './bookSlice'

import authSlice from './authSlice'
import reportSlice from './reportSlice'

export const store = configureStore({ reducer: {bookSlice , authSlice ,reportSlice } })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on