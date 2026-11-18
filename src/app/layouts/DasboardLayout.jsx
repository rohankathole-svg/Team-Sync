import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import AsideNav from '../../features/dashboard/ui/pages/components/AsideNav';
import TopNav from '../../features/dashboard/ui/pages/components/tOPnAV.JSX';

const DasboardLayout = () => {
  let {mode} = useSelector((store) =>store.theme);

 useEffect(() => {
   if(mode === "light"){
    document.body.classList.add("light");
   }else{
     document.body.classList.remove("light");
   } 
 },[mode]);




  return (
    <div className='h-screen grid grid-cols-[2fr_7fr] '>
        <div className='border-r border-gray-500  py-5 '><AsideNav/></div>
         <div className='flex flex-col gap-5 px-6 py-4 overflow-auto '>
          <TopNav />
          <div className='h-full overflow-auto overflow-x-auto thin-scrollbar'><Outlet /></div>
           
         </div>
    </div>
  )
};

export default DasboardLayout