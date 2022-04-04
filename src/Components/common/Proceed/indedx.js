import React from 'react'
import { useNavigate } from 'react-router'
import './styled.css'

const Proceed = () => {
  const navigate = useNavigate();
  return (
     
    <div className='button-div'>
        <div className='button-pp'><p>Total Price:</p>
        <p>$344 <span><strike id="discount">$50</strike></span></p></div>
       <button className='button-proceed' onClick={()=>navigate('/Cart')} >PROCEED</button> 
    </div>
  )
}

export default Proceed