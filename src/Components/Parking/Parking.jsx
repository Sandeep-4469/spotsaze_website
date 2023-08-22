import React, { useEffect, useState } from 'react'
import "./styles.css"
import { FaChevronDown } from "react-icons/fa";
import axios from 'axios';

export default function Parking(props) {
    const [selected, setSelected] = useState(1)
    const [slots1, setSlots] = useState();
    const [url, seturl] = useState();
    useEffect(() => {

        try {
            axios.get(`https://8000-sandeep4469-psm03-oejt8n30q2k.ws-us104.gitpod.io/slots/?i=${props.selectedComapany + 1}&l=${props.selectedLevel}`,).then((res) => {
                console.log(res.data)
                setSlots(res.data.slotname)
            })

            axios.get(`https://8000-sandeep4469-psm03-oejt8n30q2k.ws-us104.gitpod.io/video/?i=${props.selectedComapany + 1}&l=${props.selectedLevel}`,).then((res) => {
                console.log(res.data)
                seturl(res.data)
            })
        } catch (error) {
            console.log(error)
        }

    }, [props.selectedComapany, props.selectedLevel])
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
                            <p>Level {props.selectedLevel}</p>
                            <FaChevronDown />
                        </div>
                        <p className='dropdownSlots'>{slots1.length}</p>
                    </div>
                    <div className="dropdown-content">

                        {props.companies[props.selectedComapany]?.slots?.map((_, idx) => {
                            return (
                                <p key={idx} onClick={() => {
                                    props.setSelectedLevel(idx + 1)

                                }} className='dropdownItems'>Level {idx + 1}</p>
                            )
                        })}

                    </div>
                </div>
            </div>

            <div className='parkingContainer'>
                <div className='parkingImageContainer'>
                    <img className='parkingImage' src={`https://8000-sandeep4469-psm03-oejt8n30q2k.ws-us104.gitpod.io/${url}`} alt="Parking" />
                </div>
                <div className='SlotsContainer'>
                    <p className='slotHead'>Slot ID's</p>
                        {slots1?.map((slot, idx) => {
                            return (
                                <p key={idx} className='slotContent'>{slot}</p>
                            )
                        })}

                </div>
            </div>
        </div>
    )
}
