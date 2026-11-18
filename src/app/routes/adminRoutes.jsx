import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Department from "../../features/admin module/departments/ui/pages/Department";
import Task from "../../features/admin module/tasks/ui/pages/Task";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Settings from "../../features/settings/ui/pages/Settings";
import AddEmployee from "../../features/admin module/employees/ui/pages/AddEmployee";
import AllDepartment from "../../features/admin module/departments/ui/pages/AllDepartment";


export let adminRoutes =[

    {
        path:"/home/employee",
        element:<Employee />,

    },
    {
       path:"add-employee",
      element:<AddEmployee/>
      },
    {
        path:"/home/department",
        element:<Department/>
    },
    {
        path:"/home/task",
        element:<Task />
    },
     {
        path:"/home/all-departments",
        element:<AllDepartment/>
    },
    {
        path:"/home/document",
        element:<Document />
    },
    
]