import React from "react"
import { AiFillHome } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdHelpCircle } from 'react-icons/io';



export const SidebarData=[
    {
        title:"Home",
        path: "/",
        icon:<AiFillHome/>,
        cName:`nav-text`
    },
    {
        title:"Reports",
        path: "/reports",
        icon:<IoIosPaper/>,
        cName:`nav-text`
    },
    {
        title:"Product",
        path: "/products",
        icon:<FaCartPlus/>,
        cName:`nav-text`
    },
    {
        title:"Team",
        path: "/team",
        icon:<IoMdPeople/>,
        cName:`nav-text`
    },
    {
        title:"Message",
        path: "/message",
        icon:<FaEnvelopeOpenText/>,
        cName:`nav-text`
    },
    {
        title:"Support",
        path: "/support",
        icon:<IoMdHelpCircle/>,
        cName:`nav-text`
    },
]