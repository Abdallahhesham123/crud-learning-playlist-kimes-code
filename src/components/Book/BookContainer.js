import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch ,useSelector} from 'react-redux';
import {fetchBooks,deleteBook,getBook} from "./../../store/bookSlice"
import './book.css';

const PostContainer = () => {
  const dispatch = useDispatch();
const {isLoading,books ,bookInfo}= useSelector(state=> state.bookSlice);
const {isLogin} = useSelector(state=> state.authSlice);

  useEffect(() => {

    dispatch(fetchBooks());
  }, [dispatch])
  

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading}
          books={books} 
          isLogin={isLogin}
           deleteBook ={deleteBook}
           dispatch ={dispatch}
           getBook={getBook}
          />
        </div>
        <div className='col side-line'>
          <BookInfo  bookInfo={bookInfo}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
