import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'; 
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';

import "./navbar.css"


function Navbar() {

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(prev => !prev);

	return (
		<div className='container'>
			
			<IconContext.Provider value={{color: `red`}}>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaBars onClick={showSidebar} />
				</Link>
			</div>

			<nav className={sidebar ? `nav-menu active` : `nav-menu`}>
				<ul className='nav-menu__items' onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiOutlineClose/>
						</Link>
					</li>

					{SidebarData.map((item, index)=>{
						return(
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}

				</ul>
			</nav>
			</IconContext.Provider>
		</div>
	);
}

export default Navbar;
