import React, { useState } from 'react'
import "./styles.css"
import SideBar from '../SideBar/SideBar'
import Parking from '../Parking/Parking'
export default function Home() {
  const [searched, setSearched] = useState("")
  const [selectedComapany, setSelectedComapany] = useState(0)
  const [selectedLevel,setSelectedLevel] = useState(1)
  const [companies,selectedComapanies] = useState([{ name: "CMR" ,slots:[0,0,0]}, { name: "GVP",slots:[0,0] }, { name: "STBL" ,slots:[0,0,0]}])
  return (
    <div className='homeContainer'>
      <div className='sideBarContainer'>
        <SideBar
          companies= {companies}
          selectedComapany={selectedComapany}
          setSelectedComapany={setSelectedComapany}
          searched={searched}
          setSearched={setSearched}
          setSelectedLevel={setSelectedLevel} />
      </div>
      <div className='mainContainer'>
        <Parking
          companies= {companies}
          selectedComapany={selectedComapany}
          setSelectedComapany={setSelectedComapany}
          searched={searched}
          setSearched={setSearched}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel} />
      </div>
    </div>
  )
}
