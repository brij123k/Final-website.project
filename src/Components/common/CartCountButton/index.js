import React from 'react'
import { useNavigate } from 'react-router'
import './styled.css'

const CartCountButton = ({cartCount}) => {
  const navigate = useNavigate();
  return (
    <div className='btnCartCount' onClick={()=>navigate('/Cart')}>
      <div className='count'>3{cartCount>=100?'99+': cartCount}</div>
      <i className='fas fa-shopping-cart'></i>
    </div>
  )
}

export default CartCountButton