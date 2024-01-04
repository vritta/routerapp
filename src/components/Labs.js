import React from 'react'
import { useNavigate } from 'react-router-dom';
const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/support");
    }
  return (
      <div>
        Labs Page Hai<br/>
        <button onClick={clickHandler}>support page</button>
      </div>
  )
}

export default Labs
