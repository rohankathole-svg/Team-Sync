import Home from "../../features/dashboard/ui/pages/Home"
import Settings from "../../features/settings/ui/pages/Settings"
import Chat from "../../features/chats/ui/pages/Chat"

export let commonRoutes = [
    { 
        path:"",
        element:<Home/>,
    },
     {
        path:"chat",
        element:<Chat/>,
    },
    {
        path:"setting",
        element:<Settings/>,
    }

];
