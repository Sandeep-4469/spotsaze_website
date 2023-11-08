import React, { useEffect, useState } from 'react'
import "./styles.css"
import SideBar from '../SideBar/SideBar'
import Parking from '../Parking/Parking'
import axios from 'axios'
export default function Home() {
  const [searched, setSearched] = useState("")
  const [selectedComapany, setSelectedComapany] = useState(0)
  const [selectedLevel,setSelectedLevel] = useState(1)
  const [companies,setCompanies] = useState([])

  useEffect(()=>{
    const getCompanies = ()=>{
      
      try {
          axios.get("https://spotsaze-dw5whmz2hq-ue.a.run.app/companies").then((res)=>{
            setCompanies(res.data)
          })
          
        } catch (error) {
          console.log(error)
        }

      
    }
    getCompanies()
  },[])
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
