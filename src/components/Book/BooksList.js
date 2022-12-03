import React from 'react';

const BooksList = ({isLoading , books , isLogin ,deleteBook ,dispatch,getBook}) => {
 let bookList =(books.length> 0) ?  books.map((item ,index)=>(
<li className='list-group-item d-flex  justify-content-between align-items-center' key={index}>
  <div>{item.title}</div>
  <div className='btn-group' role='group'>
    <button type='button' className='btn btn-primary'  onClick={()=> dispatch(getBook(item))}>
      Read
    </button>
    <button type='button' className='btn btn-danger' disabled={!isLogin}
     onClick={()=> dispatch(deleteBook(item)).unwrap()
      .then((originalPromiseResult) => {
     console.log('====================================');
     console.log(originalPromiseResult);
     console.log('====================================');
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log('====================================');
        console.log(rejectedValueOrSerializedError);
        console.log('====================================');
      })}
     >
      Delete
    </button>
  </div>
</li>

 )): "there is no book in this list"
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? ("Loading....") :(


<ul className='list-group'>
{bookList}
</ul>
      ) }

    </div>
  );
};

export default BooksList;
