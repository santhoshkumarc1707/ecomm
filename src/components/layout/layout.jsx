import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../sidebar/sidebar';
import './layout.scss';
import { Outlet } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Layout = () => {
    const [btn, setBtn] = useState(false)
    const handleClick = () => {
        setBtn((pre) => !pre)
    }
    return (
        <div className='layout_container'>
            <div className={`sidebar_container ${btn ? "Active" : " "}`}>
                <Sidebar />

            </div>
            <div onClick={handleClick} className='font_content' >
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className='outlet_container'>
                <Outlet />
            </div>

        </div>
    )
}

export default Layout