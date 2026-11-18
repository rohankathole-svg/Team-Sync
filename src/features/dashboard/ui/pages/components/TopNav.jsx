import { Bell, Lightbulb, Menu, Moon, Search } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../../shared/state/themeSlice';
import { logoutApi } from '../../../../auth/apis/authApis';
import { removeEmployee } from '../../../../auth/state/auth/authSlice';

const TopNav = () => {

  
  let dispatch =useDispatch();

  let {mode}=useSelector((store)=>store.theme);

  let handleThemeChange=()=>{
  
      dispatch(toggleTheme())
  }

  let handleLogout = async()=>{
   await logoutApi();
   dispatch(removeEmployee());
  }


  return (
    <div className='flex justify-between items-center p-2'>
        
       <div className='flex gap-4 items-center border border-gray-600   rounded-md px-2 py-1 bg-[var(--bg-surface
       )]'>
        <Search size={23}/>
        <input type="text" placeholder="Search WorkSpace.."  className='outline-0 w-full'/></div>
       <div className='flex gap-4 '>
        {
          mode === 'light'?<Moon onClick={handleThemeChange} size={24}/>:<Lightbulb onClick={handleThemeChange} size={24}/>
        }

        
        <Bell size={24}/>
        <Menu  size={24}/>
        <button 
         onClick={handleLogout}
        className='text-white bg-black rounded px-3 py-0.5 cursor-pointer'>Log Out</button>
       </div>
 
    </div>
  )
}

export default  TopNav
