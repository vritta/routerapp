import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/labs");
    }
  return (
    <div>
        Home Page Hai<br/>
        <button onClick={clickHandler}>lab page</button>
    </div>
  )
}

export default Home
