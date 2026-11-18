import { Building, ChartArea, File, LayoutDashboard, List, PersonStanding, Presentation, Settings } from "lucide-react";


export let employeeNavigation =[

    {
        path:"/home",
        title:"Dashboard",
        icon:LayoutDashboard,
    },
     {
        path:"/home/myTask",
        title:"My Tasks",
        icon:List,
    },
     {
        path:"/home/chat",
        title:"Chats",
        icon:<ChartArea size={20} />
    },
    {
        path:"/home/attendance",
        title:"Attendance",
        icon:<Presentation size={20} />
    },
    {
        path:"/home/profile",
        title:"Profile",
        icon:<PersonStanding size={20} />
    },
    {
        path:"/home/setting",
        title:"Settings",
        icon:<Settings size={20} />
    },
];

export let adminNavigation =[

    {
        path:"/home",
        title:"Dashboard",
        icon:<LayoutDashboard size={20} />
    },
     {
        path:"/home/task",
        title:"Task",
        icon:<List size={20} />
    },
     {
        path:"/home/chat",
        title:"Chats",
        icon:<ChartArea size={20} />
    },
    {
        path:"/home/employee",
        title:"Employee",
        icon:<PersonStanding size={20} />
    },
    {
        path:"/home/document",
        title:"Document",
        icon:<File size={20} />
    },
    {
        path:"/home/department",
        title:"Department",
        icon:<Building size={20} />
    },
    {
        path:"/home/setting",
        title:"Settings",
        icon:<Settings size={20} />
    },
];