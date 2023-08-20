import React, { useState } from 'react'
import "./styles.css"
import { FaChevronDown } from "react-icons/fa";

export default function Parking() {
    const [selected, setSelected] = useState(1)
    return (
        <div>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "flex-end" }}>
                <nav className='navBar'>
                    <ul className='navList'>
                        <li onClick={() => setSelected(1)} style={{ backgroundColor: selected === 1 ? "skyblue" : null, color: selected === 1 ? "white" : null }} className='navItem' >Home</li>
                        <li onClick={() => setSelected(2)} style={{ backgroundColor: selected === 2 ? "skyblue" : null, color: selected === 2 ? "white" : null }} className='navItem'>About</li>
                        <li onClick={() => setSelected(3)} style={{ backgroundColor: selected === 3 ? "skyblue" : null, color: selected === 3 ? "white" : null }} className='navItem'>Contact</li>
                    </ul>
                </nav>
            </div>
            <div>
                <div className="dropdown">
                    <div className='dropdownHead'>
                        <div className='dropdownlevel'>
                            <p>Level 1</p>
                            <FaChevronDown />
                        </div>
                        <p className='dropdownSlots'>5</p>
                    </div>
                    <div className="dropdown-content">
                        <p className='dropdownItems'>Level 1</p>
                        <p className='dropdownItems'>Level 2</p>
                        <p className='dropdownItems'>Level 3</p>
                    </div>
                </div>
            </div>

            <div className='parkingContainer'>
                <div className='parkingImageContainer'>
                    <img className='parkingImage' src={"https://8000-shashankcryptoco-psm02-66jig9x3id9.ws-us104.gitpod.io/video_feed1"} alt="Parking Image" />
                </div>
                <div className='SlotsContainer'>
                    <p className='slotHead'>Slot ID's</p>
                    <p className='slotContent'>G1</p>
                    <p className='slotContent'>G2</p>
                    <p className='slotContent'>G3</p>
                    <p className='slotContent'>G4</p>
                </div>
            </div>
        </div>
    )
}
