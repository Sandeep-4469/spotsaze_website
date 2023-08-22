import React from 'react'
import "./styles.css"
export default function SideBar(props) {
  return (
    <div className='sideBarMainContainer'>
      <div className='sideBarHeadContainer'>

        <h1 className='sideBarMainHead'>SportSaze</h1>
        <h1 className='sideBarCompanyHead'>Companies</h1>
      </div>

      <input type="text" onChange={(e) => props.setSearched(e.target.value)} placeholder='Search for companies' className='searchInput' />
      <div className='sideBarCompaniesContainer'>
        <div className='companiesContainer'>
          {
            props?.companies?.map((company, idx) => {
              if (company?.name.toLowerCase().includes(props.searched.toLowerCase())) {
                return (
                  <p key={idx} onClick={() => {
                    props.setSelectedComapany(idx)
                    props.setSelectedLevel(1)
                  }} className={props.selectedComapany === idx ? "companiesActive" : 'companies'}>{company.name}</p>
                )
              }
              else{
                return null
              }

            })
          }
        </div>
      </div>
    </div>
  )
}
