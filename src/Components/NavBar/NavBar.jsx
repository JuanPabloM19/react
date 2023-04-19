import { Link, NavLink } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget"
import logo from "../../Utils/img/logo.png"

const NavBar = () => {
    return(
        <nav className="Navbar">
            <Link to='/'>
                <h3>Eccommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/celular`} className={({isActive}) => isActive?'ActiveOption':'Option'}/>
                <NavLink to={`/category/tablet`} className={({isActive}) => isActive?'ActiveOption':'Option'}/>
                <NavLink to={`/category/notebook`} className={({isActive}) => isActive?'ActiveOption':'Option'}/>
            </div>
        </nav>
)    
}
export default NavBar