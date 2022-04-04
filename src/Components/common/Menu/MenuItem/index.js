import React from 'react'
import './styled.css'
import { useNavigate } from 'react-router'
const MenuItem = ({item}) => {
    const { id, name, img}=item
    const navigate = useNavigate();
  return (
    <div className='item' onClick={()=>navigate('/roti/' + id) }>
        <img src={img} alt="item" />
        <div className="item-head_desc">
            <p className='head_desc-name'>{name}</p>
        </div>
    </div>
  )
}

export default MenuItem