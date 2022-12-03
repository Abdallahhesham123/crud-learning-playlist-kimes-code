import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'

import { insertLogs } from './reportSlice'


const initialState = { books: [] , isLoading: false ,error: null ,bookInfo: {}}
export const fetchBooks = createAsyncThunk("book/fetchBooks",async (_,thunkApi)=>{
const {RejectWithValue}= thunkApi
try {
    // part2 
    // dispatch ({type:book/fetchBooks/pending ,payload:undefined})
    const res = await fetch(" http://localhost:3009/books")
    const data = await res.json();
    // console.log(data);
    return data;
    // // dispatch ({type:book/fetchBooks/fullfilled ,payload:data})
} catch (error) {
      // // dispatch ({type:book/fetchBooks/rejected ,payload:error})
      return RejectWithValue(error.message);
}
})
//part1 create asuncthunk
// pending fullfilled ,rejected



export const insertBook = createAsyncThunk("book/insertBook",async(bookData,thunkApi)=>{
    const {RejectWithValue , getState ,dispatch}= thunkApi

    // dispatch(deleteBook({id:3}))
try {
    bookData.userName = getState().authSlice.name;
    const res = await fetch(" http://localhost:3009/books",{

    method: "POST",
    body: JSON.stringify(bookData),
    headers: {
        "content-type": "application/json ; charset=utf-8"
    }
    })
    const data = await res.json();
    dispatch(insertLogs({name:"insertbook", status:"success"}))
    // console.log(data);
    return data;
} catch (error) {
    dispatch(insertLogs({name:"insertbook", status:"failed"}))
    return RejectWithValue(error.message);
}

})

export const deleteBook = createAsyncThunk("book/deleteBook",async (item,thunkApi)=>{
    const {RejectWithValue}= thunkApi
try {
 
    const res = await fetch(`http://localhost:3009/books/${item.id}`,{

    method: "DELETE"
    })
 
    // console.log(res);
    return item;
} catch (error) {
    return RejectWithValue(error.message);
}

    

})
export const getBook = createAsyncThunk("book/getBook",async (item,thunkApi)=>{
    const {RejectWithValue}= thunkApi
try {
 
    const res = await fetch(`http://localhost:3009/books/${item.id}`,{

    method: "GET",
    headers: {
        "content-type": "application/json ; charset=utf-8"
    }
   
    })
    const data = await res.json();
 
    // console.log(data);
    return data;
} catch (error) {
    return RejectWithValue(error.message);
}

    

})
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: {
//fetchbooks

        [fetchBooks.pending]:(state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchBooks.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [fetchBooks.rejected]:(state,action) => {
            state.isLoading = false
            state.error = action.error.message;


        },

        // inset books
        [insertBook.pending]:(state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertBook.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.books.push(action.payload);
        },
        [insertBook.rejected]:(state,action) => {
            state.isLoading = false
            state.error = action.error.message;


        },

        // delete book
        [deleteBook.pending]:(state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteBook.fulfilled]:(state,action) => {

            state.isLoading = false;
            state.books= state.books.filter((el)=> el.id !== action.payload.id)
      
        },
        [deleteBook.rejected]:(state,action) => {

            state.isLoading = false
            state.error = action.error.message;
        },
        //get book 1stmethode
        [getBook.pending]:(state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBook.fulfilled]:(state,action) => {

            state.isLoading = false;
            state.bookInfo= action.payload
        
        },
        [getBook.rejected]:(state,action) => {

            state.isLoading = false
            state.error = action.error.message;
        }


    }

  })
  
//   export const {  } = bookSlice.actions
  export default bookSlice.reducer