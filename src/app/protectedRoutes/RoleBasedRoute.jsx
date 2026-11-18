import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet ,Navigate} from 'react-router'

const RoleBasedRoute = ({allowedRoles}) => {
  
    let{employee} =useSelector((store) =>store.auth);

    console.log("EMPLOYEE:", employee);
  console.log("EMPLOYEE ROLE:", employee?.role);
  console.log("ALLOWED ROLES:", allowedRoles);


    if(!allowedRoles.includes(employee?.role)){
         return <Navigate to="/unauthorized" />;
    }

  return <Outlet/>
}

export default RoleBasedRoute;