import React from 'react'
import { NavLink } from 'react-router'
import NavigationTab from './NavigationTab'
import {  ChartAreaIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { adminNavigation, employeeNavigation } from '../../../../../app/constants/navigations'

const AsideNav = () => {

  let {employee} =useSelector((store) => store.auth)

  let navigations = employee?.role === "admin" ? adminNavigation: employeeNavigation;



  return (
    <div>
     <div className='flex flex-col gap-1 mb-5 px-6'>
        <h1 className='text-2xl font-semibold text-[#CAB8F9]'>Team-Sync</h1>
        <p className='text-sm text-[var(--text-secondary)]'>Enterprise WorkSpace</p>
     </div>

     <div className='flex flex-col gap-3'>
       {
        navigations.map((route) => {
          return (
            <NavigationTab
              path={route.path}
              title={route.title}
              Icon={route.icon}
            />
          )
        })
       }
     </div>
    </div>
  )
}

export default AsideNav
