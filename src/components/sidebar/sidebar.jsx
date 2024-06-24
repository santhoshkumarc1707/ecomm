import { Link } from "react-router-dom"
import './sidebar.scss';
const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <ul className="menu_links">
                <li className="li"> <Link to='/view'> View_items</Link></li>
                <li className="li"> <Link to='/productlist'> Product_List</Link></li>
            </ul>
        </div>

    )
}

export default Sidebar
