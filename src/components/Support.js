import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate();
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
    Support Page Hai<br/>
    <button onClick={backHandler}>go back 1 page</button>
    </div>
  )
}

export default Support
