import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginout} from "./../store/authSlice";
const Header = () => {
  const {error}=useSelector(state=>state.bookSlice)
  const {isLogin} = useSelector(state=> state.authSlice);
  const dispatch = useDispatch();
  return (
    <>
    
    <nav className='navbar navbar-dark bg-dark'>
    <div className="container">
   
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit'
      
      onClick={()=>dispatch(loginout())}
      >
       {isLogin ? "Logout":"Log In"} 
      </button>
  
    </div>
    </nav>
{ error &&   <div className="alert alert-danger" role="alert">
    {error}
  </div>}
    
    </>

  );
};

export default Header;
