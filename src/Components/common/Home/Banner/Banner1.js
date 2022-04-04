import React from 'react'
import Logo from '../../Logo/indexLogo'
import './Banner1.css'
import SearchIcon from '@mui/icons-material/Search';
const Banner1 = () => {
  return (
     <div className="header-content"> 
        <header>
           <Logo/>
           <div className='searchbar'>
              <input type="text" placeholder='Search'></input>
              <SearchIcon/>
           </div>
        </header>
       </div>
  )
}

export default Banner1