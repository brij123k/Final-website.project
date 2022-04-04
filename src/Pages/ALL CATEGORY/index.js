import React from 'react'
import { useParams } from 'react-router-dom';
import "../../Components/common/Menu/data"
import { menuItemsData } from '../../Components/common/Menu/data';
import Items from '../ALL CATEGORY/items/index'
import {Sampletest} from '../ALL CATEGORY//data'
import Proceed from '../../Components/common/Proceed/indedx';
import './styled.css'
const Roti = () => {


  let { id } = useParams();

  let a = menuItemsData.filter((val, idx) => { if(val.id==id) return val; } );
  console.log("selected item is ");
  console.log(a);
  return (
    <div className='main-map'>
     { a[0].name }
     <main>
      {Sampletest.map((item)=>(     
      <Items key={item.id}  item={item}/>
      ))}
    </main>
    <Proceed/>
    </div>
  )
}

export default Roti