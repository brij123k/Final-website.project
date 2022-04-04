import React from 'react'
import ButtonAddRemoveItem from '../../../Components/common/ButtonAddRemovItem'
import './styled.css'

const MenuItem = ({item}) => {
    const { name, info, price, img}=item
  return (
    <div className='categorey'>
     <img src={img} alt="item" />
        <div className="categorey-head_desc">
        
            <p className='head_desc-nameitem'>{name}</p>
            <p className='head_desc-infoo'><small>{info}</small></p>
        </div>
        <div className='categorey-foot_desc'>
            <span className='foot_desc-prices'>$26{price}</span>
            <ButtonAddRemoveItem quantity={1} />
        </div>
    </div>
  )
}

export default MenuItem