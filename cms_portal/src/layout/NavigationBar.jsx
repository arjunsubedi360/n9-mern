import React from 'react'
import BreadCrumps from '../component/navbar/BreadCrumps'
import Search from '../component/navbar/Search'
import Setting from '../component/navbar/Setting'

function NavigationBar() {
  return (
    <>
    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
       <BreadCrumps/>
        <div className="flex items-center">
          <Search/>
         <Setting/>
          
        </div>
      </div>
    </>
  )
}

export default NavigationBar