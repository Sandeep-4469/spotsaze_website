import React from 'react'
import "./styles.css"
import SideBar from '../SideBar/SideBar'
import Parking from '../Parking/Parking'
export default function Home() {
  return (
    <div className='homeContainer'>
        <div className='sideBarContainer'>
            <SideBar/>
        </div>
        <div className='mainContainer'>
          <Parking/>
        </div>
    </div>
  )
}
