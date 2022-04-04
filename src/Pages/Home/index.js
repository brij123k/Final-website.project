import React from 'react'
import CartCountButton from '../../Components/common/CartCountButton'
import Footer from '../../Components/common/Footer/indexFooter'
import Banner1 from '../../Components/common/Home/Banner/Banner1'
import { menuItemsData } from '../../Components/common/Menu/data'
import { menuItemsData1 } from '../../Components/common/Menu/data1'
import Menu from '../../Components/common/Menu/indexMenu'
import Menu1 from '../../Components/common/Menu/indexMenu'
import Slider from '../../Components/common/Slider/Slider'
// import Proceed from '../../Components/common/Proceed/indedx'
import './index.css'

const Home = () => {
  return (
    <div>
        <Banner1/>
        <Slider/>
         <Menu list={menuItemsData} /> {/* menuItemData pass as a props */}
         <h3 className='name'>Main Menu</h3>
         <Menu1 list={menuItemsData1} /> 
        <Footer/>
        {/* <Proceed/> */}
        <CartCountButton/>
    </div>
  )
}

export default Home